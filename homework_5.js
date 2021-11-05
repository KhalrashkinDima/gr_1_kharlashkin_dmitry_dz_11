// Задание №1
function get_order (string) {
	if (typeof(string) !== 'string') {
		return false;
	}
	string_array = string.split(' ');
	result1 = string_array.sort();
	return result1;
}
get_order('яблоко кокос апельсин');
console.log(result1);

// Задание № 2

function get_random(arr) {
	let random_array_position = Math.floor(Math.random() * arr.length);
	console.log(random_array_position);
	result2 = arr[random_array_position];
	return result2;
}
let random_array = [1, 142, 'asdasf', 's132'];
get_random(random_array);
console.log(result2);


// Задание № 3 
function get_max(arr) {
	result3 = Math.max.apply(Math, arr);	
	return result3;
}
let number_array = [1, 15, 74, 'sads', 147, 22, 'peter', 123213124];
for (i = 0; i < number_array.length; i++) {
	if (isNaN(number_array[i])) {
		number_array.splice(i, 1);
	}
}
console.log(number_array);
get_max(number_array);
console.log(result3);

//Задание №4
var points = {
	'Вася': 1200,
	'Петя': -300,
	'Маша': 334250,
	'Даша': -150,
	'Сергей': 5450,
}
let summary = 0;
let max_points = -9999999999;
let min_points = 9999999999;
for (let value of Object.values(points)) {
	summary += value;
	if (value > max_points) {
		max_points = value;
	} else if (value < min_points) {
		min_points = value;
	}
}
console.log(summary);
console.log(max_points);
console.log(min_points);