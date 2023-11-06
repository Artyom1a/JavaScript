const button8 = document.querySelector(".play");
const audio = document.querySelector(".audio");

let flag = false;

button8.addEventListener("click", function () {
    audio.src = "grustnaya-i-krasivaya-otkryivayuschayasya-korotkaya-melodiya-elegantnyiy-fonovyiy-zvuk-38210.mp3";
    if (!flag) {
        audio.play();
        flag = true;
        button8.textContent='Stop';
    }
    else {
        audio.pause();
        flag = false;
        button8.textContent='Play';
    }
})

