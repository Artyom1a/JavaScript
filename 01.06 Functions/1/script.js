// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

// function dohello(a, b) {
//     console.log(`Hello ${a} ${b}`);
// }

// dohello('R', 'H');

// dohello(prompt(), prompt());



// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний
// регистр, все четные слова, соответственно, в верхний
// happy new year -> happy NEW year


// function dostring(a) {
//     arr = a.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 != 0) {
//             arr[i] = arr[i].toUpperCase();
//         }
//         else {
//             arr[i] = arr[i].toLowerCase();
//         }
//     }
//     return arr.join(' ');
// }
// const result = dostring(prompt());
// console.log(result);



// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company 

// const dostring = function (a) {
//     let arr = a.split(' ');
//     let tx = '';
//     for (let i = 0; i < arr.length; i++) {
//         tx += (arr[i])[0].toUpperCase() + arr[i].slice(1, arr[i].length) + ' ';

//     }
//     return  tx;
// }

// const result = prompt()
// {
//     alert(dostring(result));
// }
