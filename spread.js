// spreading element of an iterable or object properties into a new array allow to easily copy and concatente arrays


const arr = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const combine = [...arr, ...arr2];
console.log(combine);

//it will also copy the object

const obj = {a:1, b:3};
const obj1 = {c:5, d:7};
const combinee = {...obj, ...obj1}
console.log(combinee)
