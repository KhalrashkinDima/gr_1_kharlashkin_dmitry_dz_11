document.body.id = "Parent";
Parent.style.cssText=`width: auto; margin: auto 1px; display: grid; overflow: auto;`
let arr = [];


async function getJson() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users');
	if (response.ok) {
		let json = await response.json();
	for ( let i = 0; i < json.length; i++) {
		arr[i] = document.createElement('div');

		arr[i].innerHTML += `<img src="img/User-icon.png" width = 100px;>`;
		arr[i].innerHTML += `<p> Name : ${json[i].name} </p>`;
		arr[i].innerHTML += `<p> Username : ${json[i].username} </p>`;
		arr[i].innerHTML += `<a href = #;> Email : ${json[i].email} </a>`;
		arr[i].innerHTML += `<p> Adress </p>`;
		arr[i].innerHTML += `<p> Street : ${json[i].address.street} </p>`;
		arr[i].innerHTML += `<p> Suite : ${json[i].address.suite} </p>`;
		arr[i].innerHTML += `<p> City : ${json[i].address.city} </p>`;
		arr[i].innerHTML += `<p> Zipcode : ${json[i].address.zipcode} </p>`;
		arr[i].innerHTML += `<p> Geo </p>`;
		arr[i].innerHTML += `<p> Lat : ${json[i].address.geo.lat}</p>`;
		arr[i].innerHTML += `<p> Lng : ${json[i].address.geo.lng}</p>`;

		document.body.appendChild(arr[i]);

		let deleteButton = document.createElement('button');
		let InformationButton = document.createElement('button');

		deleteButton.innerHTML += `Удалить информацию`;
		InformationButton.innerHTML += `Получить информацию`;

		deleteButton.onclick = () => arr[i].remove();
		InformationButton.onclick = () => alert(arr[i].innerHTML);

		arr[i].appendChild(deleteButton);
		arr[i].appendChild(InformationButton);

		arr[i].style.cssText=`width: 400px;
		margin: 50px auto;
		text-align:center;
		font-size: 18px;
		border: 1px solid blue;
		border-radius: 20px;
		padding: 10px;
		background-color: turquoise;
		`;
		}
	} else {
		alert("Ошибка HTTP: " + response.status);
	}
}

getJson();



