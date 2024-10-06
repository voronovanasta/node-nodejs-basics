import {rm} from 'fs/promises'
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const remove = async () => {
    const fileToDeletePath = join(dirName, 'files','fileToRemove.txt');
    try{
        await rm(fileToDeletePath)
    }
    catch(err) {
        throw new Error("FS operation failed")
    }
};

await remove();