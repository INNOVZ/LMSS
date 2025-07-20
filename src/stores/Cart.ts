import { create } from 'zustand';

type Course = {
  id: string;
  title: string;
  price: number;
};

interface CartState {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isInCart: (courseId: string) => boolean;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  
  addToCart: (course) => set((state) => {
    // Check if course already exists in cart
    const existingCourse = state.cart.find(item => item.id === course.id);
    if (existingCourse) {
      // If course already exists, don't add duplicate
      return state;
    }
    return { cart: [...state.cart, course] };
  }),
  
  removeFromCart: (courseId) =>
    set((state) => ({
      cart: state.cart.filter((course) => course.id !== courseId),
    })),
    
  clearCart: () => set({ cart: [] }),
  
  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.price, 0);
  },
  
  getTotalItems: () => {
    const { cart } = get();
    return cart.length;
  },
  
  isInCart: (courseId) => {
    const { cart } = get();
    return cart.some(item => item.id === courseId);
  }
}));