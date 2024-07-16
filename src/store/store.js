import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiWithTag from "../api/employeeApi";

const store = configureStore({
   reducer: {
      employee: employeeReducer,
      [apiWithTag.reducerPath]: apiWithTag.reducer,
   },

   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiWithTag.middleware),
});
setupListeners(store.dispatch);
export default store;
