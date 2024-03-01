const fs = require('fs/promises');

async function countWordsInFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        const words = content.trim().split(/\s+/);
        return words.length;
    } catch (error) {
        console.error(`Error reading ${filePath}: ${error.message}`);
        return 0; // return 0 for unreadable or nonexisting files
    }
}

async function processFiles() {
    try {
        const config = require('./config.json');
        const files = config.files;

        for (let filePath of files) {
            const wordCount = await countWordsInFile(filePath);
            console.log(`${filePath}: ${wordCount} words`);
        }
    } catch (error) {
        console.error(`Error processing files: ${error.message}`);
    }
}

processFiles();
