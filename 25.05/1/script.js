// 1. Найти максимальное число из 2 введенных (2 способа)

const a = +prompt('Number 1');
const b = +prompt('Number 2');

alert(Math.max(a, b));

if (a > b) {
    alert(a);
}
else {
    alert(b);
}
// 2. Выявить является ли введенное число четным

let c = +prompt('Number 3');
if (c % 2 == 0) {
    alert(c + ' is even');
}
else{
    alert(c + ' is odd');
}
// 3. Пользователь вводит число от 1 до 7, соответствующее дню недели. 
//Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник

const d = +prompt('Number 4');
switch(d){
    case 1: 
    alert('Monday');
    break;
    case 2: 
    alert('Tuesday');
    break;
    case 3: 
    alert('Wednesday');
    break;
    case 4: 
    alert('Thursday');
    break;
    case 5: 
    alert('Friday');
    break;
    case 6: 
    alert('Saturday');
    break;
    case 7: 
    alert('Sunday');
    break;
}