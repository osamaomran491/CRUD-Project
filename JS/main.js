var productslist 
localStorage.getItem("productslist") == null ? productslist = [] : productslist = (JSON.parse(localStorage.getItem("productslist")));
 showProducts(productslist)

var counter
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCateg");
var productDescription = document.getElementById("productDescription");

var saveBt= document.getElementById("saveBt");

function localStorageUpdate(){
    localStorage.setItem("productslist" , JSON.stringify(productslist))

}
function addProduct() {
    if (invalidName() | invalidPrice() | invalidCategory() | invalidDescription()) {
    var product = {
        name: productName.value,
        price: productPrice.value,
        categ: productCategory.value,
        des: productDescription.value,
    };
    productslist.push(product)
    localStorageUpdate()
    showProducts(productslist);
    invalidName();
    invalidPrice();
    invalidCategory();
    invalidDescription();
    clearInputs();
    saveBt.classList.add("d-none");
}
}
function  showProducts (productslist){
    var cartona =``
   for( var i = 0 ; i< productslist.length; i++){

   cartona += ` <tr>
    <td>${i}</td>
    <td>${productslist[i].newName ? productslist[i].newName : productslist[i].name}</td>
    <td>${productslist[i].price}</td>
    <td>${productslist[i].categ}</td>
    <td>${productslist[i].des}</td>
    <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
    <td><button onclick= "deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
   </tr>
`
   }
  document.getElementById("data").innerHTML = cartona;
}
function deleteProduct(index){
productslist.splice(index,1)
localStorageUpdate()
console.log(productslist);
showProducts(productslist);
}
function clearInputs(){
    productName.value= '';
    productPrice.value= '';
    productCategory.value= '';
    productDescription.value= '';
}
function updateProduct(index){
    productName.value=productslist[index].name
    productPrice.value=productslist[index].price
    productCategory.value=productslist[index].categ
    productDescription.value=productslist[index].des
    counter = index
    saveBt.classList.remove("d-none")
    console.log(counter);
    
}
function saveChanges(){
    productslist[counter].name=productName.value
    productslist[counter].price=productPrice.value
    productslist[counter].categ=productCategory.value
    productslist[counter].des=productDescription.value
    localStorageUpdate()
    showProducts(productslist)
    console.log(productslist);
    saveBt.classList.add("d-none")
    clearInputs()
}
function searchProduct(data){
    console.log(data);
    var newproductlist = []
    for(var i=0 ; i < productslist.length ; i++){
        var newData = data.toLowerCase()
        if(productslist[i].name.toLowerCase().includes(newData)){
            productslist[i].newName = productslist[i].name.toLowerCase().replaceAll(newData , `<span class ="text-danger">${newData}</span>`)
            newproductlist.push(productslist[i])
            console.log("founded" , productslist[i].name);
        }
        showProducts(newproductlist)
    }
}
function invalidName(){
    var regex = /[A-Za-z]/;
    if(regex.test(productName.value)){
        productName.style.border = "none"
        document.getElementById("invalidName").classList.add("d-none")
        return true;
    } else {
        productName.style.border = "solid 5px red"
        document.getElementById("invalidName").classList.remove("d-none")
        return false;
    }
}
function invalidPrice() {
    var regex = /[0-9]/;
   
     if (regex.test(productPrice.value)) {
       productPrice.style.border= "none"
       document.getElementById("invalidPrice").classList.add("d-none")
       return true;
     } else {
   
       productPrice.style.border= "solid 5px red"
       document.getElementById("invalidPrice").classList.remove("d-none")
       return false;
     } 
 } 
 
   function invalidCategory() {
     var regex = /[A-Za-z]/;
    
      if (regex.test(productCategory.value)) {
        productCategory.style.border= "none"
        document.getElementById("invalidCategory").classList.add("d-none")
        return true;
      } 
      else {
    
        productCategory.style.border= "solid 5px red"
        document.getElementById("invalidCategory").classList.remove("d-none")
       return false;
      } 
 } 
 
 function invalidDescription() {
    var regex = /[A-Za-z]/;
   
     if (regex.test(productDescription.value)) {
       productDescription.style.border= "none"
       document.getElementById("invalidDescription").classList.add("d-none")
       return true;
     } else {
   
       productDescription.style.border= "solid 5px red"
       document.getElementById("invalidDescription").classList.remove("d-none")
       return false;
     }
 
   } 
