/* To run this on command line:
 * node test.js
 */

'use strict';

/* create a new object */
function objnew(mystr = "", myvalue = 0) {
    return {
        name  : mystr,
        value : myvalue,
        myname : function(a, b) {
            return "you entered : " + a + b;
        }
    };
}

let obj = objnew("chunko", 10);
let obj1 = obj

function hello(myobj) {
    console.log("hello");
    console.log(myobj.name);
    console.log(myobj.value);
}

for (let i = 0; i < 10; i++) {
    hello(obj);
    console.log(" -- ");
    hello(obj1);
    let x = obj.myname("what", " is that?");
    console.log(x);
}
