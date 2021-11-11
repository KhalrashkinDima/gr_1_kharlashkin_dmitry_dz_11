let div1 = document.createElement('div');
let div2 = document.createElement('div');


document.body.appendChild(div1);
document.body.appendChild(div2);


div1.style.cssText=`background-color: green;
width: 250px;
height: 75px;
margin: 5px auto;
`;
div2.style.cssText=`background-color: yellow;
width: 300px;
height: 100px;
margin: 5px auto;
`;
div1.onclick = function () {
	alert('ЗЕЛЕНЫЙ!')
}
div1.onmouseover = function() {
	console.log(div1.clientHeight, div1.clientWidth);
}
div2.onclick = function () {
	alert('ЖЕЛТЫЙ!')
}
div2.onmouseover = function() {
	console.log(div2.clientHeight, div2.clientWidth);
}