window.addEventListener ("load",init);

function init(){
	var childClassElems;
	var childClassElem;
	var i;

  // For each element with the class 'child'...
	// Add an event listener on the 'click' event
  childClassElems = getChildClassElements();

	/* YOUR LOOP CODE HERE */
	for (i = 0; i < childClassElems.length; i++){
		childClassElem = childClassElems[i];
		registerEventListener(childClassElem);
	}

}
	// When that event occurs toggle the  CSS styles which will show the secret
	// toy element. (Inspect the .css file to figure out what class this is.)
function registerEventListener(childClassElem) {

    var secretToyElem;
	var secretToyClassName;
	var secretToyToggleClassName = "show";

		/* YOUR VARIABLE ASSIGNMENT CODE HERE */

		childClassElem.registerEventListener("click",handleClick);

		secretToyElem = childClassElem.children[1];

		childClassElem.addEventListener("click", handleClick);

		function handleClick() {
			var secretToyElem;

			secretToyElem = childClassElem.children[1];
			secretToyElem.classList.toggle("show");
		 }
}
function getChildClassElements() {
		/* YOUR ELEMENTS RETRIEVAL CODE HERE */
		return document.getElementById
}

	
	
