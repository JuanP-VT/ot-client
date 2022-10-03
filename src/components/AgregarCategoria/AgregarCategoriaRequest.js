// La funcion toma los datos del input y arma el objecto para mandarlo como post request al endpoint
// Dependiendo del resultado guarda una respuesta en el estado interno del componente para mostrarlo en la UI

async function AgregarCategoriaRequest(e,navigate,setMessage){
    e.preventDefault()
   //Select inputs
   const newCategoria = document.querySelector('#categoriaName').value
   const imgUrl = document.querySelector('#imgUrl').value
   // Validacion desde el cliente
   // Categoria debe ser al menos 3 caracteres
   if (newCategoria.length < 3){
    setMessage('La categoría debe contener almenos 3 caracteres')
    return;
   }
   const entry = {name:newCategoria, imgUrl:imgUrl}
   const response = await fetch('https://ot-serverapi.herokuapp.com/categorias', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(entry)
});
const result = await response.json();
const message = result.res
// Guardamos la respuesta de la API en el state local para mostrar el resultado
    if (message ==='La categoria ya está en la base de datos'){
        setMessage('La categoria ya está en la base de datos')
        return;
    }
    // Si no hay errores redireccionamos.
    setMessage('succes')
    setTimeout(() => { navigate('/reviews') }, 2000);

}

export default AgregarCategoriaRequest

