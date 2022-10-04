import React,{useEffect} from 'react'
import { Button, Form, Message, Select,Label } from 'semantic-ui-react'
import {fetchAllCategorias} from '../store/slices/CategoriasSlice'
import {useDispatch, useSelector} from 'react-redux'
import AgregarProductoRequest from './AgregarProductoRequest'

const AgregarProducto = () => {
    //Global App state para el listado de las categorías
  const {list} = useSelector(state => state.categorias)
  // El selector de semantic ui requiere un array de objectos con las propiedades key, value y text
  const selectList = list.map((elem,index)=>{
    return {key:index, value:elem.name, text:elem.name}
  })
    const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllCategorias())
  },[dispatch])
  return (
     <Form error required success >
    <Form.Input label='Nombre del producto' placeholder='Nombre' id='productName'/>
    <Form.Field>
          <Label pointing='below'>Seleccione la categoría</Label>
    <Select placeholder='Categoria' options={selectList} id ='productCategoria'/>
    </Form.Field>
    <Form.Input label='Unidades disponibles' placeholder='Unidades disponibles' id='productUnidadesDisponibles' type='number'/>
    <Form.Input label='Precio' placeholder='Precio' id='productPrecio' type='number'/>
    <Button onClick={(e)=>AgregarProductoRequest(e)}>Agregar</Button>
  </Form>
  )
}

export default AgregarProducto