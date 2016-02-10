loopToNumber (4);
showEachValue (["cat","bird","dog","fish"])
console.log (createArrayFromString ("apple"))

function isNumberGreaterThan (first, second){
	if (first > second){
		return true;
	} else {
		return false;
	}
}


function isTrue (val){
	if (val){
		return val === true;
	}
}

function isFalse (val){
	if (val){
		return val === false;
	}
}	

function isEqual (firstWord, secondWord){
	if (firstWord === secondWord){
		return ("AWWWWWRIGHT");
	} else {
		return ("Y U NO MATCH!");
	}
}

function isNotEqual (firstWord, secondWord){
	if (firstWord !== secondWord){
		return ("AWWWWWRIGHT");
	} else {
		return ("Y U MATCH");
	}
}

function doubleEquals (first, second){
	return first && second;
}
function totalOver30 (first, second, third){
	return (first + second + third) > 30;
}

function totalUnderWhat(first,second,third,fourth){
	return (first + second + third) < fourth;
}

function loopToNumber (limit){
	for (var i = 0; i < limit; i ++){
		console.log(i);
	}
}
		
function showEachValue (words){
	var i;
	var j;
	var characters;
	for (i = 0; i < words.length; i++){
		characters=words[i];
		for (j=0;j< characters.length; j++){
			console.log (characters[j]);
		}
	}
}

function createArrayFromString (word){
	var i;
	var character;
	var arr;
	arr = [];
	for (i = 0; i < word.length; i++){
		character=word[i];
		if (character !== "A" && character !== "a"){
			arr.push (character)
		} 
	}
	return arr;
}
function greatSummator (num){
	var i;
	var arr;
	for (i = 0; i < num; i++){
		
	}
}


