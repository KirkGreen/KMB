// получаем длину
// получаем середину
// сравниваем с числом

var n = 0;

var arr = [1, 3, 7, 9, 12, 15, 20, 21, 24, 25, 29,
    30, 32, 35, 37, 40, 42, 43, 46, 48, 50];

function findNumber(n, arr) {

    var middle = arr.length / 2;

    if (n < middle){
        var arr1 = arr.slice(0, arr.length / 2);
        console.log(arr1);
        findNumber(n, arr1);
    } else if (n > middle){
        var arr2 = arr.slice(- (arr.length +1) / 2);
        console.log(arr2);
        findNumber(n, arr2);
    }

}

findNumber(30, arr);
