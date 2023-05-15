import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    menuModal: false
  },
  reducers: {
    changeMenuModal(state) {
      state.menuModal = !state.menuModal;
    }
  }
})

export const { changeMenuModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer; 