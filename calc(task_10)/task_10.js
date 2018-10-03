var num1 = '0';
var num2 = '0';

var action = '';
var result;
var display = document.getElementById('display');

function putNumber(a){

    if(action === ''){
        if(a === 'c'){
            num1 = '';
            display.value = 0;
        } else {
            num1 += a;
            display.value = +num1;
            console.log(num1);
        }
    } else {
        if(a === 'c'){
            num2 = '';
            display.value = 0;
        } else {
            num2 += a;
            display.value = +num2;
            console.log(num2);
        }
    }
}



function putAction(n) {
    action = n;
    console.log(action);

    if (num2 !== '0'){
        switch (action){
            case '+':
                num1 = parseInt(num1) + parseInt(num2);
                break;
            case '-':
                num1 = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                num1 = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                num1 = parseFloat(num1) / parseFloat(num2);
                break;
        }
    }
}

function equal() {

    switch (action){
        case '+':
            result = parseInt(num1) + parseInt(num2);
            toString(result);
            console.log(result);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            toString(result);
            console.log(result);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            toString(result);
            console.log(result);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            toString(result);
            console.log(result);
            break;
    }

    if(result === Infinity){
        result = 'Error';
    }

    display.value = result;

    action = '';
    num1 = result;
    num2 = '0';
    result = '0';
}


