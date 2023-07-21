//7.  На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
//способы обращения к первому и последнему элементам


// const arr_ = Array('hschool', 'hschool_0', 'hschool_1');
// alert (arr_);

//----------------
// alert(arr_[0]);
//----------------
//alert(arr_.pop());
// alert(arr_.shift());
//----------------
// alert(arr_.splice(1,2));
// alert(arr_);
//----------------
// alert(arr_.slice(0,1));
// alert(arr_);

// arr_.forEach(function (elem,index,array){
//     if(index==0 || index ==arr_.length-1)
//     {
//         alert(elem);
//     }
// }
// )

// 8.
// На входе n количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива числа, то вывести логическое
// true , в противном случае false . Every, forEach


let n = +prompt('Number elemnts');
let array =[];
while(array.length<n)
{
    array.push(prompt());
}
let result = array.every(function(elem) {
    if(isNaN(elem) )
    {
        return false;
    }
    else
    {
        return true;
    }
})
alert(array);
 alert(result);


//------------------
// const arr =[1,2,-5,-7];

// const result = arr.every(function(elem) {
//         if(elem>=0)
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     })
//     alert(result);

// 9.
// На входе n количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach , reduce

// let n = +prompt('Number elemnts');
// const arr = [];
// while (arr.length < n) {
//     arr.push(+prompt());
// }
// const result = arr.reduce(function (sum, elem) {
//     return sum + elem;
// });
// alert(result);


