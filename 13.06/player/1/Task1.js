// 1.
// Посчитать количество гласных и согласных в строке
let vowels = ["a", "e", "y", "u", "i", "o"];
let consonants = ["q", "w", "r", "t", "p", "s", "d", "f", "g", "k", "l", "z", "x", "c", "v"];

function sumVolwels(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}


function sumConsonants(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (consonants.includes(text[i])) {
            count++;
        }
    }
    return count;
}

const button = document.querySelector(".button1");

button.addEventListener("click", function () {
    const input = document.querySelector(".input1")
    const result = document.querySelector(".result1");
    try {
        result.textContent = `Гласных ${sumVolwels(input.value)}. Согласных ${sumConsonants(input.value)}.`
    }
    catch (error) {
        result.textContent = JSON.stringify(error);
    }

})
