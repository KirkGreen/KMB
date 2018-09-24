var array = [5, 10, 1, 7, 3, 8, 6, 2];

function sortArr(arr) {

    for (var i = 0; i < arr.length; i++){

        if (arr[i] > arr[i + 1]){
            var arr2 = [];
            arr2.push(arr[i], arr[i + 1]);
            arr2.reverse();
            arr.splice(i, 0, arr2);
            console.log(arr)
        }

    }

}

sortArr(array);