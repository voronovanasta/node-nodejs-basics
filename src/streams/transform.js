import { stdout, stdin } from 'node:process';
import { Transform, pipeline } from 'node:stream';

const transform = async () => {

    const transformStream = new Transform({
        transform(data, en, cb) {
            const dataStr = data.toString().trim();
            const reversedData = dataStr.split('').reverse().join('');
            this.push(reversedData + '\n');
            cb();


        },
    })
    pipeline(
        stdin,
        transformStream,
        stdout,
        (err) => {
            if (err) {
              console.error('Pipeline failed.', err);
            } else {
              console.log('Pipeline succeeded.');
            }
          }
      );
};

await transform(); 