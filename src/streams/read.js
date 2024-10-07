import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const filePath = new URL('./files/fileToRead.txt', import.meta.url);
    const input = createReadStream(filePath);
    input.pipe(stdout);
    input.on('end', () => {
        process.stdin.on('data', () => {
            process.exit();
        });
    })
};

await read();