import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';


const calculateHash = async () => {
  const hash = createHash('sha256');
  const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
  const fileData = createReadStream(filePath);
    fileData.on('readable', () => {
  const data = fileData.read();
  if (data)
  hash.write(data);
  hash.end();
});

hash.on('readable', () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString('hex'));
    }
  });
};

await calculateHash();


