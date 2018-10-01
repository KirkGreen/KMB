// вывести таблицу умножения от 1 до 9

var numbers = [1,2,3,4,5,6,7,8,9];



for (var i = 0; i < numbers.length; i++){

    var col = document.createElement('div');
    document.body.appendChild(col);


    for (var m = 1; m < 10; m++){
        var result = m * numbers[i];

        var res = document.createElement('p');
        res.innerHTML += m;
        res.innerHTML += ' * ';
        res.innerHTML += numbers[i];
        res.innerHTML += ' = ';
        res.innerHTML += result;
        res.innerHTML += ';';

        switch (m){
            case 1:
                col.appendChild(res);
                break;
            case 2:
                col.appendChild(res);
                break;
            case 3:
                col.appendChild(res);
                break;
            case 4:
                col.appendChild(res);
                break;
            case 5:
                col.appendChild(res);
                break;
            case 6:
                col.appendChild(res);
                break;
            case 7:
                col.appendChild(res);
                break;
            case 8:
                col.appendChild(res);
                break;
            case 9:
                col.appendChild(res);
                break;
        }

    }

}