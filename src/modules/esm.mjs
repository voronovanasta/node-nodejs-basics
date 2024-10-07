import {sep} from 'path';
import { release, version } from'os';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createServer as createServerHttp } from 'http';
import('./files/c.js');

const random = Math.random();

export let unknownObject;

(async()=>{
    if (random > 0.5) {
        unknownObject = await import('./files/a.json',{
            with: { type: "json" },
          })
    } else {
        unknownObject = await import('./files/b.json',{
            with: { type: "json" },
          })
    }
    console.log(unknownObject);
})()
    

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirName}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


