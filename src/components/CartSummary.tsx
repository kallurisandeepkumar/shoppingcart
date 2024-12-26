import React from 'react';
import { formatCurrency } from '../utils/format';

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  onDiscountChange: (discount: number) => void;
}

export function CartSummary({ subtotal, discount, onDiscountChange }: CartSummaryProps) {
  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(100, Math.max(0, Number(e.target.value) || 0));
    onDiscountChange(value);
  };

  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="discount" className="flex-1">Discount (%)</label>
          <input
            type="number"
            id="discount"
            value={discount}
            onChange={handleDiscountChange}
            min="0"
            max="100"
            className="w-20 px-3 py-2 border rounded-md"
          />
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-{formatCurrency(discountAmount)}</span>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}