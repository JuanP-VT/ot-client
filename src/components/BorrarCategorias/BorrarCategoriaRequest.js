export default async function BorrarCategoriaRequest(e,id,setUpdate){
   const entry = {_id:id}
   const response = await fetch('https://ot-serverapi.herokuapp.com/categorias', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(entry)
});
const result = await response.json();
console.log(result)
    setUpdate((state)=> state +1)
}