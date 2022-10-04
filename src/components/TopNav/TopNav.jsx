import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
const TopNav = () => {
    const [activeItem, setActiveItem] = useState('editorials')
    const handleItemClick = (e,{name})=> setActiveItem(name)
  return (
     <Menu inverted>
              <Menu.Item
          name='Ver Productos'
            active={activeItem === 'Ver Productos'}
          onClick={handleItemClick}
                     as={Link} 
         to ='/'
        >
          Ver Productos
        </Menu.Item>
        <Menu.Item
          name='Agregar Categoria'
         as={Link} 
         to ='/addcategoria'
             active={activeItem === 'Agregar Categoria'}
          onClick={handleItemClick}
        >
          Agregar Categoría
        </Menu.Item>

        <Menu.Item
          name='Borrar Categoria'
             active={activeItem === 'Borrar Categoria'}
          onClick={handleItemClick}
           as={Link} 
         to ='/borrarcategoria'
        >
          Borrar Categoría
        </Menu.Item>

        <Menu.Item
          name='Agregar Articulo'
            active={activeItem === 'Agregar Articulo'}
          onClick={handleItemClick}
                     as={Link} 
         to ='/addproducto'
        >
          Agregar Producto
        </Menu.Item>
      </Menu>
  )
}

export default TopNav