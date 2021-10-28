
let d = prompt('Диаметр колеса d, дюймы', 0);
let N = prompt('Пробег, км', 0);
let u = prompt('Количество колес, шт', 0);
const PI = 3.14;
d = Number(d);
N = Number(N);
let wheel_speed =  N * 10000 / (d * 2.54 * PI);
let wheel_speed_all = wheel_speed * u;
if (isNaN(d)) {
	alert('Диаметр колеса не является числовым значение');
} else if (isNaN(N)) {
	alert('Пробег не является числовым значение');
} else if (isNaN(u)) {
	alert('Количество колес не является числовым значение');
} else {
	alert(`Обороты одного колеса равны ${wheel_speed}`);
	alert(`Суммарные обороты всех колес равны ${wheel_speed_all}`);
}

