// LAST MODIFIED: 4/20/2022

// DOM elements
let tableBody = document.getElementById('tableBody');

// Create contact-cards dynamically
function createTableRow(number,name,details,price,evidencia,link){
 let tableRow = document.createElement('tr'),
     itemNumber = document.createElement('td'),
     itemName = document.createElement('td'),
     itemDetails = document.createElement('td'),
     itemPrice = document.createElement('td'),
     itemEvidencia = document.createElement('td'),
     itemLink = document.createElement('td');

 // Item's data labels
 itemNumber.setAttribute("data-label", "N°");
 itemName.setAttribute("data-label", "Item");
 itemDetails.setAttribute("data-label", "Detalles");
 itemPrice.setAttribute("data-label", "Precio");
 itemEvidencia.setAttribute("data-label", "Evidencia");
 itemLink.setAttribute("data-label", "Link");

 // item's data
 itemNumber.innerHTML = number;
 itemName.innerHTML = name;
 itemDetails.innerHTML = details;
 itemPrice.innerHTML = `$ ${price}`;
 itemEvidencia.innerHTML = `<img src="${evidencia}" alt="Precio Original de ${name}">`;
 itemLink.innerHTML = `<button class="btn dark1"><a href="${link}" target="_blank" rel=”noopener noreferrer”">Ver</a></button>`;


// Create row cells
 tableRow.appendChild(itemNumber);
 tableRow.appendChild(itemName);
 tableRow.appendChild(itemDetails);
 tableRow.appendChild(itemPrice);
 tableRow.appendChild(itemEvidencia);
 tableRow.appendChild(itemLink);

 tableBody.appendChild(tableRow);
}

// Populate table body
function updateTable(productList){

for(let i = 0; i < productList.length;i++){
 let number = i+1,
     name = productList[i].item,
     details = productList[i].detalles,
     price = productList[i].precio,
     evidencia = productList[i].evidencia,
     link = productList[i].link;
 createTableRow(number,name,details,price,evidencia,link);
 tableBody.children[i].classList.add('contact-card-in');
}
}