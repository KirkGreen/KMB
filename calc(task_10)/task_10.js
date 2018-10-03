var num1 = '';
var action = '';
var result = document.getElementById('display');

function putNumber(a){
    num1 += a;
    result.value = num1;
    console.log(num1);

    if(a === 'c'){
        num1 = '';
        result.value = 0;
    }
}

