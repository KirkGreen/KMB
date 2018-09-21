// На запит системи користувач уводить параметр А.
// Якщо А=1, то вивести суму чисел від 1 до 20. Якщо А=2, то вивести добуток чисел від 1 до 8.
// В інших випадках вивести значення введеного параметра як текст HTML.
var a = prompt("enter A", '1');
var sum = 1;

switch (a) {
    case '1':
        for (var i = 0; i < 21; i++){
             sum = sum + i;
            alert(sum);
        }
        alert(sum);
        break;

    case '2':
        for (var i = 1; i < 9; i++){
             sum = sum * i;
             alert(sum);
        }
        alert(sum);
        break;

    default:
        alert(a);
}
