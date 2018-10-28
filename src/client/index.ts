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

export class ClientTest {
    static start() {
        console.log("Testing from index.ts, now in a static function");
    }
}