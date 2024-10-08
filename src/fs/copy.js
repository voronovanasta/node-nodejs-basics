import {cp} from 'fs/promises'
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const copy = async () => {
    const folderPath = join(dirName, 'files'); 
    const copiedFolderPath = join(dirName, 'files_copy')
    try{
        await cp(folderPath, copiedFolderPath, {errorOnExist: true, force: false, recursive: true })
    }
    catch(err) {
        throw new Error('FS operation failed');
    }
};

await copy();
