var presidents;
var i; 


presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

printPresidents()

function printPresidents (){
for (i = 0; i < presidents.length; i++){
	console.log ("value of i is:" + i);
	console.log ("Value at Index is: " + presidents[i]);
//	printContent (i)
	}
}
//function printContent (i){
//	console.log ("value of i is:" + i);
//	console.log ("Value at Index is: " + presidents[i]);
//}

var stringOfNumbers;
stringOfNumbers = "";

 
for (i = 10; i < 21; i++){
	stringOfNumbers = (stringOfNumbers + i)
}
console.log (stringOfNumbers);

var evenNumberArray;
evenNumberArray = [];

for (i = 0; i < 50; i++){
	evenNum = (2 * i);
	evenNumberArray.push (evenNum);
}
console.log (evenNumberArray);


//same as above but using a function
function createEvenNumberArray(count) {
	var evenNumberArray;
	var i;
	var evenNumber;

	evenNumberArray = [];
	for (i = 0; i < count; i++) {
		evenNumber = 2 * i;
		evenNumberArray.push(evenNumber);

	}
}

var oopsArray;
oopsArray = ["turn", , "down" , , "for" , , "what"];

for (i = 0; i < oopsArray.length; i++){
	if (isOdd(i)) {
	oopsArray[i] = "nope";
	}
}	
function isOdd(number) {
	return number % 2 === 1
}
console.log (oopsArray);

for (i = oopsArray.length - 1;i >= 0; i--){
console.log (oopsArray[i]);

}


var isNapTime;
var napSchedule;
isNapTime = false
napSchedule = [false, false, true, false, true, true]

for (i=0; i < napSchedule.length; i++){
	nap(napSchedule[i])
}

function nap(schedule){
	if (schedule){
		//console.log ("ZzZzZzZz")
	}
	else {
		//console.log ("Gotta get to work!");
		isNapTime = true; 
	}
}
var copyOfValuesArray;
var valuesArray;
copyOfValuesArray = [];
valuesArray = [99, 66, 829, 1941, 8, 76];

copyArray(valuesArray, copyOfValuesArray)

//console.log(valuesArray);
//console.log(copyOfValuesArray);
function copyArray (originArray, destinationArray){
	for (i=0; i < originArray.length; i++){
		destinationArray.push(originArray[i]);
	}
}

var miscStorage;

miscStorage = [ [], "Carrots", 9, "Beets", {}, {name: "Todd B."}, "Mush" ]
//console.log (generateArrayOfStrings(miscStorage));

function generateArrayOfStrings(storage){
	var stringArray;

	stringArray = [];
	for (i = 0; i < storage.length; i++){
		if (typeof storage[i] === "string"){
			stringArray.push (storage[i]);
		}
	}
	return stringArray;
}
var currentClass;
currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];


function graduateAndSetNewClass(array){
	for (var i = 0; i < array.length; i++){
		console.log (array[i]);
		console.log(i);
		if (array[i].enrolled === true){
			console.log("enrolled equals true");
			array[i].graduated = true;
		} 
		else if (array[i].enrolled === false){
			array[i].enrolled = true;
			console.log("enrolled equals false");
		}	
	}
	return array;
}

console.log(graduateAndSetNewClass(currentClass));


















