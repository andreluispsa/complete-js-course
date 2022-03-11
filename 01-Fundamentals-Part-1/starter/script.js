let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// -------------------------------------------------------------------------
// Data types 
// Javascript has dynamic typing
// value has type, NOT variable!

// Number
let age = 43;

// String
let firstName = 'Andre';

// Boolean
let fullAge = true;

// Undefined (empty value) - both value e type is undefined
let children;

// Null - means 'empty value'

// Symbol (ES2015) - value that is unique and cannot be changed

// BigInt (ES2020) - larger integer than the Number type can hold

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof'Jonas');
console.log(typeof javascriptIsFun);
javascriptIsFun = 'True!';
console.log(typeof javascriptIsFun);

let year
console.log(year);
console.log(typeof year);
year = 2001;
console.log(year);
console.log(typeof null); // it returns an 'object'; this is a known bug and it's keeped this way for legacy purpose