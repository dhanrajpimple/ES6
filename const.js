// const  keyword is also give the same block scope 

const a = 10;
{
  const a =14;
  console.log(a);
}
// a =19;  this is not allowed to in const
console.log(a)