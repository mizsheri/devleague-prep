var products;

products =
  [ { name: "Lusicious Jello Mix"
    , description:
        [ "Very Elegant"
        , "Trending item"
        , "Come in Purple"
        ]
    , price: 80.65 
    , quantity: 1
    }
  , { name: "Tarnished Standing Desk"
    , description: ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99
    , quantity: 3
    }
  , { name: "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44}
  , { name: "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 }
  , { name: "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 }
  , { name: "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 }
  ];

window.addEventListener('load', initialize);

function initialize() {
  setupShoppingCart();
  setupSubtotalUpdateButton();
}

function setupShoppingCart() {

  var shoppingCartElem;
  var i;

  shoppingCartElem = document.getElementById('shoppingCart');

  for (i = 0; i < products.length; i++) {
    addItemToCart(products[i], shoppingCartElem);
  }
}

function setupSubtotalUpdateButton() {
  var buttonElem;
  buttonElem = document.getElementById('subtotalButton');
  buttonElem.addEventListener('click', updateSubtotal);
}

function updateSubtotal() {
  var subtotalElem;
  subtotalElem = document.getElementById('subtotal');
  subtotalElem.textContent = '$' + getSubtotal();
}

function getSubtotal() {
  var subtotal;
  var i;
  var product;
  subtotal = 0;
  for (i = 0; i < products.length; i++) {
    product = products[i];
    subtotal += (product.price * product.quantity);
  }
  return subtotal;
}

function addItemToCart(product, parentElem) {
  
  var productElem;
  var nameElem;
  var priceElem;
  var textNode;

  productElem = document.createElement('li');
  productElem.classList.add('list-group-item');
  
  nameElem = document.createElement('span');
  textNode = document.createTextNode(product.name);
  nameElem.appendChild(textNode);
  productElem.appendChild(nameElem);

  //descElem = document.createElement('div');
  

  priceElem = document.createElement('div');
  textNode = document.createTextNode('$' + product.price);
  priceElem.appendChild(textNode);
  priceElem.classList.add('pull-right');
  productElem.appendChild(priceElem);

  addQuantityDropdown(productElem, product);

  parentElem.appendChild(productElem);
}

function addQuantityDropdown(parentElem, product) {
  var dropdownElem;
  var quantityLimit = 8;
  var i;
  var optionElem;

  if (product.quantity === undefined) {
    product.quantity = 0;
  }

  dropdownElem = document.createElement('select');
  dropdownElem.classList.add('pull-right');

  for (i = 0; i < quantityLimit; i++) {
    optionElem = document.createElement('option');
    optionElem.value = i; 
    optionElem.textContent = i;
    if (i === product.quantity) {
      optionElem.selected = true;
    }
    dropdownElem.appendChild(optionElem);
  }

  setupQuantityChangeListener(dropdownElem, product);

  parentElem.appendChild(dropdownElem);
  
}

function setupQuantityChangeListener(selectElem, product) {

  selectElem.addEventListener('change', updateQuantity);

  function updateQuantity() {
    var updatedValue;
    updatedValue = parseInt(selectElem.value);
    product.quantity = updatedValue;
  }
}

