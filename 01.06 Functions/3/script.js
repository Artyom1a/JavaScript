// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

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

// alert(doarr(arr));
// if (doarr(arr)) {
//     const doarr1 = (a) => {
//         a.reduce(function (sum, element) {
//            sum=  sum + element;
//         });
//         return sum;



//     }
//     alert(doarr1(arr));
// }


// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива


// const arr = ['rt', 'ty', 'ty'];
// let sh = true;
// let str = '';

// function doarrstring(a) {
// for(let i=0; i<arr.length; i++)
// {
//     if(typeof arr[i] != 'string')
//     {
//         sh = false;
//     }
// }
// return sh;
// }
// function doarrstringconcat(a) {
//     for(let i=0; i<arr.length; i++)
//     {
//         str += arr[i];
//     }
//     return str;
//     }


// if(doarrstring(arr))
// {
//     alert(doarrstringconcat(arr));
// }

// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами



const arr = [1, 2, 3];
let sh = true;
let str = '';

function doarrstring(a) {
for(let i=0; i<arr.length; i++)
{
    if(typeof arr[i] != 'number')
    {
        sh = false;
    }
}
return sh;
}
function doarrstringmultip(a) {
    const result =arr.map(function(elem) {
        return elem = elem*2;
    })
    return result;
    }


if(doarrstring(arr))
{
    alert(doarrstringmultip(arr));
}