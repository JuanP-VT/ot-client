import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const CategoriaSlice = createSlice({
  name: "categorias",
  initialState: {
    list: [],
  },
  reducers: {
    setCategoriasList: (state, action) => {
      state.list = action.payload;
    },
  },
});
export const { setCategoriasList } = CategoriaSlice.actions;
export default CategoriaSlice.reducer;

export const fetchAllCategorias = () => (dispatch) => {
  axios
    .get("https://ot-serverapi.herokuapp.com/categorias")
    .then((response) => {
      dispatch(setCategoriasList(response.data));
    })
    .catch((error) => console.log(error));
};
