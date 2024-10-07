import { fork } from 'node:child_process';

const filePath = new URL('./files/script.js', import.meta.url);
const spawnChildProcess = async (args) => {
   await fork(filePath, args);
}

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
