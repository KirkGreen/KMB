var num1 = '';
var num2 = '';

var action = '';
var result;
var display = document.getElementById('display');

function putNumber(a){

    if(a === 'c'){
        num1 = '';
        display.value = 0;
    } else {
        num1 += a;
        display.value = +num1;
        console.log(num1);
    }

}

function putAction(n) {
    action = n;
    console.log(action);

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
}

function equal(e) {
    display.value = result;
}


