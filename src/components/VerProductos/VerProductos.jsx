import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllProducts } from '../../store/slices/ProductsSlice'


const VerProductos = () => {
   //Global App state para el listado de los productos
  const {list} = useSelector(state => state.categorias)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[dispatch])
  return (
    <div>VerProductos</div>
  )
}

export default VerProductos