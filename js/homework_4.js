//Задание № 1 (15 минут)
let your_array = [];

for(i = 0; i < 5; i++) {
	your_array[i] = +(prompt('Введите число', 0));
	
	if (isNaN(your_array[i])) {
	alert('Повторите попытку ввода');
	i--;
	}
	console.log(i);
}
console.log(your_array);

let min_from_array = Math.min.apply(Math, your_array);
alert (`Наименьшее число введенного массива ${min_from_array}`);

let max_from_array = Math.max.apply(Math, your_array);
alert (`Наибольшее число введенного массива ${max_from_array}`);

// Задание № 2 (5 минут)

let first_number = +500;
let last_number = +888;
let array_of_numbers = [];
for (i = first_number; i < last_number; i++) {
	if (i % 2 === 0) {
		array_of_numbers.push(i);
	}
}
console.log(array_of_numbers);


//Задание № 3 (14 минут)

let your_word = prompt('Введите слово или число', 'яблоко');

your_word = your_word.split('');

console.log(your_word);

let reversed = your_word.reverse();

let reversed_string = reversed.join('');

alert(`Ваше слово или число задом наперед ${reversed_string}`);

console.log(reversed);


// Задание №4 (творческое, сделал по своему разумению не заглядывая в учебники и не гугля, 1 час)

let score = 0;
let first_town = prompt('Введите название города', 'город');
let lowercase_first_town = first_town.toLowerCase(first_town);
let first_town_array = lowercase_first_town.split('');
let first_town_last_letter = first_town_array.pop();
let other_towns = prompt(`Введите название города, начинающееся с буквы ${first_town_last_letter}`, 'город');
let lowercase_other_towns = other_towns.toLowerCase(other_towns);
let other_towns_array = lowercase_other_towns.split('');
let other_towns_first_letter = other_towns_array[0];
	do {
		first_town_last_letter = other_towns_array.pop();
		other_towns = prompt(`Введите название города, начинающееся с буквы ${first_town_last_letter}`, 'город');
		let lowercase_other_towns = other_towns.toLowerCase(other_towns);
		other_towns_array = lowercase_other_towns.split('');
		other_towns_first_letter = other_towns_array[0];
		score++;
		console.log(score, first_town_array, other_towns_array);
	} while(first_town_last_letter === other_towns_first_letter);
alert(`Вы проиграли, ваш счет ${score}`);