import tiktoken
import re
import logging
from pathlib import Path

# Configuration
EXCLUDE_DIRS = [
    'venv', 'node_modules', '.git', 'build', 'dist', '.github',
    'target', 'out', 'bin', 'lib', '.idea', '.vscode', '.settings',
    'agent.log', 'exchange_log.json', '.next', 'public',
    'p.md', 'generated-projects', '.aws-sam', 'logs', 'src/icons/untitled-ui/duocolor'
]

INCLUDE_DIRS = ['.']
INCLUDE_FILE_EXTENSIONS = ['sh', 'yml', 'yaml', 'ts', 'tsx']
EXCLUDE_FILE_EXTENSIONS = ['log', 'md', 'txt', 'json']

EXCLUDE_FILES = [
    'package-lock.json', 'yarn.lock', 'conversation.json', 'exchange_log.json',
    'readme.md', 'exchange_log.md', 'p.md', '.env', 'bash.bash', '.eslintrc.json', 
    '.cursorrules', 'prompt.md', 'objectives.md', 'debug.log', ' next.d.ts', 
    'tsconfig.json', 'package.json', 'next.config.js', 'next-env.d.ts', 'a.py', 'b.py', 'f.py'
]

INCLUDE_FILES = ['']

OUTPUT_FILE = 'prompt.md'
PROMPT_FILE = '.cursorrules'

logging.basicConfig(level=logging.ERROR, format='%(message)s')
logger = logging.getLogger()

def get_language(file: str) -> str:
    """Return language based on the file extension."""
    mapping = {
        '.php': 'php',
        '.yml': 'yaml',
        '.yaml': 'yaml',
        '.js': 'javascript',
        '.ts': 'typescript',
        '.tsx': 'typescript',
        '.css': 'css',
        '.json': 'json',
        '.py': 'python'
    }
    for ext, lang in mapping.items():
        if file.endswith(ext):
            return lang
    return 'plaintext'

def load_prompt() -> str:
    """Load prompt content from PROMPT_FILE; prefer content within <system> tags."""
    path = Path(PROMPT_FILE)
    if not path.exists():
        logger.error(f'Error: Prompt file not found: {PROMPT_FILE}')
        return None

    content = path.read_text(encoding='utf-8')
    if not content.strip():
        logger.error(f'Error: Prompt file is empty: {PROMPT_FILE}')
        return None

    match = re.search(r'<system>([\s\S]*?)<\/system>', content)
    if match:
        logger.error('Prompt loaded successfully from <system> tags')
        return match.group(1)
    
    logger.error('No <system> tags found, using entire file content')
    return content.strip()

def load_objectives() -> str:
    """Load objectives from objectives.md using defined tags."""
    path = Path('objectives.md')
    if not path.exists():
        logger.error('Error: Goals file not found: objectives.md')
        return 'No objectives defined.'

    content = path.read_text(encoding='utf-8')
    pattern = (
        r'<feature_objectives>([\s\S]*?)<\/feature_objectives>|'
        r'<goals>([\s\S]*?)<\/goals>|'
        r'<objective>([\s\S]*?)<\/objective>'
    )
    match = re.search(pattern, content)
    if match:
        for group in match.groups():
            if group and group.strip():
                logger.error('Debug: Objectives content:')
                logger.error(group)
                return group
    logger.error('Error: No content found between objectives tags in objectives.md')
    return 'No objectives defined.'

def is_file_included(file: str) -> bool:
    """Determine file inclusion using weighted rules."""
    weights = {
        'include_file': 100,
        'exclude_file': 90,
        'include_dir': 80,
        'exclude_dir': 70,
        'include_ext': 60,
        'exclude_ext': 50
    }
    
    rules = []
    if file in INCLUDE_FILES:
        rules.append(('include_file', weights['include_file']))

    if file in EXCLUDE_FILES:
        rules.append(('exclude_file', weights['exclude_file']))

    for dir_ in INCLUDE_DIRS:
        if file.startswith(f'{dir_}/'):
            rules.append(('include_dir', weights['include_dir']))

    for dir_ in EXCLUDE_DIRS:
        if file.startswith(f'{dir_}/'):
            rules.append(('exclude_dir', weights['exclude_dir']))

    if '.' in file:
        ext = file.split('.')[-1]
        if ext in INCLUDE_FILE_EXTENSIONS:
            rules.append(('include_ext', weights['include_ext']))
        if ext in EXCLUDE_FILE_EXTENSIONS:
            rules.append(('exclude_ext', weights['exclude_ext']))

    if not rules:
        return False

    rules.sort(key=lambda rule: rule[1], reverse=True)
    top_weight = rules[0][1]
    top_rules = [r for r in rules if r[1] == top_weight]
    return any(rule[0].startswith('include') for rule in top_rules)

def should_exclude_dir(dir_path: str) -> bool:
    """Return True if the directory should be excluded based on matching rules."""
    norm_dir = dir_path.rstrip('/\\')
    for exc in EXCLUDE_DIRS:
        norm_exc = exc.rstrip('/\\')
        if norm_dir == norm_exc or norm_dir.startswith(f'{norm_exc}/'):
            for inc in INCLUDE_DIRS:
                norm_inc = inc.rstrip('/\\')
                if norm_dir.startswith(norm_inc) or norm_inc.startswith(norm_dir):
                    return False
            return True
    return False

def traverse_directory(dir_path: str, file_list: list) -> list:
    """Recursively traverse dir_path and append valid files to file_list."""
    try:
        entries = list(Path(dir_path).iterdir())
    except PermissionError as e:
        logger.error(f'Permission denied: {dir_path} ({e})')
        return file_list

    for entry in entries:
        try:
            full = entry.resolve()
            relative = str(full.relative_to(Path('.').resolve()))
        except ValueError:
            continue

        if entry.is_dir():
            if should_exclude_dir(relative):
                logger.error(f'Excluding directory: {relative}')
                continue
            traverse_directory(relative, file_list)
        elif entry.is_file():
            file_list.append(relative)
    return file_list

def count_tokens_in_file(file_path: str) -> int:
    """
    Count tokens in a file using GPT-4's tiktoken encoder.
    
    Example:
      cnt = count_tokens_in_file('prompt.md')
    """
    try:
        enc = tiktoken.encoding_for_model("gpt-4")  # Initialize encoder
        content = Path(file_path).read_text(encoding='utf-8')  # Read file
        tokens = enc.encode(content)  # Encode content
        return len(tokens)  # Return token count
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")
    return None

def generate_markdown():
    """
    Generate a markdown file by embedding the prompt, file contents,
    and objectives.
    """
    logger.error('Starting markdown generation...')
    md_lines = []

    prompt = load_prompt()
    if not prompt:
        logger.error('Failed to load prompt, using fallback')
        prompt = (
            'You will be provided with files and their contexts inside ``` code blocks ```. '
            'Your task is to provide assistance based on these file contexts and defined Goals.'
        )
    else:
        logger.error('Prompt loaded successfully')

    md_lines.extend([prompt, '\n\n', '# File Contents', '\n'])
    logger.error('Building file list...')

    files = traverse_directory('.', [])
    logger.error('Processing files...')

    for file in files:
        if is_file_included(file):
            logger.error(f'Processing file: {file}')
            lang = get_language(file)
            md_lines.append(f'```{lang}:{file}')
            try:
                content = Path(file).read_text(encoding='utf-8')
                md_lines.extend([content, '\n```'])
            except Exception as e:
                logger.error(f'Error reading {file}: {e}')
        else:
            logger.error(f'Skipping file: {file}')

    objectives = load_objectives()
    if objectives:
        logger.error('Objectives loaded successfully')
        md_lines.extend(['\n## Features:\n', '---\n', objectives, '\n---\n'])
    else:
        logger.error('Failed to load objectives')

    try:
        Path(OUTPUT_FILE).write_text('\n'.join(md_lines), encoding='utf-8')
        logger.error(f'Markdown generated: {OUTPUT_FILE}')
    except Exception as e:
        logger.error(f'Error writing to {OUTPUT_FILE}: {e}')

if __name__ == '__main__':
    generate_markdown()
    tokens = count_tokens_in_file(OUTPUT_FILE)
    if tokens is not None:
        print(f"Number of tokens in the file: {tokens}")