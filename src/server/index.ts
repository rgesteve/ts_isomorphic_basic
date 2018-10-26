/*
import * as http from 'http';
import * as fs from 'fs';
*/
import express from 'express';
import * as path from 'path';
import  {serverPort} from './config';

console.log(`Running server from directory ${__dirname}.  I'm thinking of using port ${serverPort}.`);

var app  = express();

app.use(express.static(path.resolve(__dirname, '..', '..', 'static')));
// not clear how to pass the 'not found' handler in typescript

app.listen(serverPort, () => {
    console.log(`Started server at port ${serverPort}`);
});

console.log(`Done!`);