import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import AgregarCategoria from './components/AgregarCategoria/AgregarCategoria'
import BorrarCategorias from './components/BorrarCategorias/BorrarCategorias';
import AgregarProducto from './components/AgregarProducto/AgregarProducto'
//redux
import {Provider} from 'react-redux'
import store from './store'
import VerProductos from './components/VerProductos/VerProductos';
function App() {
  return (
    <div className="App">
        <TopNav/>
        <Provider store={store}>
        <Routes>
          <Route path='/' element={<VerProductos/>}/>
          <Route path='/addcategoria' element={<AgregarCategoria/>}/>
          <Route path='/borrarcategoria' element={<BorrarCategorias/>}/>
          <Route path='/addproducto' element={<AgregarProducto/>}/>
          </Routes>
        </Provider>
    </div>
  );
}

export default App;
