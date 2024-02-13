// it represent a unique identifier that is guaranteed to be unique symbols are often used as property key for object properties to avoid naming conflicts


const mySymbol = Symbol();
console.log(typeof mySymbol);

const namedSymbol = Symbol("mySymbolDescription");

console.log(namedSymbol.toString());

const obj = {};
const myKey = Symbol("uniquekey");

obj[myKey]= 'Symbol value';
console.log(obj[myKey]);


const obj1 = Symbol.for("dp")
const obj2 = Symbol.for("dp")

console.log(obj1===obj2);