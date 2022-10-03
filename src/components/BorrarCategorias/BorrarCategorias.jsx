import React, { useEffect } from 'react'
import {fetchAllCategorias} from '../../store/slices/CategoriasSlice/'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
const BorrarCategorias = () => {
  const {list} = useSelector(state => state.categorias)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllCategorias())
  },[dispatch])
  return (
   <>
   <Card.Group>
    {list.map((elem,index)=>(   <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={elem.imgUrl}
        />
        <Card.Header>{elem.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>))}
    </Card.Group>
   </>
  )
}

export default BorrarCategorias


