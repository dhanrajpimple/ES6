//value store in key value pairs 
//thire is key is unique and we can access using key value 

const myMap = new Map();

myMap.set('name', 'john');
myMap.set(1, 'doe');
myMap.set(true, 'boolean');

console.log(myMap);
console.log(myMap.get('name'))
console.log(myMap.get(true))

console.log(myMap.has('age'))
console.log(myMap.has('name'))


for(const [value, ley] of myMap){
  console.log(ley);
}

myMap.delete(1)

for(const [value, ley] of myMap){
  console.log(value, ley);
}
myMap.clear()
console.log(myMap);