# React Shopping Cart

A modern, responsive shopping cart implementation built with React, TypeScript, and Tailwind CSS.

## Features

- 🛒 Product management (add, remove, update quantities)
- 💰 Real-time price calculations
- 🏷️ Discount application system
- 💾 Persistent storage using localStorage
- 📱 Responsive design for all devices
- 💸 INR currency formatting
- 🎨 Clean, modern UI with Tailwind CSS

## Project Structure

```
src/
├── components/
│   ├── CartItem.tsx    # Individual product display and controls
│   └── CartSummary.tsx # Cart totals and discount management
├── types/
│   └── cart.ts         # TypeScript interfaces for cart data
├── utils/
│   └── format.ts       # Currency formatting utilities
└── App.tsx             # Main application component
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

### Managing Products

- Use the + and - buttons to adjust product quantities
- Click the trash icon to remove a product
- Product changes are automatically saved to localStorage

### Applying Discounts

1. Enter a discount percentage (0-100) in the discount field
2. The cart total will automatically update to reflect the discount
3. Discount is preserved across page refreshes

## Development

### Key Components

- `CartItem`: Manages individual product display and interactions
- `CartSummary`: Handles cart totals and discount calculations
- `format.ts`: Contains currency formatting utilities

### State Management

The application uses React's useState and useEffect hooks for:
- Managing product state
- Handling discount calculations
- Persisting data to localStorage

### Type Definitions

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: Product[];
  discount: number;
}
```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployed on netlify
https://app.netlify.com/sites/cartmanassignment/overview

