var array = [5, 10, 1, 7, 3, 8, 6, 2];

function sortArr(arr) {

    for (var i = 0; i < arr.length; i++){

        if (arr[i] > arr[i + 1]){

            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

            console.log(arr)
        }

    }

}

sortArr(array );