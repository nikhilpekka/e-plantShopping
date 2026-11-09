# Paradise Nursery — Online Plant Shopping Cart

**Project name:** Paradise Nursery  
**Project type:** React + Redux Toolkit e-commerce web application  
**Purpose:** Final shopping-cart project for an online houseplant store.

Paradise Nursery is a responsive shopping website where visitors browse indoor plants, read product information, add them to a cart, adjust quantities, and see totals update instantly.

## Features

- Landing page featuring the **Paradise Nursery** name, plant-themed background image, and **Get Started** button.
- Dedicated **About Us** page explaining the fictional shop's mission.
- **18 distinct houseplants**, organized into **three categories with six plants each**.
- Each plant includes an illustrated thumbnail, name, botanical name, description, care details, and price in INR.
- **Add to Cart** uses a Redux action; its button becomes disabled after a plant is added.
- Persistent navigation containing **Home**, **Plants**, and **Cart**; cart icon displays the sum of product quantities.
- Shopping cart with individual item totals, subtotal, plus/minus quantity controls, Remove, Continue Shopping, and a **Coming Soon** checkout dialog.
- Cart persists when the browser page is refreshed (via localStorage).
- Responsive layout for desktop and mobile, plus search, filter, and sorting controls.

## Tech stack

React 18, Vite 6, React Router 6, Redux Toolkit, React Redux, Lucide React, CSS.

## Run locally

1. Install Node.js 18 or newer.
2. In the project folder, run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL printed by Vite (typically `http://localhost:5173`).

To create a production bundle, run `npm run build`.

## Required assignment files

| Question | GitHub file | Purpose |
| --- | --- | --- |
| 1 | `README.md` | Project name and overview |
| 2 | `src/AboutUs.jsx` | Company information |
| 3 | `src/App.css` | Styling and landing background image |
| 4 | `src/App.jsx` | Landing page and Get Started |
| 5 | `src/CartSlice.jsx` | `addItem()`, `removeItem()`, `updateQuantity()` reducers |
| 6 | `src/ProductList.jsx` | Product categories and Add to Cart |
| 7 | `src/CartItem.jsx` | Cart totals, quantity, delete, checkout and shop link |

## Project structure

```text
Paradise-Nursery/
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── images/hero-background.svg
│   └── plants/ (18 original SVG plant illustrations)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── AboutUs.jsx
    ├── Navbar.jsx
    ├── ProductList.jsx
    ├── CartItem.jsx
    ├── CartSlice.jsx
    ├── products.js
    └── store.js
```

## Notes

This is a demo shopping application. The checkout intentionally displays a **Coming Soon** message; it does not process orders or payments. Illustrations are bundled inside the project so no image hosting account is needed.
