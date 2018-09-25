var array = [5, 10, 1, 7, 3, 8, 6, 2];

console.log(array);

function sortArr(arr) {

    var toSort = true;
    var counter = 0;


    while (toSort === true){

        for (var i = 0; i < arr.length; i++){

            counter += 1;

            if (arr[i] > arr[i + 1]){

                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                console.log(arr);
            }

            console.log(counter);

            if (counter === arr.length * arr.length){
                toSort = false;
            }

        }

    }

}

sortArr(array);

