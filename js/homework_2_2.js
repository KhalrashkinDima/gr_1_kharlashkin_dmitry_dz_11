let your_date = prompt('Введите день', 0);
your_date = Number(your_date);
let your_date_is = your_date % 100;
let your_date_is_10 = your_date_is % 10;

if (isNaN(your_date)) {
	console.log('Данные введены неверно');
} else if (your_date_is > 10 && your_date_is < 21) {
	alert(`${your_date} дней`);
} else if (your_date_is_10 == 1) {
	alert(`${your_date} день`);
} else if (your_date_is_10 <5 && your_date_is_10 > 1) {
	alert(`${your_date} дня`);
} else {
	alert(`${your_date} дней`);
}