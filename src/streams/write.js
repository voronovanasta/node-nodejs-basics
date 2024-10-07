import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
    const output = createWriteStream(filePath);
    stdin.pipe(output);
    output.on('finish', () => {
        process.exit();
    });
};

await write();