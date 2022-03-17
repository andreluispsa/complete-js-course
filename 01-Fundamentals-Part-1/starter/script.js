/* let js = 'amazing';
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

// Variable and Constant Declarations

// 'let' is used when you assign a value to a variable and it can be changed later (mutate a variable)
let numberOfChildren = 2;
numberOfChildren = 3;

// 'const' is used when you assign a value it can't be changed later
const birthYear = 1977;
birthYear = 2000; // that causes an error

// 'var' is and old way to declare variables and must be avoid

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3);

const firstName = 'Jonas';
const lastName = 'Shchemedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4; // x = x * 10;
x++; // x = x + 1;
x--; // x = x - 1;
x--;
console.log(x);

// comparison operators -- produce boolean values
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; */

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);