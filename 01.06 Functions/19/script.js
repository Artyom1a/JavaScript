// 19. Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.


const a =+ prompt('Number 1');

const b =+ prompt('Number 2');

const c =+ prompt('Number 3');

const d = b**2 - 4*a*c;

switch(true) {
    case (d==0):
        alert((-b+Math.sqrt(d))/2*a);
        break;
    case (d>0):
        alert((-b+Math.sqrt(d))/2*a);
        alert((-b-Math.sqrt(d))/2*a);
        break;
}