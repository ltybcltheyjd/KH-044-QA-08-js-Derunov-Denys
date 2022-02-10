const readline = require('readline');
const {stdin: input,stdout: output} = require('process');
const rl = readline.createInterface({input,output});

rl.question('Input text: ', (answer) => {
    let strArr = answer.split('');
    console.log(strArr);
    let strUpp = false;
    let strLow = false;
    let strNum = false;
    let strSymb = false;
    for(let i of strArr){
        console.log(i + " " + i.charCodeAt());
        if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90){
            strUpp = true; 
        }
        else if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122){
            strLow = true;
        } 
        else if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57){
            strNum = true;
        }
        else {
            strSymb = true;
        }
    }
    if (strUpp || strLow || strNum || strSymb){
        let result = 'The string has:';
        if (strUpp){
            result += ' - upper symbol';
        }
        if (strLow){
            result += ' - lower symbol';
        }
        if (strNum){
            result += ' - number';
        }
        if (strSymb){
            result += ' - symbol';
        }
        console.log(result);
    }else{
        console.log('Error');
    }
    rl.close();
});