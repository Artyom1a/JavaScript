
// 2.
// Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные


let array = [];

function sumArray(arr) {
    let arrayelemt = document.querySelector(".input");
    arr.push(arrayelemt.value);
    return arr;
}

function chArray(arr) {
    let charr = [];
    let notevenarr = [];
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            charr.push(arr[i]);
        }
        else {
            notevenarr.push(arr[i]);
        }

    }
    return [charr, notevenarr];
    // console.log(`Чётный: ${charr}`);
    // console.log(`Нечётный: ${notevenarr}`);

}






const button = document.querySelector(".button1");


button.addEventListener("click", function () {
    const result = document.querySelector(".result1");
    let i = chArray(sumArray(array));
    result.textContent = `Массив чётных ${i[0]}. Массив нечётных  ${i[1]}.`
});

