export default async function EditarProductoRequest(e){
    const target = e.target
    const id = target.getAttribute('data-id')
    const parent = target.parentNode.parentNode
    const nombre = parent.querySelector('#editName').value
    const unidadesDisponibles = parent.querySelector('#editUnidadesDisponibles').value
    const precio = parent.querySelector('#editPrecio').value
    const categoria = parent.querySelector('#editProductCategoria').firstChild.textContent
    const newEntry = {
        _id:id,
        name:nombre,
        categoria:categoria,
        unidadesDisponibles:parseInt(unidadesDisponibles),
        precio:parseInt(precio)
    }
    console.log(newEntry)
    
}