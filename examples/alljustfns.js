

console.log('these are equal', a + b, add(a, b));
console.log('these are equal', a > b, gt(a, b));
console.log('these are equal', arr[i], getAtIndex(arr, i)); 

console.log('equal ->',
        obj.myProp.innerValue,
        obj['myProp']['innerValue'],
        getProperty(getProperty(obj, 'myProp'), 'innerValue'));


(a || b) && (c || d)
and(or(a, b), or(c, d))

obj.myMethod('hi');
getProperty(obj, 'myMethod')('hi');


console.log('hi');
getProperty(console, 'log')('hi');

var myVar;

myVar = 5;

function getProperty(obj, name) {
  return obj[name]; 
}

function setProperty(obj, name, val) {
  obj.name = val;
}


function add(a, b) {
  return a + b;
}

function gt(a, b) {
  return a > b;
}

function getAtIndex(arr, i) {
  return arr[i];
}

function setAtIndex(arr, i, val) {
  arr[i] = val;
}
