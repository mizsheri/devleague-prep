//declare 2 variables
var a
var b

a = 3
b = 5

console.log ("a", a);
console.log ("b", b);

sum = add(a, b)

function add(x,y){
	return a + b; 
}

console.log("1, add", a, b, sum);

difference = subtract(b,a)

function subtract(x,y){
	return b - a;
}

console.log(b + " from " + a + " is " + difference);

product = multiply(b,a)

function multiply(x,y){
	return b * a;
}

console.log(" the product of " + b + " and " + a + " is " + product);

function checkDifference(x){
	return "My football team lost " + x + " times this week";
}
console.log(checkDifference(difference));

function checkSum(x){
	return "I CAN ADD " + x + " NUMBERS";
}

console.log(checkSum(sum));

function checkProduct(){
	return product * difference;
}

console.log ("check product", checkProduct());

var a;
var b;
var c;
var d;
var howMany;

c = 2
d = addThenSubtract(a,b,c)

function addThenSubtract(x,y,z){
	var sum;
	var difference;
	sum = add(x,y);
	difference = subtract(sum, z);
	return difference;
}

console.log("addThenSubtract", 5, 4, 2, "=", difference);

howMany = addThenMultiply(a,b,c)

function addThenMultiply(f,g,h){
	return multiply(add(f,g),h);
}

console.log("addThenMultiply", a, b, c, "=", howMany);

function createFullName(firstname, lastname){
	return firstname + " " + lastname;
}

var MyFirstName = "Sheri"
var MyLastName = "Mizuha"
var fullName = createFullName(MyFirstName, MyLastName);

console.log( "fullname " + MyFirstName + " " + MyLastName);

var age

function verifyAge (age){
	return age > 20;
}

var someonesAge = 19;
var canDrinkBeer = verifyAge (someonesAge);

console.log ("verify age", someonesAge, "is ok", canDrinkBeer);

throwParty(canDrinkBeer)

function throwParty(oldEnough){
	if (oldEnough){
		console.log ("This Party will have an open bar")
	} else {
		console.log ("The Party will have tons of Cake")
	}
}


function eatFood(firstName, lastName, food){
	var fullName;
	fullName = createFullName(firstName, lastName);
    console.log(fullName + ' loves to eat ' + food + '!');
}
console.log("eatFood");
eatFood("John","Papa","Pizza");

repeater(3);

function repeater (num){
	var i;
	for (i=0; i < num; i++){
		if (canDrinkBeer){
			console.log ("Bacon Pancakes, makin' Bacon Pancakes...");
		} else {
			console.log ("let it go.... LET IT GOOOOOOoOoOoOoO...");
		}
	}
}
