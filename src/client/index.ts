/*
module ClientTest {

    window.onload = () => {
        console.log("Should be loading module from typescript");
    }
}
*/
/*
import $ = require('jquery');

$(() => {
    console.log("Testing this style of import");
});
*/

import { Module1 } from './lib/module1';

export class ClientTest {
    static start() {
        console.log("Testing from index.ts, now in a static function");
        let m1 = new Module1();
        m1.print();
        console.log("Now tested instance from user-provided library");
    }
}