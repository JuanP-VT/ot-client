import React, { useState } from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import AgregarCategoriaRequest from "./AgregarCategoriaRequest";
const AgregarCategoria = () => {
  const [ApiRes, setApiRes] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Header as="h1">Agreegar Categoría</Header>
      <Form error required success>
        <Form.Input
          label="Categoria"
          placeholder="Categoría"
          id="categoriaName"
        />
        <Form.Input label="imgUrl" placeholder="Image Url" id="imgUrl" />
        {ApiRes !== "" && ApiRes !== "succes" ? (
          <Message error header="Error" content={ApiRes} />
        ) : (
          ""
        )}

        {ApiRes === "succes" ? (
          <Message
            success
            header="Exito"
            content="Categoría agregada con éxito"
          />
        ) : (
          ""
        )}
        <Button
          type="submit"
          onClick={(e) => AgregarCategoriaRequest(e, navigate, setApiRes)}
        >
          Agregar
        </Button>
      </Form>
    </>
  );
};

export default AgregarCategoria;
