var food_dogs = document.getElementById("food_dogs");
//var data;
function executeThisCodeAfterFileIsLoaded() {
	//console.log(this.responseText);
	var data = JSON.parse(this.responseText);

	for (var i = 0; i < data.dog_brands.length; i++) {
		var brands = (data.dog_brands[i]);
		//console.log(brands);
		food_dogs.innerHTML+= `<h1> ${brands.name} </h1>`;
			for (var j = 0; j < data.dog_brands.length; j++) {
				food_dogs.innerHTML+= `<h2> ${brands.types[j].type} <h2>`;
				for (var k = 0; k < data.dog_brands.length; k++) {
					food_dogs.innerHTML+=`<div> ${brands.types[j].volumes[k].name} : $${brands.types[j].volumes[k].price}</div>`;
				}
			}
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
