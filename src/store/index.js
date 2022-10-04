import {configureStore} from '@reduxjs/toolkit'
import categorias from './slices/CategoriasSlice'
import products from './slices/ProductsSlice'
export default configureStore({
    reducer:{
        categorias,
        products
        
    }
});
