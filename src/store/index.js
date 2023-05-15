import { configureStore } from "@reduxjs/toolkit";
import { modalReducer, changeMenuModal } from "./slices/ModalSlice";

const store = configureStore({
  reducer: { modal: modalReducer }
});

export {store, changeMenuModal};