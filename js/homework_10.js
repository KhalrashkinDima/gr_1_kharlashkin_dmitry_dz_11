let arr = [];

async function getJson() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	if (response.ok) {
		let json = await response.json();
		for (let i = 0; i < json.length; i++) {
			arr[i] = document.createElement('div');
			for (var key in json[i]) {
				if (typeof(json[i][key]) === 'object') {
					arr[i].innerHTML += '<p>' + json[i][key] + '</p>';
					for (var data in json[i][key]) {
						arr[i].innerHTML += '<p>' + data +':'+ json[i][key][key] + '<p>';
					}
				}
				arr[i].innerHTML += '<p>' + key +':'+ json[i][key] + '<p>';
			}
			arr[i].innerHTML += `<button>Удалить информацию</button>`; 
			arr[i].lastChild.onclick = () => arr[i].remove();
		}
	} else {
		alert("Ошибка HTTP: " + response.status);
	}
}

function AddUserToScreen () {
	for ( let i = 0; i < arr.length; i++) {
		document.body.appendChild(arr[i]);
		let deleteButton = document.createElement('button');
		deleteButton.innerHTML += `Удалить информацию`;
		let InformationButton = document.createElement('button');
		InformationButton.innerHTML += `Получить информацию`;
		deleteButton.onclick = () => arr[i].remove();
		InformationButton.onclick = () => alert(arr[i].getElementsByTagName('p').innerHTML);
		arr[i].appendChild(deleteButton);
		arr[i].appendChild(InformationButton);
	}
}

function setSomeStyle () {	
	for (i = 0; i <= arr.length; i++) {
		arr[i].style.cssText=`width: 300px;
		margin: 50px auto;
		text-align:center;
		font-size: 20px;
		border: 1px solid blue;
		border-radius: 20px;
		padding: 10px;
		`;
	}
}


addUserToScreen();
getJson();
setSomeStyle();
