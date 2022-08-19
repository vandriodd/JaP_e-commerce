//constante provisional que alberga el .json compartido en la letra de la entrega
const PRODUCTS_101_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

//array donde se cargarán los datos recibidos
let productsArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través de DOM
function showProductsList(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let cats_products = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="${cats_products.image}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                         <h4>${cats_products.name} - ${cats_products.currency} ${cats_products.cost}</h4> 
                         <p>${cats_products.description}</p> 
                        </div>
                        <small class="text-muted">${cats_products.soldCount} vendidos</small> 
                    </div>
                </div>
            </div>
        </div>
        `

        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }
}

/* 
-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección PRODUCTS_101_URL
-Se verifica el estado del objeto que devuelve, y si es correcto, se cargan los datos en productsArray
-Por último, se llama a showProductsList() pasándole por parámetro productsArray.products
*/

document.addEventListener("DOMContentLoaded", function() {
    getJSONData(PRODUCTS_101_URL).then(function(resultObj) {
        if (resultObj.status == "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray.products);
        }
    })
});