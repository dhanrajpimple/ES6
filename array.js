const fruits = ['apple', 'banana', 'orange'];
const number = [1,2,3,4,5,6,7,8,9,10];
const mixedArray = [1, 'two', true];

//accessing elemnet 
console.log(fruits[0]); 
fruits.push('grape'); 
console.log(fruits);
const a = fruits.pop()
console.log(a);

//instert and delete from first position
fruits.unshift('kiwi')
fruits.shift()
console.log(fruits);

const more = ['kiwi','mango'];
//concat the array
const all = fruits.concat(more);
console.log(all);

// slicing an array 
const slice = fruits.slice(0,3)
console.log(slice); 

const allt = [...more, ...fruits];
console.log(allt);

//finding index of an element

const bana = fruits.indexOf('banana')
console.log(bana);

//removing elements by index

const  removeFruit = fruits.splice(1,1) //remove one item starting at
console.log(removeFruit);

const filter = fruits.filter(fruit=>fruit !== 'orange');
console.log(filter);





