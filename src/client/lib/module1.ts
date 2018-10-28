import {Module2} from './module2';
import {Module3} from './module3';

export class Module1 {
    print() {
        console.log("Module1.print()");
        let mod2 = new Module2();
        mod2.print();
        let mod3 = new Module3();
        mod3.print();
    }
}