// const readline = require('readline');
// const {stdin: input,stdout: output} = require('process');
// const rl = readline.createInterface({input,output});

// rl.question('Input 4 numbers: ', (answer) => {
//     rl.close();
// });
"use strict";
const readline = require('readline');
const {stdin: input,stdout: output} = require('process');
const rl = readline.createInterface({input,output});


rl.question('Input four numbers: ', (answer) => {
  let fourNum = answer.split(' ');
  console.log(fourNum);
  console.log(fourNum.length);
  if (fourNum.length > 4) {
    console.log('You input more than 4 numbers.');
  } 
  //else {
  //   for (let i of fourNum) {
  //     if (i % 3 == 0 || i % 5 == 0) {
  //       console.log(i);
  //     }
  //   }
  // }
  else{
    let numberF = fourNum.filter(function(number){
      return number % 3 == 0 || number % 5 == 0;
    });
    console.log(numberF);
  }
  rl.close();
});
