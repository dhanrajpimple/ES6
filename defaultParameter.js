//default parameters in javascript allow you to specify default values for funtion parameters in case the caller does not provide a value for them


function fullname(name="dhanraj", sumname='pimple'){
  console.log(sumname + " "+ name);
}

fullname()
fullname("akshay")
fullname("it's" ,'me')


function math(a=10, b=20){
  return a*b;
}
let a = math()
console.log(math(14));
console.log(math());
console.log(a);
console.log(math(123,5));