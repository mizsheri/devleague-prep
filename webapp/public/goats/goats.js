<<<<<<< HEAD
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
=======
function loadGoats() {
  var goats;
  var i;
  var goat;
  
  goats = [
    {
      name: 'Billy',
      isInTree: false
    },
    {
      name: 'Billy Jr.',
      isInTree: false
    }
  ];

  console.log('loading goats...');

  for (i = 0; i < goats.length; i++) {
    goat = goats[i];
    putInTree(goat, i);
  }

  console.log('loaded goats!!!!!!');
}

function putInTree(goat, i) {
  var goatElem;
  var textNode;
  var treeElem;
  var treeElems;
  var bodyElem;

  goatElem = document.createElement('div');

  textNode = document.createTextNode(goat.name);
  goatElem.appendChild(textNode);

  goatElem.classList.add('treed');
  goatElem.id = i;

  // add it to the tree...
  treeElem = document.getElementById('tree');
  treeElem.appendChild(goatElem);

  goat.isInTree = true;
}

>>>>>>> 730f7d124189baa0578ed26148df8d695663b35f
