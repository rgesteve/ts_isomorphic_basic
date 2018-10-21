import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import  {serverPort} from './config';

console.log(`Running server from directory ${__dirname}.  I'm thinking of using port ${serverPort}.`);
let indexHtml = path.join(__dirname,'..', 'src', 'client', 'index.html');
if (fs.existsSync(indexHtml)) {
    console.log("Found the file, should be serving it...");
} else {
    console.log(`Didn't find file ${indexHtml}, deeper problems somewhere...`);
}

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(fs.readFileSync(indexHtml));
    /*
   res.writeHead(200, "text/plain");
   res.write("Testing the server...!");
   */
   res.end();
}).listen(serverPort);

console.log(`Done!`);