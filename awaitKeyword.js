function resolveSetTimeOut(value) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  }
  
  async function passingValue() {
    const x = await resolveSetTimeOut(20);
    console.log(x);
  }
  
  passingValue();