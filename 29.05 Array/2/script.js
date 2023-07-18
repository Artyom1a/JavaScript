// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива 
//не будет
// равна 5. Вывести массив в консоль (цикл for, while)
// {
//     let array = [];
//     while (array.length != 5) {
//         let x = +prompt();
//         if (!isNaN(x)) {
//             array.push(x);
//         }
//     }
//     alert(array);
// }


// 5. На входе 10 элементов. Из элементов составить 2 массива 
// по 5 элементов. Далее
// // необходимо сравнить массивы. Если они идентичны, то вывести
//  булевое true, в
// противном случае false

// {
//     let array = [];
//     while (array.length != 10) {
//         let x = +prompt();
//         if (!isNaN(x)) {
//             array.push(x);
//         }
//     }
// let a = array.splice(0,5);
// let result = true;
// for(let i = 0; i<a.length; i++)
// {
//     if(!array.includes(a[i]))
//     {
//         result = false;
//         break;
//     }
// }
// alert(result);


//---------------------
//     const one = array.slice(0, 5);
//     const two = array.slice(5);
//     one.sort();
//     two.sort();
//     let result = one.every(function (item, index) {
//         return item == two[index];
//     });
//     alert(result);
// }




// 6. На входе n – количество элементов массива. Далее производится
//  заполнение
// // массива с клавиатуры. Необходимо вывести true, если хотя бы 1
//  элемент массива –
// число. Some


// const n = + prompt();
// let array = [];
// while (array.length != n) {
//     array.push(prompt());
// }
// let result = array.some(function (elem) {
//     return !isNaN(elem);
// })
// alert(result);

