// collection of unique value it does not allowed duplicate  values 
//sets do not have a numerical index for element and element cannot be accessed by position
//we can access using for/of looop 
//no key-value pairs


const mySet = new Set();

mySet.add(1);
mySet.add('hello')
mySet.add(true)

mySet.add(1)//this is not allowed in javascript

console.log(mySet)

console.log(mySet.has('hello'))
console.log(mySet.has('he'))


console.log(mySet.size)

mySet.delete(1)

for(const value of mySet){
  console.log(value);
}

mySet.clear();
console.log(mySet)