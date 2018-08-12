/**
 * Difference between es5 functions and es6 arrow functions
 * @param {number whose square is to be returned} x 
 */
var square = (x) => {
    var result = x *x;
    return result;
};

/**
 * following is shorter version of above
 * Arrow functions donot bind 'this' keyword.
 */
var square2 = (x) => x * x;
console.log(square(9));
console.log(square2(3));

var user = {
    name: 'Himanshu',
    sayHi: () => {
        console.log(`Hi ${this.name}`); // prints undefined
    },
    sayHiAlt () {
        console.log(`Hi ${this.name}`);
    }
};
user.sayHiAlt();