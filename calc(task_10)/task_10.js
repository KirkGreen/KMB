var num = '';
var action = '';
var display = document.getElementById('display');

function putNumber(a){

    if(a === 'c'){
        num = '';
        display.value = 0;
    } else {
        num += a;
        display.value = num;
        console.log(num);
    }
}

function putAction(n) {
    action = n;
    display.value = num + action;
    console.log(action);
}


