
function Calculator(name) {
	this.name = name;
	this.history = [];
	console.log(history);
	
	function add_day() {
		let date1 = new Date(); 
		year = date1.getFullYear();
		month = date1.getMonth() + 1;
		day = date1.getDate();
		now_day = `${year} ${month} ${day}`;
		return now_day;
	}
	function add_time() {
		let date2 = new Date(); 
		hour = date2.getHours();
		minutes = date2.getMinutes();
		now_time = `${hour}:${minutes}`;
		return now_time;
	}
	this.summary = function(...arrg) {
		let result = 0;	
		let sum = [];	
		for ( let i = 0; i < arguments.length; i++) {
			if (isNaN(arguments[i])) {
				return null;
			}
			result = result + arguments[i];
			sum.push(arguments[i]);
		}
		this.history.push(`${name} (${add_day()} ${add_time()}) сумма = ${result} (${sum})`);
		return result;
	}
	this.multiply = function(...arrg) {
		let result = 1;
		let mult = [];	
		for (i = 0; i < arguments.length; i++) {
			if (isNaN(arguments[i])) {
				return null;
			}
			result = result * arguments[i];
			mult.push(arguments[i]);
		}
		this.history.push(`${name} (${add_day()} ${add_time()}) умножение = ${result} (${mult})`);
		return result;		
	}
	this.difference = function(num1, num2) {
		if (isNaN(num1) || isNaN(num2)) {
			return null;
		}
		result = num2 - num1;
		this.history.push(`${name} (${add_day()} ${add_time()}) вычитание = ${result} (${num1},${num2})`);
		return result;
	}
	this.divide = function(num1, num2) {
		if (isNaN(num1) || isNaN(num2)) {
			return null;
		}
		result = num2 / num1;
		this.history.push(`${name} (${add_day()} ${add_time()}) деление = ${result} (${num1},${num2})`);
		return result;
	}
	this.show_history = function () {
		return this.history;
	}
	this.delete_history = function () {
		this.history = [];
		return this.history;
	}
}

let my_calculator = new Calculator("Мой калькулятор");
console.log(my_calculator.summary(123, 14, 151, 1232, 3423, 3432,));
console.log(my_calculator.multiply(123, 123, 151, 1232, 3423, 3432,));
console.log(my_calculator.difference(123, 14, 151, 1232, 3423, 3432,));
console.log(my_calculator.divide(123, 14, 151, 1232, 3423, 3432,));
console.log(my_calculator.show_history());
console.log(my_calculator.delete_history());
console.log(my_calculator.divide(123, 14, 151, 1232, 3423, 3432,));
console.log(my_calculator.show_history());