// binary search

var n = 0;

var array = [1, 3, 7, 9, 12, 15, 20, 21, 24, 25, 29,
    30, 32, 35, 37, 40, 42, 43, 46, 48, 50];

function findNumber(n, arr) {
    console.log(arr);

    var middle = Math.floor(arr.length / 2);

    if (arr.length === 1){
        if (n === arr[0]){
            return(console.log('Найдено'))
        } else {
            return(console.log("Не найдено"))
        }
    }

    console.log(arr[middle]);

    if (n < arr[middle]){
        var arr2 = arr.slice(0, arr.length / 2);
        console.log(arr2);
        findNumber(n, arr2);
    } else if (n > arr[middle]){
        var arr3 = arr.slice(- (arr.length +1) / 2);
        console.log(arr3);
        findNumber(n, arr3);
    } else {
        return(console.log('Найдено'))
    }

}

findNumber(29, array);
