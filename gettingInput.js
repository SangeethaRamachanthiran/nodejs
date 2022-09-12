// getting input from user using readline module, process and create interface.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });
// getting input from user using prompt-sync module and prompt method
const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);