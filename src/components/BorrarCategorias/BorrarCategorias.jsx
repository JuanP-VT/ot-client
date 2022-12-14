import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Header, Image } from "semantic-ui-react";
import { fetchAllCategorias } from "../../store/slices/CategoriasSlice/";
import BorrarCategoriaRequest from "./BorrarCategoriaRequest";
const BorrarCategorias = () => {
  //Global App state para el listado de las categorías
  const { list } = useSelector((state) => state.categorias);
  // Este hook se usara para re-renderizar el componente cunado se borren elementos
  const [Update, setUpdate] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategorias());
  }, [dispatch, Update]);
  return (
    <>
      <Header as="h1">Borrar Categoría</Header>
      {list.length > 0 ? (
        <Card.Group>
          {list.map((elem, index) => (
            <Card key={index}>
              <Card.Content>
                <Image floated="right" size="mini" src={elem.imgUrl} />
                <Card.Header>{elem.name}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    basic
                    color="red"
                    onClick={(e) =>
                      BorrarCategoriaRequest(e, elem._id, setUpdate)
                    }
                  >
                    Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      ) : (
        <div className="highlight">No hay categorías registradas</div>
      )}
    </>
  );
};

export default BorrarCategorias;
