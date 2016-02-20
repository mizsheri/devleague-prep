window.onload = function(){
  addPersonNode ("Jason","myname");
  addPersonNode ("Joe","yourname");
  addPersonNode ("Victor","neighborname");
};
function addPersonNode (name,id){
  var bodyElem;
  var jasonNode;
  var spanElem;
  var divElem;
  bodyElem = document.body;
  divElem = document.createElement("div");
  spanElem = document.createElement("span");
  jasonNode = document.createTextNode(name);
  spanElem.appendChild (jasonNode);
  spanElem.id = id;
  divElem.appendChild (spanElem);
  bodyElem.appendChild (divElem);
}
 
  var yayNode;
  var divNestedElem;
  var spanDeeperNestedElem;
  var pSuperNextedElem;
  bodyElem = document.getElementById("body");
  divElem = document.createElement("div");
  spanElem = document.createElement("span");
  pElem = document.createElement ("p");
  yayNode = document.createTextNode("Yay");
