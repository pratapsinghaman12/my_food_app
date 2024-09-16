import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //RTK: - mutate the existing state or return the new state.
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      const idToRemove = action.payload.card?.info?.id;
      const lastIndexToRemove = state.items
        .map((item) => item.card?.info?.id)
        .lastIndexOf(idToRemove);
      if (lastIndexToRemove !== -1) {
        state.items.splice(lastIndexToRemove, 1);
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0; // [] mutating the current state
      // return {items: []}; // or return the new state.
    },
  },
});
export const { addItem, deleteItem, clearCart } = cartSlice.actions; // createSlice function will return action and reducer so that we can use them and the above way is a template to write slice set by redux community.
export default cartSlice.reducer;
