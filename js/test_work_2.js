let all_divs = {};
let count = 999;
let number_of_multiplicity = 3;
let number_of_multiplicity_2 = 18;
document.body.id = "Parent";
Parent.style.cssText=`
                justify-content: safe center;`
setTimeout( function spring() {
	for (i = 0; i <= count; i++) {
		all_divs[i] = document.createElement('div');
		document.body.appendChild(all_divs[i]);
		all_divs[i].style.cssText=`background-color: #A0C5E8;
		width: 50px;
		height: 50px;
		margin: 1px auto;
		`;
		all_divs[i].id = i;
	}
}, 2000);
setTimeout( function summer() {
	for (i = 0; i <= count; i++) {
		all_divs[i].style.cssText=`background-color: purple;
		width: 10px;
		height: 10px;
		margin: 1px auto;
		`;
	}
}, 4000);
setTimeout( function () {
	for (i = 0; i <= count; i++) {
		all_divs[i].innerHTML = i;
		all_divs[i].style.cssText=`background-color: purple;
		width: 10px;
		height: 10px;
		margin: 1px auto;
		font-size: 10px;
		`;
	}
}, 6000)
setTimeout( function autumn() {
	for (i = 0; i <= count; i++) {
		if ((i+2) % number_of_multiplicity === 0) {
			all_divs[i].style.cssText=`background-color: yellow;
			width: 10px;
			height: 10px;
			margin: 5px auto;
			font-size: 10px;
			`;	
		} else if ((i+1) % number_of_multiplicity_2 === 0) {
			all_divs[i].style.cssText=`background-color: purple;
			width: 0;
			height: 0;
			border-left: 7px solid white;
			border-right: 7px solid white;
			border-bottom: 7px solid purple;
			margin: 5px auto;
			font-size: 10px;
	
			`;	
		} else {
			all_divs[i].style.cssText=`background-color: yellow;
			width: 10px;
			height: 10px;
			margin: 5px auto;
			font-size: 10px;
			`;
		}
	}
}, 8000);
setTimeout( function winter() {
	for (i = 0; i <= count; i++) {
		if ((i+1) % number_of_multiplicity_2 === 0) {
			document.body.removeChild(all_divs[i]);
		} else if (i > 5){
			all_divs[i].style.cssText=`background-color: black;
			width: 30px;
			height: 30px;
			margin: 1px auto;
			font-size: 10px;

			`;
		}
	}

}, 10000);