const str1 = 'hello';
const str2 = 'worldff';
//concatenation
const combine = str1+" "+str2;
console.log(combine);
//finding the length
console.log(str1.length);
//accessing characters using index
console.log(str1[0]);
console.log(str1.charAt(1));
//substring
console.log(combine.substring(0,5));
//slice another way to substirng
console.log(combine.slice(6,11));
//uppercase
console.log(str2.toUpperCase());
//lowercase
console.log(str1.toLowerCase());

//string splitting

const dh = 'dhanraj,arun,pimple';
console.log(dh.split(',')); 
//replace the string
console.log(dh.replace('dhanraj', 'Dhanraj'));

//searching substring with string
console.log(dh.indexOf('pimple'));

//trimming remove the whitespace in string

console.log("    dhanraj     ".trim())