
// // 3.
// // Дана строка массива чисел. Необходимо спарсить строку. 
// // Если же после того как
// // // вы спарсили данные у вас не массив бросить исключение. 
// // Добавить проверку
// // на числа. Далее вывести только те числа, которые кратны 3

// let json = "[12,33,44,55,66]";
// let arr = [];

// function isJsonParse(_json) {
//     try {
//         let obj = JSON.parse(_json);
//         if (!Array.isArray(obj)) throw new Error("not parse");
//         else {
//             return getNumber(obj);;
//         }
//     }

//     catch (error) {
//         error.message
//     }
// }

// function getNumber(_obj) {
//     return _obj.filter(function (elem) {
//         return (!isNaN(elem) && elem % 3 == 0);
//     })
// }

// let result = isJsonParse(json);
// alert(result);



// }

// 4. Дана строка массива . Необходимо спарсить строку. 
//Если же после того как вы
// спарсили данные у вас не массив бросить исключение. В ывести
// те элементы массива, id котрых четное значение

// let json = `[
//     { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3 }
//     ]`;

// function isJsonParse(_json) {
//     try {
//         let obj = JSON.parse(_json);
//         if (Array.isArray(obj)) {
//             return obj.filter(function (elem) {
//                 if (elem.id % 2 == 0) return elem;
//             })
//         }
//         else {
//             throw new Error("not parse");
//         }
//     }

//     catch (error) {
//         error.message
//     }
// }

// console.log(isJsonParse(json));


// 5.
// На вход подается число n количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10 <n < 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая : формирование
// массива. Вторая : валидация. Третья : основная логика задачи


// const arrlength = +prompt();
// let array = []; //массив для хранения данных

// function isArray(length) {


//     try {
//         if (arrlength > 0) {

//             function getRandomInt(max) {
//                 return Math.floor(Math.random() * max);
//             }

//             //получаем значения из интерфейса пользователя

//             for (i = 0; i < arrlength; i++) {

//                 let value = getRandomInt(100);
//                 array.push(value);

//             }

//         }
//         else { throw new Error("длинна массива 0 или отрицательное число") }
//         return array;
//     }
//     catch (error) {
//         error.Message;
//     }
// }

// let result= isArray(arrlength);

// alert(result);
