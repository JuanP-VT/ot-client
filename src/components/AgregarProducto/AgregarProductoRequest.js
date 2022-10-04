export default async function AgregarProductoRequest(e){
    //Extraemos los valores de los inputs
    const name = document.querySelector('#productName').value
    const categoria = document.querySelector('#productCategoria').firstChild.textContent
    const stock = document.querySelector('#productUnidadesDisponibles').value
    const precio = document.querySelector('#productPrecio').value
    //Creamos nueva entry
    const newEntry = {name:name, categoria:categoria,unidadesDisponibles:stock,precio:precio}
}