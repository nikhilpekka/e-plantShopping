import { createSlice } from '@reduxjs/toolkit';

// Items have the shape { id, name, price, image, quantity }.
const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((product) => product.id === id);
      if (!item) return;
      if (quantity <= 0) state.items = state.items.filter((product) => product.id !== id);
      else item.quantity = Math.floor(quantity);
    },
    increaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((product) => product.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = state.items.filter((product) => product.id !== action.payload);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, updateQuantity, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer;
