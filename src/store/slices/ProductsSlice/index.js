import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    setProductsList: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setProductsList } = ProductsSlice.actions;
export default ProductsSlice.reducer;

export const fetchAllProducts = () => (dispatch) => {
  axios
    .get("https://ot-serverapi.herokuapp.com/products")
    .then((response) => {
      dispatch(setProductsList(response.data));
    })
    .catch((error) => console.log(error));
};
