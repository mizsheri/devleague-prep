function loadGoats () {
	var goats;
	var i; 

	goats = [
	{
		name: "Billy",
		isInTree: false
	},
	{
		name: "Billy Jr.",
		isInTree: false
	}
];

console.log ("loading goats...");

for (i = 0; i < goats.length; i++) {
	goat = goats[i];
	putInTree(goat);
}

console.log ("loaded goats!!!!!");
}

function putInTree(goat) {
	var goatElem;

	goatElem = document.createElement("div");

	textNode = document.createTextNode(goat.name);
	goatElem.addChild(textNode);

	
}