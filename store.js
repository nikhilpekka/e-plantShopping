import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const STORAGE_KEY = 'paradise-nursery-cart';

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return undefined;
    const items = saved.filter((item) => item && typeof item.id === 'string' && Number.isFinite(item.price) && Number.isInteger(item.quantity) && item.quantity > 0);
    return { cart: { items } };
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: loadCart(),
});

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart.items));
  } catch {
    // Cart remains usable even when browser storage is unavailable.
  }
});
