// Напишите код для вывода alert случайного значения из массива:
//     var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// P.S. Код для генерации случайного целого от min to max включительно:
//     var rand = min + Math.floor(Math.random() * (max + 1 - min));

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min = 0;
var rand = min + Math.floor(Math.random() * arr.length);

alert(arr[rand]);

