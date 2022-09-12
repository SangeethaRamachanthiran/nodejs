const prompt = require('prompt-sync')({sigint: true});
let callfunction = require('./func');

const a = prompt('Enter a first number: ');
const b = prompt('Enter a second number: ');
const symbol = prompt('Enter + or - or * or / : ');
switch (symbol){
    case '+':
        console.log(callfunction.addition(Number(a),Number(b)));
        break;
    case '-':
        console.log(callfunction.subraction(Number(a),Number(b)));
        break;
    case '*':
        console.log(callfunction.multiplication(Number(a),Number(b)));
        break;
    case '/':
        console.log(callfunction.division(Number(a),Number(b)));

}
