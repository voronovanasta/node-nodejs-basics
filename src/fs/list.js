import {readdir} from 'fs/promises'
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const list = async () => {
    const folderPath = join(dirName, 'files'); 
    try{
        const arrFiles = await readdir(folderPath);
        console.log(arrFiles);
    }
    catch(err) {
        throw new Error('FS operation failed')
    }
};

await list();