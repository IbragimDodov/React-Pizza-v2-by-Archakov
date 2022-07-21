import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalPrice: 0,
  items: []
}

const cartrSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id != action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  }
})

export const {addItem, removeItem, clearItems} = cartrSlice.actions;
export default cartrSlice.reducer;