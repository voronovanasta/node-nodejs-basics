import { env } from 'node:process';

const parseEnv = () => {
    Object.keys(env).forEach(key => {
        if(key.includes('RSS_')){
            console.log(`${key}=${env[key]}`)
        }
    })
};

parseEnv();