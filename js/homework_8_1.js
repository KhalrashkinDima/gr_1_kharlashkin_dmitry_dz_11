let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
let div6 = document.createElement('div');
let div7 = document.createElement('div');
let div8 = document.createElement('div');
let div9 = document.createElement('div');
let div10 = document.createElement('div');

document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(div4);
document.body.appendChild(div5);
document.body.appendChild(div6);
document.body.appendChild(div7);
document.body.appendChild(div8);
document.body.appendChild(div9);
document.body.appendChild(div10);

function spring() {
	function blue_box(...arg) {
		for (i = 0; i < arguments.length; i++) {
			arguments[i].style.cssText=`background-color: #A0C5E8;
			width: 50px;
			height: 50px;
			margin: 5px auto;
			`;
		}
	}
	blue_box(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
}
function summer() {
	function green_box(...arg) {
		for (i = 0; i < arguments.length; i++) {
			arguments[i].style.cssText=`background-color: green;
			width: 100px;
			height: 100px;
			margin: 5px auto;
			`;
		}
	}
	green_box(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
}
function autumn() {
	function red_box(...arg) {
		for (i = 0; i < arguments.length; i++) {
			arguments[i].style.cssText=`background-color: red;
			width: 100px;
			height: 100px;
			margin: 5px auto;
			`;
		}
	}
	function orange_box(...arg) {
		for (i = 0; i < arguments.length; i++) {
			arguments[i].style.cssText=`background-color: orange;
			width: 100px;
			height: 100px;
			margin: 5px auto;
			`;
		}
	}
	red_box(div3, div6, div9);
	orange_box(div1, div2, div4, div5, div7, div8, div10);
}
function winter() {
	document.body.removeChild(div1);
	document.body.removeChild(div2);
	document.body.removeChild(div3);
	document.body.removeChild(div4);
	document.body.removeChild(div5);
	document.body.removeChild(div6);
	document.body.removeChild(div7);
	document.body.removeChild(div8);
	document.body.removeChild(div9);
	document.body.removeChild(div10);
	Parent.style.cssText=`background-color: black
	;`

}

setTimeout(spring, 3000);
setTimeout(summer, 6000);
setTimeout(autumn, 9000);
setTimeout(winter, 12000);