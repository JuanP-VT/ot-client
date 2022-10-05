export default async function BorrarCategoriaRequest(e, id, setUpdate) {
  const entry = { _id: id };
  fetch("https://ot-serverapi.herokuapp.com/categorias", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(entry),
  });
  setUpdate((state) => state + 1);
}
