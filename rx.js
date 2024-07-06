const fs = require('fs').promises;
const path = require('path');

// Get language code from content
const getLangCode = content => {
    const match = content.match(/lang:\s*(\w+)/);
    return match ? match[1] : null;
};

// Fix front matter formatting
const fixFormatting = content => content.replace(/(placeholder|title):\s*"(.*?)"/g, (match, key, value) => {
    const newValue = value.replace(/"/g, '\'').replace(/\n/g, '\\n');
    return `${key}: "${newValue}"`;
});

// Update Markdown file with language code
const updateMdFile = async (filePath, langCode) => {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        const fixedContent = fixFormatting(content);
        const newContent = fixedContent.replace(/(slug|path):\s*\/\w+\/(.+)/g, `$1: /${langCode}/$2`);
        await fs.writeFile(filePath, newContent);
        console.log(`Updated: ${filePath}`);
    } catch (error) {
        console.error(`Failed to update ${filePath}: ${error.message}`);
    }
};

// Recursively find and update Markdown files
const findAndUpdateMdFiles = async dirPath => {
    try {
        const files = await fs.readdir(dirPath);

        await Promise.all(files.map(async file => {
            const currentPath = path.join(dirPath, file);
            const stats = await fs.stat(currentPath);

            if (stats.isDirectory()) {
                await findAndUpdateMdFiles(currentPath);
            } else if (path.extname(currentPath) === '.md') {
                const content = await fs.readFile(currentPath, 'utf-8');
                const langCode = getLangCode(content);
                
                if (langCode) {
                    await updateMdFile(currentPath, langCode);
                }
            }
        }));
    } catch (error) {
        console.error(`Failed to process directory ${dirPath}: ${error.message}`);
    }
};

// Example usage: findAndUpdateMdFiles('src/pages/tools');
findAndUpdateMdFiles('src/pages/tools');
