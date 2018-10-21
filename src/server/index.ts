import * as http from 'http';
import  {serverPort} from './config';

console.log(`Running server from directory ${__dirname}.  I'm thinking of using port ${serverPort}.`);

// let server = http.createServer(() => {}).listen();