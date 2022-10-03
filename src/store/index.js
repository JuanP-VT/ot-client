import {configureStore} from '@reduxjs/toolkit'
import categorias from './slices/CategoriasSlice'
export default configureStore({
    reducer:{
        categorias
    }
});
