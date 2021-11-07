//Задание №1

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
const DAY_IN_WEEK = 7;
const WORKING_DAY_IN_WEEK = 5;


function get_count_work_days(date1, date2) {
	if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
		return null;
	}
	date1 = date1.getTime();
	date2 = date2.getTime();
	let count_of_days = Math.floor(Math.abs((date1 - date2) / MS_IN_DAY));
	let result = Math.floor( (count_of_days * WORKING_DAY_IN_WEEK) / DAY_IN_WEEK);
	return result;
}
let your_date1 = new Date(123143514254);
let your_date2 = new Date(1973, 8, 31);
console.log(get_count_work_days(your_date1, your_date2));
console.log(your_date1, your_date2);

//Задание №2

function get_count_days(now_date) {
	if (isNaN(now_date.getTime())) {
		let now_date = new Date();
		return now_date;
	}
	let year_of_a_date = now_date.getFullYear();
	let new_year_date = new Date (year_of_a_date, 11, 31);
	now_date = now_date.getTime();
	new_year_date = new_year_date.getTime();
	let result = Math.floor(Math.abs(( now_date - new_year_date)/ MS_IN_DAY));
	alert(`От заданной вами даты до нового года ${year_of_a_date} осталость ${result} суток`);
	return result;
}
your_date = new Date(1343251235612646);
console.log(get_count_days(your_date));



//Задание №3

function get_day(date) {
	if (isNaN(date.getTime())) {
		return null;
	}
  	let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  	let number_of_day = date.getDay();
  	let result = days[number_of_day];
  return result;
}

let date3 = new Date(2433463124232);
console.log(get_day(date3));