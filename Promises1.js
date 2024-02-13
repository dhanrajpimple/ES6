const myPromise = new Promise((resolve, reject) => {
 
  setTimeout(() => {
    const data = 'Promise resolved data';
    
    resolve(data);
    
  }, 2000);
});

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Chained promise data';
      resolve(data);
    }, 2000);
  });
};

myPromise
  .then((result) => {
    console.log(result);
    return fetchData();
  })
  .then((chainedResult) => {
    console.log(chainedResult);
    return fetchData()
  })
  .then((chainedResult) => {
    console.log(chainedResult);
    return fetchData()
  })
  .then((chainedResult) => {
    console.log(chainedResult);
    return fetchData()
  })
  .then((chainedResult) => {
    console.log(chainedResult);
    return fetchData()
  })
  .then((chainedResult) => {
    console.log(chainedResult);
    return fetchData()
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(()=>{
    console.log('abhi jinda hai hum');
  })
