/**
 * Create new instance of promise using keyword new.
 * Take two params: resolve, reject
 * .then() specifies what to do after a promise is resolved/rejected
 * Only on of the resolve or reject would be called, and not both together.
 * Resolve and rejectcan be called only once.
 * Advantages:
 * Don't have to consider that a callback could be called twicce
 */
var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

// asyncAdd(5,7).then((res) => {
//     console.log('Result:' + res);
//     return asyncAdd(res,33);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('should be 45', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });
/**
 * the above code fails when me provide a non number in the 
 * first promise call. To overcome that, we use catch() error handler at the end
 * and not use two resolves.
 */
asyncAdd(5,7).then((res) => {
    console.log('Result:' + res);
    return asyncAdd(res,33);
}).then((res) => {
    console.log('should be 45', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Hey. It worked!');
//         reject('Unable to fullfill promise');
//     }, 2500);
    
// });

// somePromise.then((message) => {
//     console.log('Success:', message);
// }, (errorMessage) => {
//     console.log('Error:', errorMessage);
// });