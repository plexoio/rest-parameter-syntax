/**
 * To run this file in Gitpod, use the 
 * command 'node rest' in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Normal:', sum);

// Extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6); // last 3 digits ignored, '...rest' will solve the problem
console.log('Ignored:', sum2);

// Function using ...rest

let withRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (i of rest){
        sum += i;
    }
    return sum
}

let sumUp = withRest(1,2,3,4,5,6);
console.log('With "...rest":', sumUp);