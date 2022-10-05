export default async function AgregarProductoRequest(e, setMessage, navigate) {
  //Extraemos los valores de los inputs
  const name = document.querySelector("#productName").value;
  let categoria =
    document.querySelector("#productCategoria").firstChild.textContent;
  const stock = document.querySelector("#productUnidadesDisponibles").value;
  const precio = document.querySelector("#productPrecio").value;
  //Client validation
  if (name.length < 3) {
    setMessage("El nombre debe contener al menos 3 caracteres");
    return;
  }
  if (stock === "") {
    setMessage("Especifique la cantidad de unidades disponibles");
    return;
  }
  //por default si no se selecciona categoría el valor obtenido debe ser sin categoria
  if (categoria === "Categoria") {
    categoria = "sin categoria";
  }
  if (precio === "") {
    setMessage("Especifique el precio del producto");
    return;
  }
  if (precio <= 0) {
    setMessage("El precio debe ser mayor a 0");
    return;
  }
  // Server Validation
  //Creamos nueva entry
  const newEntry = {
    name: name,
    categoria: categoria,
    unidadesDisponibles: stock,
    precio: precio,
  };
  const response = await fetch("https://ot-serverapi.herokuapp.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newEntry),
  });
  //Obtenemos la respuesta de la API
  const { res } = await response.json();
  if (res === "El producto ya está en la base de datos") {
    setMessage("El producto ya está en la base de datos");
    return;
  }
  // Despues de  toda la validacion retornamos mensage de exito y redireccionamos
  setMessage("succes");
  setTimeout(() => {
    navigate("/");
  }, 2000);
}
