// вывести таблицу умножения от 1 до 9

var numbers = [1,2,3,4,5,6,7,8,9];

for (var i = 0; i < numbers.length; i++){

    for (var m = 1; m < 10; m++){
        var result = m * numbers[i];

        var res = document.createElement('p');
        res.innerHTML += m;
        res.innerHTML += ' * ';
        res.innerHTML += numbers[i];
        res.innerHTML += ' = ';
        res.innerHTML += result;
        res.innerHTML += ';';
        document.body.appendChild(res);

    }

}