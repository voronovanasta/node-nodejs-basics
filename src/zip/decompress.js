import { pipeline } from 'node:stream';
import { createGunzip  } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const dest = new URL('./files/fileToCompress.txt', import.meta.url);
    const source = new URL('./files/archive.gz', import.meta.url);
    const input = createReadStream(source);
    const output = createWriteStream(dest);

    const decompressGzip = createGunzip();
    pipeline(
        input,
        decompressGzip,
        output,
        (err) => {
            if (err) {
              console.error('Pipeline failed.', err);
            } else {
              console.log('Pipeline succeeded.');
            }
          }
    )
};

await decompress();