// 1. 

// let a = '123';
// const b = [];
// let c = 0;
// for (let i = 0; i < a.length; i++) {

//     b.push(Number(a[i]));
//     c += b[i];
//     alert(c);
// }
// alert(c);


// 2. 



// const d = [1,2,3,4];
// let c= 1;
// for (let i = 0; i < d.length; i++) {
//     c *= d[i];
//     alert(c);
// }
// alert(c);


// 3. 
let a = +prompt('Number 1');
let b = 1;
while (b <= a) {
    if (b % 3 == 0) {
        alert(b);
    }
    b++;
}