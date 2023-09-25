// 12. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое


// const fibb = [];

// function click() {

//     const change = document.querySelector(".text")
//     if (change.value) {
//         fibb.push(change.value);
//     }
//     else {
//         alert("mistake");
//     }
//     alert(fibb);
// }
// const button = document.querySelector(".click");
// button.addEventListener("click", click);


// 13. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const list = document.querySelector(".list");
list.addEventListener("click", (event) => {

    alert(event.target.textContent);
});



// alert(listItems[i].textContent);
// console.log(event);
// const listItems = list.querySelectorAll("li");
// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", function () {
//         alert(listItems[i].textContent);
//     })
// }



