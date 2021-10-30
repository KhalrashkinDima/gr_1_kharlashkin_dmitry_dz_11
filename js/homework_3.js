
// Первая часть механическая (6 минут на написание)
let a = prompt('Введите первое число', 0);
let b = prompt('Введите первое число', 0);
let i = 0;
let summary = 0;

a = Number(a);
b = Number(b);

if (a > b) {
	for (;b <= a; b++) {
		if (b % 6 === 0) {
			console.log(b);
			i++
			summary = summary + b;
		}
	}
} else {
	for (;a <= b; a++) {
		if (a % 6 === 0) {
			console.log(a);
			i++
			summary = summary + a;
		}
	}
}
alert(`Количество чисел кратных 6 равно ${i}`);
alert(`Сумма чисел кратных 6 равно ${summary}`);

// Вторая часть работы - творческая ( 20 минут на написание)

let min = 0;
let max = 100;
let cases = 0; 
let max_cases = 7;
do {
	let your_number = min + ((max-min) / 2);
	let answer = confirm(`Твое число больше ${your_number} ?`);		
	console.log(max, min);
	cases++;
	if (answer) {
		min = your_number;
	} else {
		max = your_number;
	}
} while (max - min > 2 || cases < max_cases);
your_number_is = (max + min) / 2;
your_number_is = Math.round(your_number_is);
alert(`Ваше число ${your_number_is}`);