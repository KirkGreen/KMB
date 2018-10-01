// вывести таблицу умножения от 1 до 9

var numbers = [1,2,3,4,5,6,7,8,9];



for (var i = 0; i < numbers.length; i++){

    var col = document.createElement('div');
    document.body.appendChild(col);


    for (var m = 1; m < 10; m++){
        var result = m * numbers[i];

        if(m === 1){
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 2) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 3) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 4) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 5) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 5) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 6) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 7) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 8) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);

        } else if (m === 9) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col.appendChild(res);
        }


    }

}