import {rename as fsRename} from 'fs/promises'
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const rename = async () => {
    const oldPath = join(dirName, 'files', 'wrongFilename.txt'); 
    const renamedFilePath = join(dirName, 'files', "properFilename.md")
    try{
        await fsRename(oldPath,renamedFilePath)
    }
    catch(err) {
        throw new Error('FS operation failed')
    }
};

await rename();