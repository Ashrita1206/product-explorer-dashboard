Product Explorer Dashboard

A simple product explorer built using Next.js, TypeScript, and Tailwind CSS.
The application displays products from a public API with search, filtering, favorites, and dark/light mode support.

📌Features

Product listing in a responsive grid
Search products by title
Filter products by category
View product details
Mark / unmark products as favorites
Show only favorite products
Favorites saved using localStorage
Dark and light mode toggle
Mobile, tablet, and desktop friendly UI
Loading skeletons for better UX

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

Author

Ashrita Raskatla
Frontend Developer – React.js | Next.js | TypeScript
