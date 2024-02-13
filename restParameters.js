//rest parameters in javascript allow you to represent an indetifinite number of arguments as an array within a function parameter

function sum(...numbers){
  return  numbers.reduce((a,b)=> a+b)
}

const result = sum(1,12,15,478,7,86,5,12,45)
const result2 = sum(1,12,15,478,7,86,5,12)

console.log(result);
console.log(result2);



function str(p, p2, ...para){
  console.log(p);
  console.log(p2);
  console.log(para);
}

str('a','b','c','d','e','f')