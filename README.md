Product Explorer Dashboard

A simple product explorer built using Next.js, TypeScript, and Tailwind CSS.
The application displays products from a public API with search, filtering, favorites, and dark/light mode support.

📌Features

Product Listing

-Fetches products from a public API
-Displays products in a responsive grid
-Shows loading skeletons while data is loading
-Handles empty and error states gracefully

Search & Filtering

-Search products by title (client-side)
-Filter products by category
-Combine search, category, and favorites filters

Product Details

-Dynamic routing using /products/[id]
-Displays product image, title, description, price, and category
-Uses server-side data fetching with App Router

Favorites

-Mark and unmark products as favorites
-Favorites persisted using localStorage
-Filter to show only favorite products

🧰Tech Stack

Next.js (App Router)
TypeScript
Tailwind CSS
Fake Store API

Getting Started
1. Clone the repository
git clone https://github.com/Ashrita1206/product-explorer-dashboard.git
cd product-explorer-dashboard

2. Install dependencies
npm install

3. Run the development server
npm run dev


Open http://localhost:3000 in your browser.

Project Structure
src/
├── app/
├── components/
├── hooks/
├── lib/
└── types/

Notes

Product data is fetched from https://fakestoreapi.com/products
Filtering and searching are handled on the client side
Favorites are stored in localStorage for simplicity

⚖️ Assumptions & Trade-offs

-Client-side filtering:
Searching and filtering are handled on the client since the dataset is small and performance impact is minimal.

-Favorites persistence:
Favorites are stored in localStorage instead of a backend for simplicity and faster implementation.

-No pagination:
Pagination or infinite scroll was not implemented because the API returns a limited number of products.

Author

Ashrita Raskatla
Frontend Developer – React.js | Next.js | TypeScript
