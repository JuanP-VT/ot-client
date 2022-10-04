export default async function AgregarProductoRequest(e,setMessage){
    //Extraemos los valores de los inputs
    const name = document.querySelector('#productName').value
    let categoria = document.querySelector('#productCategoria').firstChild.textContent
    const stock = document.querySelector('#productUnidadesDisponibles').value
    const precio = document.querySelector('#productPrecio').value
    //Client validation
    if(name.length < 3){
        setMessage('El nombre debe contener al menos 3 caracteres')
        return;
    }
         if(stock === ''){
        setMessage('Especifique la cantidad de unidades disponibles')
        return;
    }
    //por default si no se selecciona categoría el valor obtenido debe ser sin categoria
    if (categoria === 'Categoria'){
        categoria = 'sin categoria'
    }
     if(precio === ''){
        setMessage('Especifique el precio del producto')
        return;
    }
     if(precio<= 0){
        setMessage('El precio debe ser mayor a 0')
        return;
    }
    //Creamos nueva entry
    const newEntry = {name:name, categoria:categoria,unidadesDisponibles:stock,precio:precio}
    console.log(newEntry)
}