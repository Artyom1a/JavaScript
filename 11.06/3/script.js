// 6.
// Необходимо отобразить кнопку и инпут со значением по умолчанию. 
//По клику на
// кнопку заменить значение инпута


// // 9.
// // У вас есть кнопка. После каждого нажатия менять background

// const arr = ["#123", "#B33", "#C63", "#A23"];
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }


// // function click() {
// //     const change = document.querySelector(".click");

// // }



// const button = document.querySelector(".click");
// button.addEventListener("click", function () {
//     button.style.background = arr[getRandomInt(arr.length - 1)]
// });



// 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем
// самым выключая возможность редактирования значения инпута

// //заблокирует

// function button1click(){
//     let input = document.getElementById("input");
//     input.disabled = true;
// }

// //отблокирует

// function button2click(){
//     let input = document.getElementById("input");
//     input.disabled = false;
// }


// 11. По нажатию на кнопку поменять местами значения 2 инпутов

//заблокирует



function click() {
    const change = document.querySelector(".input");
    const change1 = document.querySelector(".input1");
    const value = change.value;
    change.value = change1.value;
    change1.value = value;

}


const button = document.querySelector(".click");
button.addEventListener("click", click);



// function button1click() {
//     let input1 = document.getElementById("input");
//     let input2 = document.getElementById("input1");
//     let input3;
//     input3.value = input2.value;
//     input2.value = input1.value;
//     input1.value = input3.value;
// }




// // function click() {
// //     const change = document.querySelector(".number")
// //     change.value = "+375(29)111 11 11";
// // }


// // const button = document.querySelector(".click");
// // button.addEventListener("click", click);

