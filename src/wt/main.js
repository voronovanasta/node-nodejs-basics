import { Worker } from "worker_threads"
import os from 'os';

const filePath = new URL('./worker.js', import.meta.url);

const performCalculations = async () => {
    let n = 10;
    let cpuCores = os.cpus().length;
    const result = []
    const workers = [];
    while(cpuCores > 0) {
        const worker = new Worker(filePath, {
            workerData: n++
        })
        let data = null;

        worker.on('message', msg => {
            data = msg;
            result.push({data, status: 'resolved'})
        })

        worker.on('error', error => {
            result.push({data, status: 'error'})
        });
        workers.push(worker)

        cpuCores--;
    }
   await Promise.all(workers.map(worker => {
        return new Promise(resolve => {
            worker.on('exit', () => {
                resolve();
            });
        });
    }))
return result
};

await performCalculations().then(console.log);