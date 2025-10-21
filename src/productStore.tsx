import { create } from "zustand";
import { getProducts } from "./productos";

export const useProductsStore = create((set) => ({
  productos: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    const data = await getProducts();
    set({ productos: data || [], loading: false });
  },
}));