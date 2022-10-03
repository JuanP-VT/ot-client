import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
const TopNav = () => {
    const [activeItem, setActiveItem] = useState('editorials')
    const handleItemClick = (e,{name})=> setActiveItem(name)
  return (
     <Menu inverted>
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
             active={activeItem === 'reviews'}
          onClick={handleItemClick}
           as={Link} 
         to ='/borrarcategoria'
        >
          Borrar Categoría
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
          onClick={handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
  )
}

export default TopNav