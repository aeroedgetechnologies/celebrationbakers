// // // // // // // import React from "react";
// // // // // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // // // // const products = [
// // // // // // //   {
// // // // // // //     name: "Brownies",
// // // // // // //     image: Brownies,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Breads",
// // // // // // //     image: Breads,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Croissants & Danishes",
// // // // // // //     image: Croissants,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Pastries",
// // // // // // //     image: Pastries,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Beverages",
// // // // // // //     image: Beverages,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Sandwiches",
// // // // // // //     image: Sandwiches,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Cookies",
// // // // // // //     image: Cookies,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     name: "Cakes",
// // // // // // //     image: Cakes,
// // // // // // //   },
// // // // // // // ];
// // // // // // // const TheAllProducts = () => {
// // // // // // //   return (
// // // // // // //     <div className="container mx-auto py-12">
// // // // // // //       <h1 className="text-4xl font-bold text-center mb-8">Theobroma Products</h1>
// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // //         {products.map((product, index) => (
// // // // // // //           <div key={index} className="text-center">
// // // // // // //             <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
// // // // // // //             <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // // // // //             <button className="mt-2 px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-200">
// // // // // // //               ORDER ONLINE
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TheAllProducts;


// // // // // // import React, { useState } from "react";
// // // // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // // // const products = [
// // // // // //   { name: "Brownies", image: Brownies, price: "₹110", description: "Delicious chocolate brownies with a rich taste." },
// // // // // //   { name: "Breads", image: Breads, price: "₹80", description: "Freshly baked soft and fluffy breads." },
// // // // // //   { name: "Croissants & Danishes", image: Croissants, price: "₹120", description: "Buttery, flaky croissants & danishes." },
// // // // // //   { name: "Pastries", image: Pastries, price: "₹150", description: "Tasty pastries with creamy fillings." },
// // // // // //   { name: "Beverages", image: Beverages, price: "₹60", description: "Refreshing hot & cold beverages." },
// // // // // //   { name: "Sandwiches", image: Sandwiches, price: "₹100", description: "Fresh sandwiches with delicious fillings." },
// // // // // //   { name: "Cookies", image: Cookies, price: "₹90", description: "Crispy and chewy cookies of various flavors." },
// // // // // //   { name: "Cakes", image: Cakes, price: "₹200", description: "Soft and spongy cakes for every occasion." },
// // // // // // ];

// // // // // // const TheAllProducts = () => {
// // // // // //   const [selectedProduct, setSelectedProduct] = useState(null);

// // // // // //   return (
// // // // // //     <div className="container mx-auto py-12">
// // // // // //       {selectedProduct ? (
// // // // // //         // Product Details View
// // // // // //         <div className="text-center">
// // // // // //           <img
// // // // // //             src={selectedProduct.image}
// // // // // //             alt={selectedProduct.name}
// // // // // //             className="w-1/2 mx-auto h-80 object-cover rounded-lg"
// // // // // //           />
// // // // // //           <h2 className="mt-4 text-2xl font-bold">{selectedProduct.name}</h2>
// // // // // //           <p className="mt-2 text-lg text-gray-600">{selectedProduct.description}</p>
// // // // // //           <p className="mt-2 text-xl font-semibold">{selectedProduct.price}</p>
// // // // // //           <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
// // // // // //             ORDER ONLINE
// // // // // //           </button>
// // // // // //           <br />
// // // // // //           <button
// // // // // //             className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
// // // // // //             onClick={() => setSelectedProduct(null)}
// // // // // //           >
// // // // // //             Back to Products
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         // Product Grid View
// // // // // //         <>
// // // // // //           <h1 className="text-4xl font-bold text-center mb-8">Theobroma Products</h1>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // //             {products.map((product, index) => (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 className="text-center cursor-pointer"
// // // // // //                 onClick={() => setSelectedProduct(product)}
// // // // // //               >
// // // // // //                 <img
// // // // // //                   src={product.image}
// // // // // //                   alt={product.name}
// // // // // //                   className="w-full h-64 object-cover rounded-lg"
// // // // // //                 />
// // // // // //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // // // //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-lg text-sm hover:bg-gray-200">
// // // // // //                   ORDER ONLINE
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TheAllProducts;


// // // // // import React, { useState } from "react";
// // // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // // const products = [
// // // // //   { name: "Choco Chip Brownie", image: Brownies, price: "₹110", bestseller: true },
// // // // //   { name: "Cookie Brownie", image: Breads, price: "₹110" },
// // // // //   { name: "Millionaire Brownie", image: Croissants, price: "₹120" },
// // // // //   { name: "Classic Brownie", image: Pastries, price: "₹100", bestseller: true },
// // // // //   { name: "Fudge Brownie", image: Beverages, price: "₹115" },
// // // // //   { name: "Walnut Brownie", image: Sandwiches, price: "₹125" },
// // // // //   { name: "Double Chocolate Brownie", image: Cookies, price: "₹130" },
// // // // //   { name: "Nutella Brownie", image: Cakes, price: "₹140" },
// // // // // ];

// // // // // const categories = [
// // // // //   "Brownies",
// // // // //   "Biscuits, Cookies & Crackers",
// // // // //   "Breads",
// // // // //   "Cakes",
// // // // //   "Combos",
// // // // //   "Croissants & Danishes",
// // // // //   "Desserts & Cupcakes",
// // // // //   "Pastries",
// // // // //   "Sandwiches & Savouries",
// // // // //   "Tea Cakes",
// // // // //   "Beverages",
// // // // //   "Gifting",
// // // // //   "Collectibles",
// // // // //   "Strawberry Specials",
// // // // //   "Ramadan Specials",
// // // // // ];

// // // // // const TheAllProducts = () => {
// // // // //   const [selectedProduct, setSelectedProduct] = useState(null);

// // // // //   return (
// // // // //     <div className="container mx-auto py-12 flex gap-8">
// // // // //       {/* Left Sidebar */}
// // // // //       <div className="w-1/4 border-r pr-6">
// // // // //         <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// // // // //         <label className="flex items-center space-x-2 mb-2">
// // // // //           <input type="checkbox" className="accent-brown" />
// // // // //           <span>Egg</span>
// // // // //         </label>
// // // // //         <label className="flex items-center space-x-2 mb-4">
// // // // //           <input type="checkbox" className="accent-brown" />
// // // // //           <span>Eggless</span>
// // // // //         </label>

// // // // //         <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// // // // //         <ul className="space-y-2 text-gray-700">
// // // // //           {categories.map((category, index) => (
// // // // //             <li key={index} className="cursor-pointer hover:text-brown">
// // // // //               &gt; {category}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>

// // // // //       {/* Product Grid */}
// // // // //       <div className="w-3/4">
// // // // //         <h1 className="text-4xl font-bold mb-6">Brownies</h1>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {products.map((product, index) => (
// // // // //             <div key={index} className="text-center relative">
// // // // //               {product.bestseller && (
// // // // //                 <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// // // // //                   Bestseller
// // // // //                 </span>
// // // // //               )}
// // // // //               <img
// // // // //                 src={product.image}
// // // // //                 alt={product.name}
// // // // //                 className="w-full h-64 object-cover rounded-lg"
// // // // //               />
// // // // //               <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // // //               <p className="text-gray-600">{product.price}</p>
// // // // //               <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// // // // //                 ORDER ONLINE
// // // // //               </button>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default TheAllProducts;


// // // // import React, { useState } from "react";
// // // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // // const allProducts = [
// // // //   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
// // // //   { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
// // // //   { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
// // // //   { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
// // // //   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
// // // //   { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
// // // //   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
// // // //   { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
// // // // ];

// // // // const categories = [
// // // //   "Brownies",
// // // //   "Biscuits, Cookies & Crackers",
// // // //   "Breads",
// // // //   "Cakes",
// // // //   "Combos",
// // // //   "Croissants & Danishes",
// // // //   "Desserts & Cupcakes",
// // // //   "Pastries",
// // // //   "Sandwiches & Savouries",
// // // //   "Tea Cakes",
// // // //   "Beverages",
// // // //   "Gifting",
// // // //   "Collectibles",
// // // //   "Strawberry Specials",
// // // //   "Ramadan Specials",
// // // // ];

// // // // const TheAllProducts = () => {
// // // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // // //   const [showFilters, setShowFilters] = useState(false);

// // // //   const filteredProducts = selectedCategory
// // // //     ? allProducts.filter((product) => product.category === selectedCategory)
// // // //     : allProducts;

// // // //   return (
// // // //     <div className="container mx-auto py-12">
// // // //       {/* Breadcrumb Navigation */}
// // // //       <nav className="text-gray-600 mb-4">
// // // //         Home &gt; Products {selectedCategory && `> ${selectedCategory}`}
// // // //       </nav>

// // // //       <div className="flex gap-8">
// // // //         {/* Sidebar (Hidden initially) */}
// // // //         {showFilters && (
// // // //           <div className="w-1/4 border-r pr-6">
// // // //             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// // // //             <label className="flex items-center space-x-2 mb-2">
// // // //               <input type="checkbox" className="accent-brown" />
// // // //               <span>Egg</span>
// // // //             </label>
// // // //             <label className="flex items-center space-x-2 mb-4">
// // // //               <input type="checkbox" className="accent-brown" />
// // // //               <span>Eggless</span>
// // // //             </label>

// // // //             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// // // //             <ul className="space-y-2 text-gray-700">
// // // //               {categories.map((category, index) => (
// // // //                 <li
// // // //                   key={index}
// // // //                   className="cursor-pointer hover:text-brown"
// // // //                   onClick={() => setSelectedCategory(category)}
// // // //                 >
// // // //                   &gt; {category}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         )}

// // // //         {/* Product Grid */}
// // // //         <div className={showFilters ? "w-3/4" : "w-full"}>
// // // //           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Brownies"}</h1>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {filteredProducts.map((product, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 className="text-center relative cursor-pointer"
// // // //                 onClick={() => {
// // // //                   setSelectedCategory(product.category);
// // // //                   setShowFilters(true);
// // // //                 }}
// // // //               >
// // // //                 {product.bestseller && (
// // // //                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// // // //                     Bestseller
// // // //                   </span>
// // // //                 )}
// // // //                 <img
// // // //                   src={product.image}
// // // //                   alt={product.name}
// // // //                   className="w-full h-64 object-cover rounded-lg"
// // // //                 />
// // // //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // // //                 <p className="text-gray-600">{product.price}</p>
// // // //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// // // //                   ORDER ONLINE
// // // //                 </button>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TheAllProducts;


// // // import React, { useState } from "react";
// // // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // // const allProducts = [
// // //   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
// // //   { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
// // //   { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
// // //   { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
// // //   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
// // //   { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
// // //   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
// // //   { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
// // // ];

// // // const categories = [
// // //   "Brownies",
// // //   "Biscuits, Cookies & Crackers",
// // //   "Breads",
// // //   "Cakes",
// // //   "Combos",
// // //   "Croissants & Danishes",
// // //   "Desserts & Cupcakes",
// // //   "Pastries",
// // //   "Sandwiches & Savouries",
// // //   "Tea Cakes",
// // //   "Beverages",
// // //   "Gifting",
// // //   "Collectibles",
// // //   "Strawberry Specials",
// // //   "Ramadan Specials",
// // // ];

// // // const TheAllProducts = () => {
// // //   const [selectedCategory, setSelectedCategory] = useState(null);
// // //   const [showFilters, setShowFilters] = useState(false);

// // //   const filteredProducts = selectedCategory
// // //     ? allProducts.filter((product) => product.category === selectedCategory)
// // //     : allProducts;

// // //   return (
// // //     <div className="container mx-auto py-12">
// // //       {/* Breadcrumb Navigation */}
// // //       <nav className="text-gray-600 mb-4">
// // //         Home &gt; Products {selectedCategory && `> ${selectedCategory}`}
// // //       </nav>

// // //       <div className="flex gap-8">
// // //         {/* Sidebar (Hidden initially) */}
// // //         {showFilters && (
// // //           <div className="w-1/4 border-r pr-6">
// // //             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// // //             <label className="flex items-center space-x-2 mb-2">
// // //               <input type="checkbox" className="accent-brown" />
// // //               <span>Egg</span>
// // //             </label>
// // //             <label className="flex items-center space-x-2 mb-4">
// // //               <input type="checkbox" className="accent-brown" />
// // //               <span>Eggless</span>
// // //             </label>

// // //             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// // //             <ul className="space-y-2 text-gray-700">
// // //               {categories.map((category, index) => (
// // //                 <li
// // //                   key={index}
// // //                   className="cursor-pointer hover:text-brown"
// // //                   onClick={() => setSelectedCategory(category)}
// // //                 >
// // //                   &gt; {category}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         )}

// // //         {/* Product Grid */}
// // //         <div className={showFilters ? "w-3/4" : "w-full"}>
// // //           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Brownies"}</h1>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filteredProducts.map((product, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="text-center relative cursor-pointer group"
// // //                 onClick={() => {
// // //                   setSelectedCategory(product.category);
// // //                   setShowFilters(true);
// // //                 }}
// // //               >
// // //                 {product.bestseller && (
// // //                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// // //                     Bestseller
// // //                   </span>
// // //                 )}
// // //                 <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
// // //                   <img
// // //                     src={product.image}
// // //                     alt={product.name}
// // //                     className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
// // //                   />
// // //                 </div>
// // //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// // //                 <p className="text-gray-600">{product.price}</p>
// // //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// // //                   ORDER ONLINE
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TheAllProducts;


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";  // Import Link from react-router-dom
// // import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
// // import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
// // import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
// // import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
// // import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// // import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
// // import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
// // import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";

// // const allProducts = [
// //   { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
// //   { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
// //   { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
// //   { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
// //   { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
// //   { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
// //   { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
// //   { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
// // ];

// // const categories = [
// //   "Brownies",
// //   "Biscuits, Cookies & Crackers",
// //   "Breads",
// //   "Cakes",
// //   "Combos",
// //   "Croissants & Danishes",
// //   "Desserts & Cupcakes",
// //   "Pastries",
// //   "Sandwiches & Savouries",
// //   "Tea Cakes",
// //   "Beverages",
// //   "Gifting",
// //   "Collectibles",
// //   "Strawberry Specials",
// //   "Ramadan Specials",
// // ];

// // const TheAllProducts = () => {
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [showFilters, setShowFilters] = useState(false);

// //   const filteredProducts = selectedCategory
// //     ? allProducts.filter((product) => product.category === selectedCategory)
// //     : allProducts;

// //   return (
// //     <div className="container mx-auto py-12">
// //       {/* Breadcrumb Navigation */}
// //       <nav className="text-gray-600 mb-4">
// //         <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; 
// //         <Link to="/products" className="text-blue-500 hover:underline">Products</Link>
// //         {selectedCategory && ` > ${selectedCategory}`}
// //       </nav>

// //       <div className="flex gap-8">
// //         {/* Sidebar (Hidden initially) */}
// //         {showFilters && (
// //           <div className="w-1/4 border-r pr-6">
// //             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
// //             <label className="flex items-center space-x-2 mb-2">
// //               <input type="checkbox" className="accent-brown" />
// //               <span>Egg</span>
// //             </label>
// //             <label className="flex items-center space-x-2 mb-4">
// //               <input type="checkbox" className="accent-brown" />
// //               <span>Eggless</span>
// //             </label>

// //             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
// //             <ul className="space-y-2 text-gray-700">
// //               {categories.map((category, index) => (
// //                 <li
// //                   key={index}
// //                   className="cursor-pointer hover:text-brown"
// //                   onClick={() => setSelectedCategory(category)}
// //                 >
// //                   &gt; {category}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}

// //         {/* Product Grid */}
// //         <div className={showFilters ? "w-3/4" : "w-full"}>
// //           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Brownies"}</h1>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredProducts.map((product, index) => (
// //               <div
// //                 key={index}
// //                 className="text-center relative cursor-pointer group"
// //                 onClick={() => {
// //                   setSelectedCategory(product.category);
// //                   setShowFilters(true);
// //                 }}
// //               >
// //                 {product.bestseller && (
// //                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
// //                     Bestseller
// //                   </span>
// //                 )}
// //                 <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
// //                   />
// //                 </div>
// //                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
// //                 <p className="text-gray-600">{product.price}</p>
// //                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
// //                   ORDER ONLINE
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TheAllProducts;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";  // Import useLocation from react-router-dom

// const allProducts = [
//   { name: "Choco Chip Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹110", bestseller: true },
//   { name: "Cookie Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹110" },
//   { name: "Millionaire Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹120" },
//   { name: "Classic Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹100", bestseller: true },
//   { name: "Fudge Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹115" },
//   { name: "Walnut Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹125" },
//   { name: "Double Chocolate Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹130" },
//   { name: "Nutella Brownie", category: "Brownies", image: "/path/to/image.jpg", price: "₹140" },
// ];

// const categories = [
//   "Brownies",
//   "Biscuits, Cookies & Crackers",
//   "Breads",
//   "Cakes",
//   "Combos",
//   "Croissants & Danishes",
//   "Desserts & Cupcakes",
//   "Pastries",
//   "Sandwiches & Savouries",
//   "Tea Cakes",
//   "Beverages",
//   "Gifting",
//   "Collectibles",
//   "Strawberry Specials",
//   "Ramadan Specials",
// ];

// const TheAllProducts = () => {
//   const location = useLocation(); // Get the current location
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showFilters, setShowFilters] = useState(false);

//   // This effect will run whenever the route changes.
//   useEffect(() => {
//     if (location.pathname === "/products") {
//       // Reset the category state if needed
//       setSelectedCategory(null);
//     }
//   }, [location]);

//   const filteredProducts = selectedCategory
//     ? allProducts.filter((product) => product.category === selectedCategory)
//     : allProducts;

//   return (
//     <div className="container mx-auto py-12">
//       {/* Breadcrumb Navigation */}
//       <nav className="text-gray-600 mb-4">
//         <Link to="/" className="text-blue-500 hover:underline">Home</Link> &gt; 
//         <Link to="/products" className="text-blue-500 hover:underline">Products</Link>
//         {selectedCategory && ` > ${selectedCategory}`}
//       </nav>

//       <div className="flex gap-8">
//         {/* Sidebar (Hidden initially) */}
//         {showFilters && (
//           <div className="w-1/4 border-r pr-6">
//             <h2 className="font-bold text-lg mb-4">FILTERS</h2>
//             <label className="flex items-center space-x-2 mb-2">
//               <input type="checkbox" className="accent-brown" />
//               <span>Egg</span>
//             </label>
//             <label className="flex items-center space-x-2 mb-4">
//               <input type="checkbox" className="accent-brown" />
//               <span>Eggless</span>
//             </label>

//             <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
//             <ul className="space-y-2 text-gray-700">
//               {categories.map((category, index) => (
//                 <li
//                   key={index}
//                   className="cursor-pointer hover:text-brown"
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   &gt; {category}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Product Grid */}
//         <div className={showFilters ? "w-3/4" : "w-full"}>
//           <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Products"}</h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map((product, index) => (
//               <div
//                 key={index}
//                 className="text-center relative cursor-pointer group"
//                 onClick={() => {
//                   setSelectedCategory(product.category);
//                   setShowFilters(true);
//                 }}
//               >
//                 {product.bestseller && (
//                   <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
//                     Bestseller
//                   </span>
//                 )}
//                 <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
//                   />
//                 </div>
//                 <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
//                 <p className="text-gray-600">{product.price}</p>
//                 <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
//                   ORDER ONLINE
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheAllProducts;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Brownies from "./wesual-click-rsWZ-P9FbQ4-unsplash.jpg";
import Breads from "./patrick-tomasso-NlcCPeKNmwg-unsplash.jpg";
import Croissants from "./nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg";
import Pastries from "./david-holifield-kPxsqUGneXQ-unsplash (1).jpg";
import Beverages from "./brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
import Sandwiches from "./blake-wisz-0mZIT-EcH5k-unsplash.jpg";
import Cookies from "./angelo-pantazis-2-U0A2tNYhM-unsplash.jpg";
import Cakes from "./ales-krivec-QnNqGoCnBg0-unsplash.jpg";
import Cakes1 from "./prakash-meghani-07bBNmiV7ag-unsplash (1).jpg";

const allProducts = [
  { name: "Choco Chip Brownie", category: "Brownies", image: Brownies, price: "₹110", bestseller: true },
  { name: "Cookie Brownie", category: "Brownies", image: Breads, price: "₹110" },
  { name: "Millionaire Brownie", category: "Brownies", image: Croissants, price: "₹120" },
  { name: "Classic Brownie", category: "Brownies", image: Pastries, price: "₹100", bestseller: true },
  { name: "Fudge Brownie", category: "Brownies", image: Beverages, price: "₹115" },
  { name: "Walnut Brownie", category: "Brownies", image: Sandwiches, price: "₹125" },
  { name: "Double Chocolate Brownie", category: "Brownies", image: Cookies, price: "₹130" },
  { name: "Nutella Brownie", category: "Brownies", image: Cakes, price: "₹140" },
  { name: "Delicious Cake", category: "Cakes", image: Cakes1, price: "₹150" },
];

const categories = [
  "Brownies",
  "Biscuits, Cookies & Crackers",
  "Breads",
  "Cakes",
  "Combos",
  "Croissants & Danishes",
  "Desserts & Cupcakes",
  "Pastries",
  "Sandwiches & Savouries",
  "Tea Cakes",
  "Beverages",
  "Gifting",
  "Collectibles",
  "Strawberry Specials",
  "Ramadan Specials",
];

const TheAllProducts = () => {
  const location = useLocation(); // Get the current location
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // This effect will run whenever the route changes.
  useEffect(() => {
    if (location.pathname === "/products") {
      // Reset the category state if needed
      setSelectedCategory(null);
    }
  }, [location]);

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <div className="container mx-auto py-12">
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-600 mb-4">
        <Link to="/" className="text-gray-600 hover:text-brown no-underline">Home</Link> &gt; 
        <Link to="/products" className="text-gray-600 hover:text-brown no-underline">Products</Link>
        {selectedCategory && ` > ${selectedCategory}`}
      </nav>

      <div className="flex gap-8">
        {/* Sidebar (Hidden initially) */}
        {showFilters && (
          <div className="w-1/4 border-r pr-6">
            <h2 className="font-bold text-lg mb-4">FILTERS</h2>
            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="accent-brown" />
              <span>Egg</span>
            </label>
            <label className="flex items-center space-x-2 mb-4">
              <input type="checkbox" className="accent-brown" />
              <span>Eggless</span>
            </label>

            <h2 className="font-bold text-lg mb-4">PRODUCTS</h2>
            <ul className="space-y-2 text-gray-700">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-brown"
                  onClick={() => setSelectedCategory(category)}
                >
                  &gt; {category}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Product Grid */}
        <div className={showFilters ? "w-3/4" : "w-full"}>
          <h1 className="text-4xl font-bold mb-6">{selectedCategory || "All Products"}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="text-center relative cursor-pointer group"
                onClick={() => {
                  setSelectedCategory(product.category);
                  setShowFilters(true);
                }}
              >
                {product.bestseller && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
                    Bestseller
                  </span>
                )}
                <div className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg transition-all duration-300 ease-in-out"
                  />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
                  ORDER ONLINE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheAllProducts;
