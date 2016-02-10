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

