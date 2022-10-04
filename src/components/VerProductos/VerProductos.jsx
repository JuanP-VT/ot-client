import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllProducts, setProductsList } from '../../store/slices/ProductsSlice'
import {fetchAllCategorias} from '../../store/slices/CategoriasSlice/'
import { Button, Card, CardGroup, Image } from 'semantic-ui-react'
const VerProductos = () => {
  const dispatch = useDispatch();
   //Global App state para el listado de los productos
  const {list:Productlist} = useSelector(state => state.products)
  const {list:Categoriaslist} = useSelector(state => state.categorias)
  //Creamos una nueva lista agregando la url de la imagen de la categoria a la lista de productos
  const newList = Productlist.map((elem)=>{
    const target = Categoriaslist.filter(cat => cat.name === elem.categoria)[0]
    return {_id:elem._id,
      name:elem.name,
      categoria:elem.categoria,
      unidadesDisponibles:elem.unidadesDisponibles,
      precio:elem.precio,
      icon:target
    }
  })
  console.log(newList)
  useEffect(()=>{
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategorias())
  },[dispatch])
  return (
<CardGroup>
   {newList.map((elem,index)=>( <Card key={index}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={elem.icon?elem.icon.imgUrl:''}
        />
        <Card.Header>{elem.name}</Card.Header>
        <Card.Meta>{elem.categoria}</Card.Meta>
        <Card.Description>
          <p><strong>Unidades Disponibles</strong>:  {elem.unidadesDisponibles}</p>
          <p><strong>Precio</strong>:  {elem.precio}$</p>
        </Card.Description>
      </Card.Content>
         </Card>))}
  </CardGroup>
  )
}

export default VerProductos