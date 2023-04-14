
import fs from 'fs';
import path from 'path';

function getLanguageCode(content: string): string | null {
    const langRegex = /lang:\s*(\w+)/;
    const match = content.match(langRegex);

    return match ? match[1] : null;
}

function updateMdFile(filePath: string, langCode: string): void {
    const content = fs.readFileSync(filePath, 'utf-8');
    const newContent = content.replace(/(slug|path):\s*\/\w+\/(.+)/g, `$1: /${langCode}/$2`);
    fs.writeFileSync(filePath, newContent);
}

function findAndUpdateMdFiles(dirPath: string): void {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const currentPath = path.join(dirPath, file);

        if (fs.statSync(currentPath).isDirectory()) {
            findAndUpdateMdFiles(currentPath);
        } else if (path.extname(currentPath) === '.md') {
            const content = fs.readFileSync(currentPath, 'utf-8');
            const langCode = getLanguageCode(content);

            if (langCode) {
                updateMdFile(currentPath, langCode);
            }
        }
    }
}

// Usage: findAndUpdateMdFiles('/your/path/here');


/*


First, the `getLanguageCode` function extracts the language code from the file content using a regular expression. The `updateMdFile` function then updates the file's `slug` and `path` values with the language code. Finally, the `findAndUpdateMdFiles` function recursively searches through the provided directory and its subdirectories, updating all `.md` files it encounters.

To use the function, call `findAndUpdateMdFiles('/your/path/here');`, replacing `/your/path/here` with the desired path.
*/