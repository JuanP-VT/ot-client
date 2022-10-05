export default async function BorrarProductoRequest(e,setUpdate){
    const target = e.target
    const id = target.getAttribute('data-id')
    const newEntry = {
        _id:id,
    }
  await fetch('https://ot-serverapi.herokuapp.com/products', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(newEntry)
});
//Obtenemos la respuesta de la API
setUpdate((state)=> state +1)
}