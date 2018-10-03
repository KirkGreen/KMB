var num1 = '';
var num2 = '';

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
}

function equal() {

    switch (action){
        case '+':
            result = +num1 + +num2;
            console.log(result);
            break;
        case '-':
            result = +num1 - +num2;
            console.log(result);
            break;
        case '*':
            result = +num1 * +num2;
            console.log(result);
            break;
        case '/':
            result = +num1 / +num2;
            console.log(result);
            break;
    }

    display.value = result;

    action = '';
    num1 = '0';
    num2 = '0';
    result = 0;
}


