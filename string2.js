const name = 'dhanraj';

const greeting =  `hello , ${name}`;
console.log(greeting);

//contains a substring

const mystring = 'javascript is amazing';
const a = mystring.includes("is");
console.log(a);

//converting string to array of characters;
const char = Array.from(mystring);
console.log(char);
//repeating a string

const repeat = 'abc'.repeat(5);
console.log(repeat);

//conveting String to Number

const num = '1234'
const cov = parseInt(num, 10);
console.log(cov);
//stratwith and endwith checker
console.log(num.startsWith('1'));
console.log(num.startsWith('4'));
console.log(num.endsWith('4'));

//endcoding and decoding

const originalString = 'Hello, world!';
const encodedString = encodeURIComponent(originalString);
const decodedString = decodeURIComponent(encodedString);
console.log(encodedString);
console.log(decodedString);


//