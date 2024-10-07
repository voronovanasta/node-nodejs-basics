import { fork } from 'node:child_process';
import { stdout, stdin } from 'node:process';

const filePath = new URL('./files/script.js', import.meta.url);
const spawnChildProcess = async (args) => {
   const child = await fork(filePath, args);
}

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
