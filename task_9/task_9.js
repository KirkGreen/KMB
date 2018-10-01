// вывести таблицу умножения от 1 до 9

var numbers = [1,2,3,4,5,6,7,8,9];

var col1 = document.createElement('div');
col1.className = "col_1";
document.body.appendChild(col1);

var col2 = document.createElement('div');
col2.className = "col_2";
document.body.appendChild(col2);

var col3 = document.createElement('div');
col3.className = "col_3";
document.body.appendChild(col3);

var col4 = document.createElement('div');
col4.className = "col_4";
document.body.appendChild(col4);

var col5 = document.createElement('div');
col5.className = "col_5";
document.body.appendChild(col5);

var col6 = document.createElement('div');
col6.className = "col_6";
document.body.appendChild(col6);

var col7 = document.createElement('div');
col7.className = "col_7";
document.body.appendChild(col7);

var col8 = document.createElement('div');
col8.className = "col_8";
document.body.appendChild(col8);

var col9 = document.createElement('div');
col9.className = "col_9";
document.body.appendChild(col9);


for (var i = 0; i < numbers.length; i++){

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
            col1.appendChild(res);

        } else if (m === 2) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col2.appendChild(res);

        } else if (m === 3) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col3.appendChild(res);

        } else if (m === 4) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col4.appendChild(res);

        } else if (m === 5) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col5.appendChild(res);

        } else if (m === 5) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col5.appendChild(res);

        } else if (m === 6) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col6.appendChild(res);

        } else if (m === 7) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col7.appendChild(res);

        } else if (m === 8) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col8.appendChild(res);

        } else if (m === 9) {
            var res = document.createElement('p');
            res.innerHTML += m;
            res.innerHTML += ' * ';
            res.innerHTML += numbers[i];
            res.innerHTML += ' = ';
            res.innerHTML += result;
            res.innerHTML += ';';
            col9.appendChild(res);
        }


    }

}