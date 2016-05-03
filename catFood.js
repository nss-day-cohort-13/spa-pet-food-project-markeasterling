var food_cats = document.getElementById("food_cats");

function executeThisCodeAfterFileIsLoaded() {
	var catData = JSON.parse(this.responseText);

	for (var i = 0; i < catData.cat_brands.length; i++) {
		var brands = catData.cat_brands;
		food_cats.innerHTML += `<h1> ${brands[i].name}</h1>`;
		food_cats.innerHTML += `<div>suited for: ${brands[i].breeds}</div>`;

			for (var j = 0; j < brands[i].types.length; j++)	{
				food_cats.innerHTML += `<h2> ${brands[i].types[j].type} </h2>`

					for (k = 0; k < brands[i].types[j].volumes.length; k++)	{
						food_cats.innerHTML += `<div> ${brands[i].types[j].volumes[k].name}:
						$${brands[i].types[j].volumes[k].price} </div>`;
					};
			};
	};
};

function executeThisCodeIfXHRFails() {
	alert("error");
};

var catFood = new XMLHttpRequest();
catFood.addEventListener("load", executeThisCodeAfterFileIsLoaded);
catFood.addEventListener("error", executeThisCodeIfXHRFails);
catFood.open("GET", "catFood.json");
catFood.send();
