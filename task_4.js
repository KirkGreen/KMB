// Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max,
// включая min,max как возможные значения.
// Любое число из интервала min..max должно иметь одинаковую вероятность.

function randomInteger(min, max) {
    var sum = min - 0.5 + Math.random() * (max - min + 1);

    sum = Math.round(sum);
    alert(sum)
}

randomInteger(1, 3);