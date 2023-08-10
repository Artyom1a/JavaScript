// 10. Задача на анаграмму. На входе 2 строки, необходимо выявить являются ли
// введенные значения анаграммами

// let str = 'wew';
// let str1 = 'rek';
// let result = false;
// let result1 = false;
// function doanagr(str, str1, callback) {
//     const str2 = str.split('').reverse().join('');
//     const str3 = str1.split('').reverse().join('');
//     if(str==str2)
//     {
//         result = true;
//     }
//     if(str1==str3)
//     {
//         result = true;
//     }

//     callback();
// }

// doanagr(str, str1, function () {
//     alert(result);
//     alert(result1);
// })



// 11. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 7 -> 
// *******
// ******
// *****
// ****
// ***
// **
// *

const number = +prompt();

const dotr = function(a){
    for(let i = number; i>=0; i--)
    {
        let str ='*';
        for(let j = 1; j<=i; j++)
        {
            str += '*';
        }
        console.log(str);
    }

    }

    console.log(dotr(number));

// 12. Найдите минимальное значение в массиве используя цикл
