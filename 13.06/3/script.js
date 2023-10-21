// 6.
// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.


// const a = +prompt();
// const b = +prompt();
// const c = +prompt();

// function isTriangle(a, b, c) {
//     if (a + b > c && a + c > b && b + c > a
//     ) {
//         return "true";
//     }
//     else {
//         return "false";
//     }
// }

// alert(isTriangle(a,b,c));


// 7.
// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их . Добавить проверки
// 9119 --> 811181 92 81, 12=== 1

// const num = +prompt();
// let result = "";
// let strnum = num.toString();

// function isMathPowstrNum(strnum) {
//     for (let i = 0; i < strnum.length; i++) {
//         try {
//             let chislo;
//             if (chislo = Number(strnum[i])) {

//                 result += chislo ** 2;

//             }
//             else {
//                 throw new Error("error");
//             }


//         }
//         catch (error) {
//             return error.message;
//         }

//     }
//     return result;
// }


// result = isMathPowstrNum(strnum);

// alert(result);




// try {
//     Number(result + Number(number[i]).toFixed());
// } catch (e) {
//     throw new Error(`Error: ${e}`);
// };
// result += Math.pow(Number(number[i]), 2).toFixed();





// alert(`${result} === ${Math.sqrt(+number)}`);
//                 } catch (e) {
//     alert('Ошибка');
// }



// 8.
// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] --> "e"
// ["O","Q","R","S"] --> "

const arr = ["a","b","c","d","f"];


const findLetter=(array) =>{
    try{
    for(let i=1;i<array.length; i++){
        const prev = array[i-1].charCodeAt();
        
        const current = array[i].charCodeAt();
        

        if(current-prev !==1){
            return String.fromCharCode(prev+1);
        }
    }
}
catch{
    return null;
}
    
}

alert(findLetter(arr));



// const findLetter = (array) =>{
//     const index =array
//     .slice(1)
//     .findIndex((c,i)=>c.charCodeAt() - array[i].charCodeAt()+1);
    
//     return index>-1? 
//     String.fromCharCode(array[index].charCodeAt()+1)
//     :
//     null;

// };

// console.log(findLetter(["a","b","c","d","f"]));

