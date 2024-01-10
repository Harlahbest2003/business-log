// function addItem() {
//     // Get input values
//     var itemName = document.getElementById('itemName').value;
//     var quantityInStore = parseInt(document.getElementById('quantityInStore').value) || 0;
//     var quantitySold = parseInt(document.getElementById('quantitySold').value) || 0;
//     var quantityBought = parseInt(document.getElementById('quantityBought').value) || 0;
//     var price = parseFloat(document.getElementById('price').value) || 0;
  
//     // Calculate total quantity
//     var totalQuantity = quantityInStore + quantityBought - quantitySold;
  
//     // Create an object to store item data
//     var itemData = {
//       itemName: itemName,
//       quantityInStore: quantityInStore,
//       quantitySold: quantitySold,
//       quantityBought: quantityBought,
//       totalQuantity: totalQuantity,
//       price: price
//     };
  
//     // Retrieve existing data from local storage or initialize an empty array
//     var storedItems = JSON.parse(localStorage.getItem('items')) || [];
  
//     // Add the new item data to the array
//     storedItems.push(itemData);
  
//     // Save the updated array back to local storage
//     localStorage.setItem('items', JSON.stringify(storedItems));
  
//     // Create a new row in the table
//     var table = document.getElementById('itemBody');
//     var newRow = table.insertRow(table.rows.length);
  
//     // Insert cells with input values
//     var cell1 = newRow.insertCell(0);
//     cell1.innerHTML = itemName;
  
//     var cell2 = newRow.insertCell(1);
//     cell2.innerHTML = quantityInStore;
  
//     var cell3 = newRow.insertCell(2);
//     cell3.innerHTML = quantitySold;
  
//     var cell4 = newRow.insertCell(3);
//     cell4.innerHTML = quantityBought;
  
//     var cell5 = newRow.insertCell(4);
//     cell5.innerHTML = totalQuantity;
  
//     var cell6 = newRow.insertCell(5);
//     cell6.innerHTML = price;
//   }










// Retrieve existing data from local storage or initialize an empty array
var storedItems = JSON.parse(localStorage.getItem('items')) || [];

// Function to display items in the table
function displayItems() {
  var table = document.getElementById('itemBody');
  // Clear existing table content
  table.innerHTML = '';

  // Loop through stored items and populate the table
  storedItems.forEach(function (itemData) {
    var newRow = table.insertRow(table.rows.length);

    // Insert cells with item data
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = itemData.itemName;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = itemData.quantityInStore;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = itemData.quantitySold;

    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = itemData.quantityBought;

    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = itemData.totalQuantity;

    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = itemData.price;
  });
}

// Initial display when the page loads
displayItems();

// Function to add a new item
function addItem() {
  // Get input values
  var itemName = document.getElementById('itemName').value;
  var quantityInStore = parseInt(document.getElementById('quantityInStore').value) || 0;
  var quantitySold = parseInt(document.getElementById('quantitySold').value) || 0;
  var quantityBought = parseInt(document.getElementById('quantityBought').value) || 0;
  var price = parseFloat(document.getElementById('price').value) || 0;

  // Calculate total quantity
  var totalQuantity = quantityInStore + quantityBought - quantitySold;

  // Create an object to store item data
  var itemData = {
    itemName: itemName,
    quantityInStore: quantityInStore,
    quantitySold: quantitySold,
    quantityBought: quantityBought,
    totalQuantity: totalQuantity,
    price: price
  };

  // Add the new item data to the array
  storedItems.push(itemData);

  // Save the updated array back to local storage
  localStorage.setItem('items', JSON.stringify(storedItems));

  // Display the updated items in the table
  displayItems();
}