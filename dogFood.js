var food_dogs = document.getElementById("food_dogs");

function executeThisCodeAfterFileIsLoaded() {
	var data = JSON.parse(this.responseText);

	for (var i = 0; i < data.dog_brands.length; i++) {
		var brands = (data.dog_brands);
		food_dogs.innerHTML+= `<h1> ${brands[i].name} </h1>`;

			for (var j = 0; j < brands[i].types.length; j++) {
				food_dogs.innerHTML+= `<h2> ${brands[i].types[j].type} <h2>`;

				for (var k = 0; k < brands[i].types[j].volumes.length; k++) {
					food_dogs.innerHTML+=`<div> ${brands[i].types[j].volumes[k].name}:
					$${brands[i].types[j].volumes[k].price}</div>`;
				};
			};
	};

};

function executeThisCodeIfXHRFails() {
	alert("error");
};

var dogFood= new XMLHttpRequest();

dogFood.addEventListener("load", executeThisCodeAfterFileIsLoaded);
dogFood.addEventListener("error", executeThisCodeIfXHRFails);
dogFood.open("GET", "dogFood.json");
dogFood.send();
