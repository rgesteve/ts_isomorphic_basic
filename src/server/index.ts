import * as http from 'http';
import * as fs from 'fs';
import  {serverPort} from './config';

console.log(`Running server from directory ${__dirname}.  I'm thinking of using port ${serverPort}.`);

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plan'});
    res.write('Hello Node JS Server Response');
    res.end( );
}).listen(serverPort);

console.log(`Done!`);