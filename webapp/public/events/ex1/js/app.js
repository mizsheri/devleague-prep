window.onload = function () {

  var listItemElems;
  var i;
  var listItemElem;

	listItemElems = getNavMenuListItems();

  // For each li element inside of the nav menu 
  //register an event listener on 'click' events.
  // Your event listener should be the handleClick function implemented below.

  /* YOUR LOOP CODE HERE */
  for (i = 0; i < listItemElems.length; i++){
    listItemElem = listItemElems[i];
    registerEventListener(listItemElem);
  }
  

}
function getNavMenuListItems(){
    var navMenuElem;
    navMenuElem = document.getElementById("navMenu");
    return navMenuElem.children;
}
    // This event should log to the console the text inside of the <a> tag.
function registerEventListener (listItemElem) {
    var anchorElem;
    anchorElem = listItemElem.children[0];

    /* YOU CAN FIND THE <a> TAG HERE */
    listItemElem.addEventListener("click", handleClick);

    function handleClick() {
      /* YOUR 'click' EVENT LOGIC HERE */
      //var = anchorText;
      anchorText = listItemElem.firstElementChild.textContent;
      console.log (anchorElem.textContent);
    }
}