import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import AgregarCategoria from './components/AgregarCategoria/AgregarCategoria'
import BorrarCategorias from './components/BorrarCategorias/BorrarCategorias';
//redux
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <div className="App">
        <TopNav/>
        <Provider store={store}>
        <Routes>
          <Route path='/addcategoria' element={<AgregarCategoria/>}/>
          <Route path='/borrarcategoria' element={<BorrarCategorias/>}/>
          </Routes>
        </Provider>
    </div>
  );
}

export default App;
