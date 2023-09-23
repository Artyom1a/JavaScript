// 3.
// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута




// function click() {
//     const change = document.querySelector(".text")
//     alert(change.value);
// }


// const button = document.querySelector(".click");
// button.addEventListener("click", click);


// 4.
// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки


// function click() {
//     const change = document.querySelector(".text")
//     if(change.value)
//     {
//         alert(change.value);
//     }
//     else 
//     {
//         alert("mistake");
//     }

// }
// const button = document.querySelector(".click");
// button.addEventListener("click", click);


// 5.
// // Необходимо отобразить числовой инпут и кнопку. После нажатия на 
// кнопку
// // необходимо получить значение из инпута. Проверить, что это число > 0.
//  Если
// // проверка true, то вывести в Результат ряд Фибоначчи .


function click() {
    const fibb = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];
    const change = document.querySelector(".text")
    if (change.value && change.value > 0) {
        for (let i = 0; i <= change.value; i++) {
            alert(fibb[i]);
        }
    }
    // {


    //     fibb.forEach(function (elem) {
    //         alert(elem);
    //     })

    // }
    else {
        alert("mistake");
    }

}
const button = document.querySelector(".click");
button.addEventListener("click", click);