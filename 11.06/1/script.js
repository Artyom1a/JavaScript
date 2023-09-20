// 1.
// Необходимо отобразить кнопку с надписью «Нажми на меня».
// По клику на нее
// вывести alert с сообщением

// function click(){
//     alert('Нажал на меня');
// }

// // const btn = document.querySelector(".click1");
// // // console.log(btn);
// // btn.addEventListener("click1",click);

// const btn = document.getElementById("click1");
// btn.addEventListener("click1",click);



//---------------------
// function click() {
//     alert('нажал');
// }

// const button = document.querySelector(".click");
// console.log(button);
// button.addEventListener("click", click);


// 2.
// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут со
// значением по умолчанию «+375(хх)ххх хх хх». По клику на кнопку заменить
// значение инпута на «+375(29)111 11 11»



function click() {
    const change = document.querySelector(".number")
    change.value = "+375(29)111 11 11";
}


const button = document.querySelector(".click");
button.addEventListener("click", click);



// 3.
// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута