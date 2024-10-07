import { argv } from 'node:process';

const parseArgs = () => {
    argv.forEach((val, index, arr) => {
        if(index > 1 && index % 2 === 0) {
            console.log(`${val.slice(2)} is ${arr[index+1]}`);
        }
      });
};

parseArgs();