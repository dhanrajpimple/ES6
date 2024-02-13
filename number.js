const inte = 42;
const floatpoint  = 2.43;

const intet = new Number(43);
const flaot = new Number(5.54)


console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);


console.log(Number.NaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(20));


console.log(Number.isInteger(42));
console.log(Number.isInteger(42.23));

const num = 123.163456;
console.log(num.toExponential(2));
console.log(num.toFixed(2));    
console.log(num.toPrecision(4));

const numstr = '45';

const convert = Number(numstr)
console.log(convert)
console.log(isFinite(20/0))
console.log(isFinite(20/2))