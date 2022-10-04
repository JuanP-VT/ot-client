import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import AgregarCategoria from './components/AgregarCategoria/AgregarCategoria'
import BorrarCategorias from './components/BorrarCategorias/BorrarCategorias';
import AgregarProducto from './components/AgregarProducto/AgregarProducto'
import VerProductos from './components/VerProductos/VerProductos';
//redux
import {Provider} from 'react-redux'
import store from './store'
import { Container } from 'semantic-ui-react';
import EditarProductos from './components/EditarProductos/EditarPoductos';
function App() {
  return (
    <div className="App">
        <TopNav/>
        <Provider store={store}>
          <Container fluid className='mainContainer'>
        <Routes>

          <Route path='/' element={<VerProductos/>}/>
          <Route path='/addcategoria' element={<AgregarCategoria/>}/>
          <Route path='/borrarcategoria' element={<BorrarCategorias/>}/>
          <Route path='/addproducto' element={<AgregarProducto/>}/>
          <Route path='/editproducto' element={<EditarProductos/>}></Route>
          </Routes>
          </Container>
        </Provider>
    </div>
  );
}

export default App;
