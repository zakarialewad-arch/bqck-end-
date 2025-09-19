import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const cart = get().items;
        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
          const updatedCart = cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          set({ items: updatedCart });
        } else {
          set({ items: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, newQuantity) => {
        set((state) => {
          if (newQuantity < 1) {
            // إيلا الكمية ولات صفر، كنحيدو المنتج
            return { items: state.items.filter((item) => item.id !== productId) };
          } else {
            // إلا كانت أكثر من صفر، كنبدلو الكمية
            return {
              items: state.items.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
              ),
            };
          }
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);