let all_divs = {};
let count = 9;

for (let i = 0; i <= count; i++) {
	all_divs['block' + i] = document.createElement('div');
	document.body.appendChild(all_divs['block' + i]);
}
setTimeout( function spring() {
	for (i = 0; i <= count; i++) {
		all_divs['block' + i].style.cssText=`background-color: #A0C5E8;
		width: 50px;
		height: 50px;
		margin: 5px auto;
		`;
	}
}, 3000);
setTimeout( function summer() {
	for (i = 0; i <= count; i++) {
		all_divs['block' + i].style.cssText=`background-color: green;
		width: 100px;
		height: 100px;
		margin: 5px auto;
		`;
	}
}, 6000);
setTimeout( function autumn() {
	for (i = 0; i <= count; i++) {
		if ((i+1) % 3 === 0) {
			all_divs['block' + i].style.cssText=`background-color: red;
			width: 100px;
			height: 100px;
			margin: 5px auto;
			`;	
		} else {
			all_divs['block' + i].style.cssText=`background-color: orange;
			width: 100px;
			height: 100px;
			margin: 5px auto;
			`;
		}
	}
}, 9000);
setTimeout( function winter() {
	for (i = 0; i <= count; i++) {
		document.body.removeChild(all_divs['block' + i]);
	}
	Parent.style.cssText=`background-color: black;`
}, 12000);
