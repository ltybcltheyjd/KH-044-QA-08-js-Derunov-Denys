const readline = require('readline');
const {stdin: input,stdout: output} = require('process');
const rl = readline.createInterface({input,output});

rl.question('Input number of month: ', (answer) => {
    switch (+answer) {
        case 1:
        case 2:
        case 12:
            console.log('Winter');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Spring');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Summer');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Autumn');
            break;
        default:
            console.log('Error');
            break;
    }
    rl.close();
});