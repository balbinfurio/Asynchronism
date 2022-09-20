/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
const sum = (num1, num2) => {
  return num1 + num2;
};

const calc = (num1, num2, callback) => {
  return callback(num1, num2);
};

console.log(calc(2, 2, sum));

//  another ex

setTimeout(() => { console.log('Hello JS Dev'); }, 3000);

//  "setTimeout" it's itself a callback

const gretting = (name) => {
  console.log(`Hi ${name}`);
};

setTimeout(gretting, 5000, 'Furio'); // first the function, then the time and at last the arg
