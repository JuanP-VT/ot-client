export default async function EditarProductoRequest(e, setUpdate) {
  const target = e.target;
  const id = target.getAttribute("data-id");
  const parent = target.parentNode.parentNode;
  const nombre = parent.querySelector("#editName").value;
  const unidadesDisponibles = parent.querySelector(
    "#editUnidadesDisponibles"
  ).value;
  const precio = parent.querySelector("#editPrecio").value;
  const categoria = parent.querySelector("#editProductCategoria").firstChild
    .textContent;
  const newEntry = {
    _id: id,
    name: nombre,
    categoria: categoria,
    unidadesDisponibles: parseInt(unidadesDisponibles),
    precio: parseInt(precio),
  };
  console.log(newEntry);
  const response = await fetch("https://ot-serverapi.herokuapp.com/products", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEntry),
  });
  //Obtenemos la respuesta de la API
  const res = await response.json();
  console.log(res);
  //Mostrar mensage de feedback
  const editDiv = parent.querySelector("#editMsg");
  editDiv.textContent = "Operacion Exitosa!";
  setTimeout(() => {
    editDiv.textContent = "";
  }, 2000);
  setUpdate((state) => state + 1);
}
