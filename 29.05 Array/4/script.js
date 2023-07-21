// 10.
// На входе n количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже
// 1 , 2 , 3 , 4 , 5 , 6 ] --> нечет ””, чет ””, нечет ””, чет ””, нечет ””, чет
// 1 , 24 , 5 ] --> нечет ””, чет ””, нечет
// Использовать map


// let n = +prompt('Number elemnts');
// const arr = [];
// while (arr.length < n) {
//     arr.push(+prompt());
// }
// const result = arr.map(function (elem) {
//     if(elem%2==0)
//     {
//         return elem = "чётный"
//     }
//     else
//     {
//         return elem = "нечётный"
//     }
// });
// alert(result);


// 11.
// На входе n количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach , reduce

let n = +prompt('Number elemnts');
const arr = [];
while (arr.length < n) {
    arr.push(+prompt());
}
const result = arr.reduce(function (previous, current) {
    return previous * current;
}
);
alert(result);