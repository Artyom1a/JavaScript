// 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]



// const arr = ['by', 'belarus', 'de', 'ru', 'germany'];

// const doarr = function (arr) {
//     return arr.filter(function (item) {
//         if (item.length <= 2) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })
// }

// alert(doarr(arr));




// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

// const arr = [1, 2, 3, 34, 5];
// const arr1 = ['by', 'belarus', 'de', 'ru', 'germany'];
// let bol = true;

// const doarr = (a) => {
//     a.forEach(element => {
//         if (isNaN(element)) {
//             bol = false;
//         }
//     });
//     return bol;
// }

// alert(doarr(arr1));



// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// массива. Вторая для нахождения количества элементов массива


let n = +prompt();

let arr = [];

const doarr = (n, arr) => {
    for (let i = 0; i < n; i++) {
        arr.push(prompt());
    }
    return arr;
}
alert(doarr(n, arr));

const doarrlength = (arr) => {
    return arr.length;
}
alert(doarrlength(arr));