import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '../types/cart';
import { formatCurrency } from '../utils/format';

interface CartItemProps {
  product: Product;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveProduct: (id: number) => void;
}

export function CartItem({ product, onUpdateQuantity, onRemoveProduct }: CartItemProps) {
  const handleQuantityChange = (increment: number) => {
    const newQuantity = Math.max(1, product.quantity + increment);
    onUpdateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-gray-200">
      <div className="flex-1 mb-3 sm:mb-0">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{formatCurrency(product.price)}</p>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end sm:gap-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="p-1.5 rounded-full hover:bg-gray-100 border border-gray-200"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="w-12 text-center font-medium">{product.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(1)}
            className="p-1.5 rounded-full hover:bg-gray-100 border border-gray-200"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-20 sm:w-24 text-right font-medium">
            {formatCurrency(product.price * product.quantity)}
          </div>

          <button
            onClick={() => onRemoveProduct(product.id)}
            className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 rounded-full"
            aria-label="Remove item"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}