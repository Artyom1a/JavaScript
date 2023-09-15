// 36. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false


// let str = 'http//wiki.by';
// console.log(str.indexOf('http'));

// let arr = ['com', 'ru', 'by'];

// if (str.indexOf('http') == 0 && str.includes('/') && arr.includes(str.split('.')[1])) {
//     alert(true);
// }
// else {
//     alert(false);
// }


//str.lastIndexOf('.com') == str.length - 3 || str.lastIndexOf('.ru') == str.length - 2 )
//(str.split('.')[1] == 'com' || str.split('.')[1] == 'ru')


// 38.На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

// let str = 'Artyom Shevchik';
// let arr = str.split(' '); // ['Artyom', 'Shevchik']
// let bol = arr.length == 2;



// for (let i = 0; i < arr.length && bol; i++) {
//     let n = arr[i];
//     if (n.slice(0, 1) != n.slice(0, 1).toUpperCase() || n.slice(1) != n.slice(1).toLowerCase()) {
//         bol = false;
//     }
// }
// alert(bol);



// arr[0][0] == arr[0][0].toUpperCase() && arr[1][0] == arr[1][0].toUpperCase()


// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n.
// Необходимо разбить данный одномерный массив на маленькие массивы в
// зависимости от того, какого число ввел пользователь. Добавить проверки на ввод
// числа (значение n не должно быть больше длины массива, 0, пустая строка,
// строковый тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]

let array = [1, 2, 3, 4, 5, 6];
let n = +prompt();
let resultArr = [];
while (array.length > 0) {
    let arr = [];
    for (i = 0; i < n && array.length; i++) {
        arr.push(array.shift());
    }
    resultArr.push(arr);
}
console.log(resultArr);

