const myObj = {
  name:'john',
  age:30,
  city:'new work'

}
const entry = Object.entries(myObj);
console.log(entry);

for(let [key , value] of Object.entries(myObj)){
  console.log(key + " : "+ value);
}

const map = new Map(Object.entries(myObj));
console.log(map);