import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import AgregarCategoria from './components/AgregarCategoria/AgregarCategoria'
import BorrarCategorias from './components/BorrarCategorias/BorrarCategorias';
function App() {
  return (
    <div className="App">
        <TopNav/>
        <Routes>
          <Route path='/addcategoria' element={<AgregarCategoria/>}/>
          <Route path='/borrarcategoria' element={<BorrarCategorias/>}/>
          </Routes>
    </div>
  );
}

export default App;
