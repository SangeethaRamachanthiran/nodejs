function resolveSetTimeOut(value) {
    return new Promise((resolve,reject) => {
        if (value == null){
            return reject("The value is null");
        }
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