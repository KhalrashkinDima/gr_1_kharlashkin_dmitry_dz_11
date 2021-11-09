let history = [];
function Calculator(name) {
	this.summary = function() {
		let result = 0;	
		let sum = [];	
		for ( let i = 0; i < arguments.length; i++) {
			if (isNaN(arguments[i])) {
				return null;
			}
			result = result + arguments[i];
			sum.push(arguments[i]);
			console.log(sum);
		}
		let date1 = new Date(); 
		year = date1.getFullYear();
		month = date1.getMonth() + 1;
		day = date1.getDate();
		hour = date1.getHours();
		minutes = date1.getMinutes();
		history.push(`Мой калькулятор ( ${day}.${month}.${year} ${hour}:${minutes}): сумма = ${result}, (${sum})`);
		return result;
	}
	this.multiply = function() {
		let result = 1;
		let mult = [];	
		for (i = 0; i < arguments.length; i++) {
			if (isNaN(arguments[i])) {
				return null;
			}
			result = result * arguments[i];
			mult.push(arguments[i]);
		}
		let date2 = new Date(); 
		year = date2.getFullYear();
		month = date2.getMonth() + 1;
		day = date2.getDate();
		hour = date2.getHours();
		minutes = date2.getMinutes();
		history.push(`Мой калькулятор ( ${day}.${month}.${year} ${hour}:${minutes}): умножение = ${result}, (${mult})`);
		return result;		
	}
	this.difference = function(num1, num2) {
		if (isNaN(num1) || isNaN(num2)) {
			return null;
		}
		result = num2 - num1;
		let date3 = new Date(); 
		year = date3.getFullYear();
		month = date3.getMonth() + 1;
		day = date3.getDate();
		hour = date3.getHours();
		minutes = date3.getMinutes();
		history.push(`Мой калькулятор ( ${day}.${month}.${year} ${hour}:${minutes}): вычитание = ${result}, (${num1}, ${num2})`);
		return result;
	}
	this.divide = function(num1, num2) {
		if (isNaN(num1) || isNaN(num2)) {
			return null;
		}
		result = num2 / num1;
		let date4 = new Date(); 
		year = date4.getFullYear();
		month = date4.getMonth() + 1;
		day = date4.getDate();
		hour = date4.getHours();
		minutes = date4.getMinutes();
		history.push(`Мой калькулятор ( ${day}.${month}.${year} ${hour}:${minutes}): деление = ${result}, (${num1}, ${num2})`);
		return result;
	}
}

let my_calculator = new Calculator();
console.log(my_calculator.summary(123, 14, 151, 1232, 3423, 3432,));
console.log(my_calculator.multiply(123, 123, 151, 1232, 3423, 3432,));
console.log(my_calculator.difference(123, 14, 151, 1232, 3423, 3432,));
console.log(my_calculator.divide(123, 14, 151, 1232, 3423, 3432,));
console.log(history);