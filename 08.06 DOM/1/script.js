// const valP = document.getElementsByClassName('paragraph');
// for (let i of valP) {
//     console.log(i);
// }

// const valP = document.getElementById('paragraphid');
// console.log(valP);

// const valP = document.getElementsByTagName('p');
// for (let i of valP) {
//     console.log(i);
// }


// const valP = document.getElementsByName('paragraphname');
// for (let i of valP) {
//     console.log(i);
// }

// document.getElementById('paragraphid').innerHTML = '<h1>11111</h1>';


// const header = document.createElement("h1");
// header.innerHTML = "11111";
// document.getElementById("block").appendChild(header);



const getSchool = (who,verb) => {
    alert(`${who} ${verb} in `);
}

setInterval(getSchool, 1000, 'I', 'Speak');