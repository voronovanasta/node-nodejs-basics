import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';


const calculateHash = async () => {
  const hash = createHash('sha256');
  const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
  const fileData = createReadStream(filePath);
  fileData.on('data', (data) => {
    if (data)
      hash.write(data);
      hash.end();
  });

  hash.on('data', (data) => {
    if (data) {
      console.log(data.toString('hex'));
    }
  });
};

await calculateHash();


