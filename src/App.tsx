import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartItem } from './components/CartItem';
import { CartSummary } from './components/CartSummary';
import { Product } from './types/cart';

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

function App() {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : initialProducts;
  });
  
  const [discount, setDiscount] = useState<number>(() => {
    const saved = localStorage.getItem('discount');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
    localStorage.setItem('discount', String(discount));
  }, [products, discount]);

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity } : product
    ));
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => 
    sum + (product.price * product.quantity), 0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {products.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  Your cart is empty
                </div>
              ) : (
                products.map(product => (
                  <CartItem
                    key={product.id}
                    product={product}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveProduct={handleRemoveProduct}
                  />
                ))
              )}
            </div>
          </div>

          <div>
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              onDiscountChange={setDiscount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;