let prompt = require("prompt-sync")();
let Promise = require("promise");
const add = (a, b) => {     
    return new Promise((resolve, reject) => {  // success, failure       
        setTimeout(() => {            
            if (a == 0 && b == 0) {                 
                return reject('Numbers cannot be zero')
            } 
            resolve(a + b)         
        }, 2000) 
    })
}
let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));   
add(a, b).then((sum) => {     
    console.log(sum) 
    return add(sum, 4)
}).then((sum2) => {     
    console.log(sum2) 
}).catch((err) => { 
    console.log(err) 
});

