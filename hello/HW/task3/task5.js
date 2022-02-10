const readline = require('readline');
const {
    stdin: input,
    stdout: output
} = require('process');
const rl = readline.createInterface({
    input,
    output
});

rl.question('Select color(red, blue, green, yellow, orange, black, white, pink): ', (answer) => {
    switch (answer) {
        case 'red':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case 'blue':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case "green":
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case 'yellow':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case 'orange':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case 'black':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case 'white':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        case 'pink':
            console.log(`You collor ${answer} has lenght ${answer.length}`);
            break;
        default:
            console.log('Error');
            break;
    }
    rl.close();
});