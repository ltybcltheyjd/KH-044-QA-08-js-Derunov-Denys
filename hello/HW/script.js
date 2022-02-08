"use strict";

//Function
const mathFunc = {
    movies: {},
    divideFractional: function () {
        let firstN, firstD, secondN, secondD;
        let fFraction = prompt('Enter first fraction number\ne.g.(4/8 or integer)', '');
            if (fFraction == ''){
                this.divideFractional();
            }else if (fFraction == null){
                start();
            }else{
                const firstFraction = fFraction.split("/");
                if (+firstFraction[0] == 0 || +firstFraction[1] == 0){
                    alert('The numerator or denominator cannot be zero.');
                    this.divideFractional();
                }else{
                    if (firstFraction[1] === undefined){
                        firstN = +firstFraction[0];
                        firstD = 1;
                    }else{
                        firstN = +firstFraction[0];
                        firstD = +firstFraction[1];
                    }
                }
            }  
        let sFraction = prompt('Enter second fraction number\ne.g.(4/8 or integer)', '');
            if (sFraction == ''){
                this.divideFractional();
            }else if (sFraction == null){
                start();
            }else{
                const secondFraction = sFraction.split("/");
                if (+secondFraction[0] == 0 || +secondFraction[1] == 0){
                    alert('The numerator or denominator cannot be zero.');
                    this.divideFractional();
                }else{
                    if (secondFraction[1] === undefined){
                    secondN = +secondFraction[0];
                    secondD = 1;
                    }else{
                    secondN = +secondFraction[0];
                    secondD = +secondFraction[1];
                    }
                }
            }
        if( isNaN(firstN) || isNaN(firstD) || isNaN(secondN) || isNaN(secondD)){
            alert('Error! Non-valid data.');
            this.divideFractional();
        }else {
            const resultFractions = ((firstN * secondD) / (firstD * secondN));
            alert(`You data ${firstN}/${firstD} and ${secondN}/${secondD}\nRESULT\n` + 
            `${firstN * secondD}/${firstD * secondN} = ${resultFractions}`);
            start();
        }
    }, 
    volumeOfCylinder: function(){
        let areaAndHeight = prompt('Enter the area of the base and height through a comma.\ne.g. - 5, 4', '');
        if(areaAndHeight == ''){
            this.volumeOfCylinder();
        }else if(areaAndHeight == null){
            start();
        }else{
            let sAndhSplit = areaAndHeight.split(", ");
            let areaOfCilinder = +sAndhSplit[0];
            let heightOfCilinder = +sAndhSplit[1];
            if( isNaN(areaOfCilinder) || isNaN(heightOfCilinder)){
                alert('Error! Non-valid data.');
                this.volumeOfCylinder();
            }else {
                const resultVolumeOfCylinder = areaOfCilinder * heightOfCilinder;
                alert(`Area of the base = ${areaOfCilinder} and Height = ${heightOfCilinder}\nRESULT\n` + 
                `${areaOfCilinder}*${heightOfCilinder} = ${resultVolumeOfCylinder}`);
                start();
            }
        }
    }, 
    convert: function(){
        let hexString = prompt('Enter a hex number.\ne.g. (AF5)', '');
        if(hexString == ''){
            this.convert();
        }else if(hexString == null){
            start();
        }else{
            const resultDecimal = parseInt(hexString, 16);
            alert(`You Hex number: ${hexString}\nRESULT\n${resultDecimal}`);
            start();
        }
    },
    incrementDecrement: function(){
        for (let i = 0; i < 2; i++){
            const a = prompt('One of the last watched films?', ''),
                  b = +prompt('How do you rate this film?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                this.movies[a] = b;
                console.log('Done');
                start();
            }else{
                alert('Error! Non-valid data.');
                i--;
            }
        }
    },
    quadEquationSolver: function(){
        let numberABC = prompt('Enter the number a, b, c through a comma.\ne.g. (1, 5, 6)', '');
        if(numberABC == ''){
            this.convert();
        }else if(numberABC == null){
            start();
        }else{
            let abcSplit = numberABC.split(", ");
            let numberA = +abcSplit[0];
            let numberB = +abcSplit[1];
            let numberC = +abcSplit[2];
            if( isNaN(numberA) || isNaN(numberB) || isNaN(numberC)){
                alert('Error! Non-valid data.');
                this.volumeOfCylinder();
            }else {
                let rootPart = Math.sqrt( (numberB * numberB) - (4 * numberA * numberC) );
                let denom = 2 * numberA;
                let firstRoot = (-numberB + rootPart)/denom;
                let secondRoot = (-numberB - rootPart)/denom;
                alert(`You data a = ${numberA} b = ${numberB} c = ${numberC}\nRESULT\n` +
                `x1 = ${firstRoot}\nx2 = ${secondRoot}`);
                start();
            }
        }
    }
};

// start();

function start() {
    let func;
    while (func == '' || func == null || isNaN(func)) {
        func = +prompt('Select an operation:\n1.Divide 2 fractional numbers\n2.Volume of Cylinder\n' + 
        '3.Convert hex to decimal\n4.Increment/Decrement\n5.Quad Equation', "");
    }
    switch (func) {
        case 1:
            mathFunc.divideFractional();
            break;
        case 2:
            mathFunc.volumeOfCylinder();
            break;
        case 3:
            mathFunc.convert();
            break;
        case 4:
            mathFunc.incrementDecrement();
            break;
        case 5:
            mathFunc.quadEquationSolver();
            break;
        default:
            start();
            break;
    }
}