import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllProducts} from '../../store/slices/ProductsSlice'
import {fetchAllCategorias} from '../../store/slices/CategoriasSlice/'
import { Button, Card, CardGroup, Container, Header, Image, Input, Select,Label, Form, FormField, Grid } from 'semantic-ui-react'
import handleQuery from './handleQuery'
import EditarProductoRequest from './EditarProductoRequest'
import BorrarProductoRequest from './BorrarProductoRequest'
const EditarProducto = () => {
  //Este hook se usará para filtrar los productos por categoria, por default todos los productos se muestran
  const [Query,setQuery] = useState('todos')
  // Este hook se usara para renderizar el componente cunado se editen o borren elementos
  const [Update,setUpdate] = useState(0)
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
  // Agregamos manualmente la propiedad 'sin categoria' al select list
  const sincategoria = {key:999, value:'sin categoria', text:'sin categoria'}
  selectList.unshift(sincategoria)
  //Creamos una lista filtrando los elementos con la categoria seleccionada
  const filteredList = newList.filter((elem)=> elem.categoria === Query)
  console.log(filteredList)
  //Llamamos al Global State al renderizar el componente
  useEffect(()=>{
    dispatch(fetchAllProducts())
    dispatch(fetchAllCategorias())
    console.log('rerender')
  },[dispatch,Update])
  return (
  <Grid>
        <Header as='h1'>Catalogo de Productos</Header>
    <Container fluid className='searchContainer'>
    <Select placeholder='Categoria' options={selectList} id ='editProductCategoria'/>
    <Button onClick={()=>handleQuery(setQuery,setUpdate)} >Buscar</Button>
    </Container>
    {Query === 'todos'?newList.map((elem,index)=>(<Form key={index}>
  <Card >
          <Card.Content>
        <div id='editMsg'></div>
        <Image
          floated='right'
          size='mini'
          src={elem.icon?elem.icon.imgUrl:''}
        />
        <Form.Field>
        <Input type='text' defaultValue={elem.name}  size='small' label='Nombre' id='editName' />
        <Input type='number' defaultValue={elem.unidadesDisponibles}  size='small' label ='Stock' id='editUnidadesDisponibles'/>
        <Input type='number' defaultValue={elem.precio}  size='small' label ='Precio' id='editPrecio'/>
        </Form.Field>
        <Label>Categoría</Label>
        <Select placeholder={elem.categoria} options={selectList} id ='editProductCategoria' defaultValue={elem.categoria}  />
        <div className='ui two buttons'>
          <Button basic color='yellow' data-id={elem._id} onClick={(e)=>EditarProductoRequest(e,setUpdate)}>
            Editar
          </Button>
          <Button basic color='red' data-id={elem._id} onClick={(e)=>BorrarProductoRequest(e,setUpdate)}>
            Borrar
          </Button>
        </div>
      </Card.Content>
         </Card></Form>)):
         filteredList.map((elem,index)=>(<Form key={index}>
  <Card >
          <Card.Content>
        <div id='editMsg'></div>
        <Image
          floated='right'
          size='mini'
          src={elem.icon?elem.icon.imgUrl:''}
          key={index +'sl'}
        />
        <Form.Field >
        <Input type='text' defaultValue={elem.name}  size='small' label='Nombre' id='editName' key={`${elem.name}${index}s`}/>
        <Input type='number' defaultValue={elem.unidadesDisponibles}  size='small' label ='Stock' id='editUnidadesDisponibles' key={`${elem.unidadesDisponibles}${index}s`}/>
        <Input type='number' defaultValue={elem.precio}  size='small' label ='Precio' id='editPrecio' key={`${elem.precio}${index}s`}/>
        </Form.Field>
        <Label>Categoría</Label>
        <Select placeholder={elem.categoria} options={selectList} id ='editProductCategoria' defaultValue={elem.categoria} key={`${elem.categoria}${index}s`} />
        <div className='ui two buttons'>  
          <Button basic color='yellow' data-id={elem._id} onClick={(e)=>EditarProductoRequest(e,setUpdate)}>
            Editar
          </Button>
          <Button basic color='red' data-id={elem._id} onClick={(e)=>BorrarProductoRequest(e,setUpdate)}>
            Borrar
          </Button>
        </div>
      </Card.Content>
         </Card></Form>))}
         </Grid>)
}

export default EditarProducto