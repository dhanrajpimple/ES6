// promises in javascript are a way to handle async opearation. they represent a value that may be available now or in the future or never promises provide a cleaner and more structured way to work async code compared to callbacks


const myPromises = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const data=null;

    resolve(data)
  },2000)
})

myPromises
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.error(error);
})
.finally(()=>{
  console.log("This is finally block");
})