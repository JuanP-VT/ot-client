import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllProducts} from '../../store/slices/ProductsSlice'
import {fetchAllCategorias} from '../../store/slices/CategoriasSlice/'
import { Button, Card, CardGroup, Container, Image, Select } from 'semantic-ui-react'
import handleQuery from './handleQuery'
const VerProductos = () => {
  //Este hook se usará para filtrar los productos por categoria, por default todos los productos se muestran
  const [Query,setQuery] = useState('todos')
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
    // El selector de semantic ui requiere un array de objectos con las propiedades key, value y text
  const selectList = Categoriaslist.map((elem,index)=>{
    return {key:index, value:elem.name, text:elem.name}
  })
  // Agregamos manualmente la propiedad 'todos' al select list
  const todos = {key:999, value:'todos', text:'todos'}
  selectList.unshift(todos)
  //Creamos una lista filtrando los elementos con la categoria seleccionada
  const filteredList = newList.filter((elem)=> elem.categoria === Query)
  //Llamamos al Global State al renderizar el componente
  useEffect(()=>{
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategorias())
  },[dispatch])
  return (
    <><Container fluid className='searchContainer'>
    <Select placeholder='Categoria' options={selectList} id ='productSelect'/>
    <Button onClick={()=>handleQuery(setQuery)} >Buscar</Button>
    </Container>
    <CardGroup>
   {Query==='todos'?newList.map((elem,index)=>( <Card key={index}>
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
         </Card>)):
         filteredList.map((elem,index)=>( <Card key={index}>
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
         </Card>))
         }
         {filteredList.length <= 0 &&Query!=='todos' ?<Container>No hay productos registrados con esta categoria</Container>:''}
  </CardGroup></>
  )
}

export default VerProductos