import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import AgregarCategoria from './components/AgregarCategoria/AgregarCategoria'
function App() {
  return (
    <div className="App">
        <TopNav/>
        <Routes>
          <Route path='/addcategoria' element={<AgregarCategoria/>}/>
        </Routes>
    </div>
  );
}

export default App;
