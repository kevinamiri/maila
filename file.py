import os
import re
import logging
from pathlib import Path

# 📄 Configuration
EXCLUDE_DIRS = [
    'venv', 'node_modules', '.git', 'build', 'dist', '.github',
    'target', 'out', 'bin', 'lib', '.idea', '.vscode', '.settings',
    'agent.log', 'exchange_log.json', '.next', 'public',
    'p.md', 'src', 'generated-projects',
    'src', 'plugins', 'amplify', '.cache', 'static'
]

INCLUDE_DIRS = [
    'src/theme'  # Specific directory inclusion
]

INCLUDE_FILE_EXTENSIONS = ['php', 'yml', 'yaml', 'ts', 'json']
EXCLUDE_FILE_EXTENSIONS = ['log', 'md', 'txt']

EXCLUDE_FILES = [
    'package-lock.json', 'yarn.lock', 'conversation.json', 'exchange_log.json',
    'readme.md', 'exchange_log.md', 'p.md', '.env', 'bash.bash', '.eslintrc.json', '.cursorrules', 'prompt.md', 'objectives.md', 'debug.log', ' next.d.ts', 'tsconfig.json', 'package.json', 'next.config.js', 'next-env.d.ts',
    'src/theme/oldtheme.js', 'src/theme/shadows.js'
]

INCLUDE_FILES = ['debug.log']  # Example include file

OUTPUT_FILE = 'prompt.md'
PROMPT_FILE = '.cursorrules'

# 📄 Logging Configuration
logging.basicConfig(level=logging.ERROR, format='%(message)s')
logger = logging.getLogger()

def get_language(file: str) -> str:
    """Determine the language based on file extension."""
    if file.endswith('.php'):
        return 'php'
    if file.endswith(('.yml', '.yaml')):
        return 'yaml'
    if file.endswith('.js'):
        return 'javascript'
    if file.endswith(('.ts', '.tsx')):
        return 'typescript'
    if file.endswith('.css'):
        return 'css'
    if file.endswith('.json'):
        return 'json'
    if file.endswith('.py'):
        return 'python'
    return 'plaintext'

def load_prompt() -> str:
    """Load prompt content from PROMPT_FILE."""
    if not Path(PROMPT_FILE).exists():
        return None

    content = Path(PROMPT_FILE).read_text(encoding='utf-8')
    match = re.search(r'<system>([\s\S]*?)<\/system>', content)
    return match.group(1) if match else None

def load_objectives() -> str:
    """Load objectives content from objectives.md."""
    goals_file = 'objectives.md'
    if not Path(goals_file).exists():
        logger.error(f'Error: Goals file not found: {goals_file}')
        # Optionally, return a default objective or prompt the user
        return 'No objectives defined.'

    content = Path(goals_file).read_text(encoding='utf-8')
    match = re.search(r'<goals>([\s\S]*?)<\/goals>', content)
    if match and match.group(1):
        logger.error('Debug: Objectives content:')
        logger.error(match.group(1))
        return match.group(1)
    else:
        logger.error(f'Error: No content found between <goals> tags in {goals_file}')
        return 'No objectives defined.'

def is_file_included(file: str) -> bool:
    """Determine if a file should be included based on inclusion and exclusion rules with weighted precedence."""
    rule_weights = {
        'include_file': 100,
        'exclude_file': 90,
        'include_dir': 80,
        'exclude_dir': 70,
        'include_ext': 60,
        'exclude_ext': 50
    }

    applied_rules = []

    # Check INCLUDE_FILES
    for inc_file in INCLUDE_FILES:
        if file == inc_file:
            applied_rules.append(('include_file', rule_weights['include_file']))

    # Check EXCLUDE_FILES
    for exc_file in EXCLUDE_FILES:
        if file == exc_file:
            applied_rules.append(('exclude_file', rule_weights['exclude_file']))

    # Check INCLUDE_DIRS
    for inc_dir in INCLUDE_DIRS:
        if file.startswith(f'{inc_dir}/'):
            applied_rules.append(('include_dir', rule_weights['include_dir']))

    # Check EXCLUDE_DIRS
    for exc_dir in EXCLUDE_DIRS:
        if file.startswith(f'{exc_dir}/'):
            applied_rules.append(('exclude_dir', rule_weights['exclude_dir']))

    # Check file extensions
    if '.' in file:
        ext = file.split('.')[-1]
        # Check INCLUDE_FILE_EXTENSIONS
        if ext in INCLUDE_FILE_EXTENSIONS:
            applied_rules.append(('include_ext', rule_weights['include_ext']))
        # Check EXCLUDE_FILE_EXTENSIONS
        if ext in EXCLUDE_FILE_EXTENSIONS:
            applied_rules.append(('exclude_ext', rule_weights['exclude_ext']))

    if not applied_rules:
        # Default action if no rules match
        return False

    # Determine the rule with the highest weight
    applied_rules.sort(key=lambda x: x[1], reverse=True)
    highest_weight = applied_rules[0][1]
    # Get all rules with the highest weight
    highest_rules = [rule for rule in applied_rules if rule[1] == highest_weight]

    # If multiple rules have the same highest weight, prioritize 'include' over 'exclude'
    for rule in highest_rules:
        if rule[0].startswith('include'):
            return True
    return False

def should_exclude_dir(dir_path: str) -> bool:
    """Determine if a directory should be excluded based on EXCLUDE_DIRS and INCLUDE_DIRS."""
    # Normalize paths to ensure consistent comparison
    normalized_dir = dir_path.rstrip('/\\')

    # Check if the directory matches any exclude rule
    for exc_dir in EXCLUDE_DIRS:
        normalized_exc_dir = exc_dir.rstrip('/\\')
        if normalized_dir == normalized_exc_dir or normalized_dir.startswith(f'{normalized_exc_dir}/'):
            # Now check if any include rule overrides this exclusion
            for inc_dir in INCLUDE_DIRS:
                normalized_inc_dir = inc_dir.rstrip('/\\')
                if normalized_dir.startswith(normalized_inc_dir) or normalized_inc_dir.startswith(normalized_dir):
                    # If the excluded directory is a parent of an included directory, do not exclude
                    return False
            # No include rule overrides the exclusion
            return True
    return False

def traverse_directory(dir_path: str, file_list: list) -> list:
    """Recursively traverse directories and collect file paths, respecting include/exclude rules."""
    try:
        entries = Path(dir_path).iterdir()
    except PermissionError as e:
        logger.error(f'Permission denied: {dir_path} ({e})')
        return file_list

    for entry in entries:
        full_path = entry.resolve()
        try:
            relative_path = str(full_path.relative_to(Path('.').resolve()))
        except ValueError:
            # If the path is not relative to current directory, skip it
            continue

        if entry.is_dir():
            # Check if the directory should be excluded
            if should_exclude_dir(relative_path):
                logger.error(f'Excluding directory: {relative_path}')
                continue
            traverse_directory(relative_path, file_list)
        elif entry.is_file():
            file_list.append(relative_path)
    return file_list

def generate_markdown():
    """Generate markdown file with included file contents and objectives."""
    logger.error('Starting markdown generation...')
    output_lines = []

    prompt_content = load_prompt()
    if not prompt_content:
        logger.error('Failed to load prompt, using fallback')
        prompt_content = (
            'You will be provided with files and their contexts inside ``` code blocks ```. '
            'Your task is to provide assistance based on these file contexts and given defined Goals.'
        )
    else:
        logger.error('Prompt loaded successfully')

    output_lines.extend([prompt_content, '\n\n', '# File Contents', '\n'])

    logger.error('Building file list...')
    all_files = []
    traverse_directory('.', all_files)

    logger.error('Processing files...')
    for file in all_files:
        if is_file_included(file):
            logger.error(f'Processing file: {file}')
            language = get_language(file)
            output_lines.append(f'```{language}:{file}')
            try:
                file_content = Path(file).read_text(encoding='utf-8')
                output_lines.extend([file_content, '\n```'])
            except Exception as e:
                logger.error(f'Error reading file {file}: {e}')
        else:
            logger.error(f'Skipping file: {file}')

    objectives_content = load_objectives()
    if objectives_content:
        logger.error('Objectives loaded successfully')
        output_lines.append(objectives_content)
    else:
        logger.error('Failed to load objectives')

    try:
        Path(OUTPUT_FILE).write_text('\n'.join(output_lines), encoding='utf-8')
        logger.error(f'Markdown generation completed. Output: {OUTPUT_FILE}')
    except Exception as e:
        logger.error(f'Error writing to {OUTPUT_FILE}: {e}')

if __name__ == '__main__':
    generate_markdown()
