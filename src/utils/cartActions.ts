import { Product } from '../types/cart';

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Product A',
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product B',
    price: 30,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Product C',
    price: 75,
    quantity: 1,
  },
];

export const resetCart = () => {
  localStorage.setItem('cart', JSON.stringify(initialProducts));
  localStorage.setItem('discount', '0');
  return { products: initialProducts, discount: 0 };
};