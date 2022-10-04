import React,{useEffect, useState} from 'react'
import { Button, Form, Message, Select,Label } from 'semantic-ui-react'
import {fetchAllCategorias} from '../../store/slices/CategoriasSlice'
import {useDispatch, useSelector} from 'react-redux'
import AgregarProductoRequest from './AgregarProductoRequest'

const AgregarProducto = () => {
  // Este hook es para guardar mensajes de acuerdo al estado del llenado del form
  const [UIMessage,setUIMessage] = useState('')
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
     <Form error success >
    <Form.Input label='Nombre del producto' placeholder='Nombre' id='productName'/>
    <Form.Field>
          <Label pointing='below'>Seleccione la categoría</Label>
    <Select placeholder='Categoria' options={selectList} id ='productCategoria'/>
    
    </Form.Field>
    <Form.Input label='Unidades disponibles' placeholder='Unidades disponibles' id='productUnidadesDisponibles' type='number'/>
    <Form.Input label='Precio' placeholder='Precio' id='productPrecio' type='number'/>
     <Message
      error
      header='Error'
      content={UIMessage}
    />
    <Button onClick={(e)=>AgregarProductoRequest(e,setUIMessage)}>Agregar</Button>
  </Form>
  )
}

export default AgregarProducto