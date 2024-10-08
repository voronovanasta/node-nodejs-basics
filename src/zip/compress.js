import { pipeline } from 'node:stream';
import { createGzip  } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const source = new URL('./files/fileToCompress.txt', import.meta.url);
    const input = createReadStream(source);
    const dest = new URL('./files/archive.gz', import.meta.url);
    const output = createWriteStream(dest);

    const compress = createGzip();
    pipeline(
        input,
        compress,
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

await compress();