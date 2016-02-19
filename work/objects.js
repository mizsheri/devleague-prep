//Objects

var plainBox;

plainBox = {};

plainBox.color = "pink";
plainBox.size = 11;
plainBox.contents = [];


var stockCar;
 
 stockCar = {
 	model: "Ford",
 	year: 2011,
 	automaticTransmission: true,
 	driver: null,
 	passengers: [],
 }

var plainPerson;

plainPerson = {};

plainPerson = buildPerson(plainPerson,"bob",21);
console.log (plainPerson);
console.log (plainPerson.name);
console.log (plainPerson.age);

function buildPerson(person, nameString, age){
	person.name = nameString;
	person.age = age;
	return person;
}

var arrayOfObjects;

arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];
printProcessedOrders (arrayOfObjects);

function printProcessedOrders(orders){
	var i;
	var order;
	for (i = 0; i < orders.length; i++){
		order = orders[i];
		console.log ("=====");
		console.log (order.id);
		console.log (order.date);
		console.log (order.total);
	}
}

var newObject;

newObject = {
  a: ,
  b: ,
  result:
};

myModifiedObj = addObjectProps(myObj);
console.log(myModifiedOf)

function addObjectProps(obj) {
  var sum;

  sum = obj.a + abj.b;
  obj.result = sum;

  return obj;
}

