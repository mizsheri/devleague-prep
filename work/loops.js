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
		console.log ("ZzZzZzZz")
	}
	else {
		console.log ("Gotta get to work!");
		isNapTime = true; 
	}
}
var copyOfValuesArray;
var valesArray;
copyOfValuesArray = [];
valesArray = [99, 66, 829, 1941, 8, 76];

function valuesArray (originArray, destinationArray){
	for (i=0; i < originArray.length; i++){
		//destinationArray.push
	}
}






















