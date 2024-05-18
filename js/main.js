var inputName = document.getElementById("inputName");
var inputPrice = document.getElementById("inputPrice");
var category = document.getElementById("category");
var Description = document.getElementById("Description");
var btnAdd = document.getElementById("btnAdd");

var content;
if (localStorage.content != null) {
    content = JSON.parse(localStorage.content);
} else {
    var content = [];
}

//add product

btnAdd.onclick = function () {

    var product = {
        name: inputName.value,
        price: inputPrice.value,
        category: category.value,
        Description: Description.value
    }

    content.push(product);
    display()
    localStorage.setItem("content", JSON.stringify(content));
    clearVlue()

}

//clear value

function clearVlue() {
    inputName.value = null;
    inputPrice.value = null;
    category.value = null;
    Description.value = null;
}
var table = document.getElementById("tbody");
function display() {
   var cartona = '';
   for(var i = 0;i <  content.length;i++){
      cartona+= `
      <tr>
              <th scope="row">${i + 1}</th>
              <td>${content[i].name}</td>
              <td>${content[i].price}</td>
              <td>${content[i].Description}</td>
              <td>${content[i].category}</td>
              <td> <button class="btn btn-outline-danger py-1" onclick="deleteItem(${i})">Delete</button></td>
              <td> <button class="btn btn-outline-primary py-1" onclick="updaeItem(${i})">Update</button></td>
             
          </tr>
      `
   }
   table.innerHTML = cartona;
}
display();

function deleteItem(i){
    content.splice(0,1);
    localStorage.setItem("content", JSON.stringify(content));
    display();
}
var count = document.getElementById("count");
count.innerHTML = `Products(${content.length})`;

function updaeItem(i) {
    inputName.value = content[i].name;
    inputPrice.value = content[i].price;
    category.value = content[i].category;
    Description.value = content[i].Description;
}
