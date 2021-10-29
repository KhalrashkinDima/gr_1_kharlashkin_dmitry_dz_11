const PI = 3.14;
const METER_IN_INCH = 0.0254;
const METER_IN_KILOMETER = 1000;

let d = prompt('Диаметр колеса d, дюймы', 0);
let N = prompt('Пробег, км', 0);
let u = prompt('Количество колес, шт', 0);

d = Number(d);
N = Number(N);

d = d * METER_IN_INCH;
N = N * METER_IN_KILOMETER;

let wheel_speed =  N / d * PI;
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

