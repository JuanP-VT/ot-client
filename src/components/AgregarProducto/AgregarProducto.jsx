import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Message,
  Select,
  Label,
  Header,
} from "semantic-ui-react";
import { fetchAllCategorias } from "../../store/slices/CategoriasSlice";
import { useDispatch, useSelector } from "react-redux";
import AgregarProductoRequest from "./AgregarProductoRequest";
import { useNavigate } from "react-router-dom";
const AgregarProducto = () => {
  //Navigate hook
  const navigate = useNavigate();
  // Este hook es para guardar mensajes de acuerdo al estado del llenado del form
  const [UIMessage, setUIMessage] = useState("");
  //Global App state para el listado de las categorías
  const { list } = useSelector((state) => state.categorias);
  // El selector de semantic ui requiere un array de objectos con las propiedades key, value y text
  const selectList = list.map((elem, index) => {
    return { key: index, value: elem.name, text: elem.name };
  });
  // Al select list le agregamos una opcion más llamada sin categoria
  const sinCategoria = {
    key: 999,
    value: "sin categoria",
    text: "sin categoria",
  };
  selectList.push(sinCategoria);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategorias());
  }, [dispatch]);
  return (
    <>
      <Header as="h1">Agregar Productos</Header>
      <Form error success>
        <Form.Input
          label="Nombre del producto"
          placeholder="Nombre"
          id="productName"
        />
        <Form.Field>
          <Label pointing="below">Seleccione la categoría</Label>
          <Select
            placeholder="Categoria"
            options={selectList}
            id="productCategoria"
          />
        </Form.Field>
        <Form.Input
          label="Unidades disponibles"
          placeholder="Unidades disponibles"
          id="productUnidadesDisponibles"
          type="number"
        />
        <Form.Input
          label="Precio"
          placeholder="Precio"
          id="productPrecio"
          type="number"
        />
        {UIMessage !== "" && UIMessage !== "succes" ? (
          <Message error header="Error" content={UIMessage} />
        ) : (
          ""
        )}
        {UIMessage === "succes" ? (
          <Message success header="Exito" content="Producto agregado!" />
        ) : (
          ""
        )}
        <Button
          onClick={(e) => AgregarProductoRequest(e, setUIMessage, navigate)}
        >
          Agregar
        </Button>
      </Form>
    </>
  );
};

export default AgregarProducto;
