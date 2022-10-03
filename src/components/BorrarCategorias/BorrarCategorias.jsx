import React, { useEffect } from 'react'
import {fetchAllCategorias} from '../../store/slices/CategoriasSlice/'
import {useDispatch, useSelector} from 'react-redux'
const BorrarCategorias = () => {
  const {list} = useSelector(state => state.categorias)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllCategorias())
  },[dispatch])
  return (
    <div>BorrarCategorias</div>
  )
}

export default BorrarCategorias