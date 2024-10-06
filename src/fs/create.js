import { appendFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const create = async () => {
    const filePath = join(dirName, 'files', 'fresh.txt'); 
    
try {
    if (existsSync(filePath)){
        console.log('The path exists.');//
        throw new Error('FS operation failed');
    }
    await appendFile(filePath, 'I am fresh and young')
}
catch(err) {
    throw err;
}
};

await create();