// for/of iterable object for/of loop over data structures that are iterable such as Arrays Strings Maps 

// syntax 
// for(variable of iterable){
//   code
// }


//array
const cars = ['bmw', 'volvo', 'mini'];
let b ="";
for(let x of cars){
  b+=x+" "
  // console.log(x);
}
// console.log(b);

//String
const message = "Dhanraj pimple";
for(let z of message){
  // console.log(z)
}

//Maps 

const myMap = new Map([
  ['a',1],
  ['b',3],
  ['c',2],
  ['d',5]
])
for(let [key, value] of myMap){
  // console.log(key+" , "+value);
}

// Sets

const myset = new Set([1,2,3,45,1,2,45]);
for(const i of myset){
  // console.log(i);
}

const number = [1,2,3,4];

for(let [index, value] of number.entries()){
  // console.log(index, value);
}