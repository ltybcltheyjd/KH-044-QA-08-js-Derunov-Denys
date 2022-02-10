const readline = require('readline');
const {stdin: input,stdout: output} = require('process');
const rl = readline.createInterface({input,output});

rl.question('Input year: ', (answer) => {
    if(!(answer % 4 || (!(answer % 100) && answer % 400))){
        console.log(`${answer} is a leap year`);
    }else{
        console.log(`${answer} is not a leap year`);
    }
    rl.close();
});


// if(!(answer & 3 || !(answer % 25) && answer & 15)){
//     console.log(`${answer} is a leap year`);
// }