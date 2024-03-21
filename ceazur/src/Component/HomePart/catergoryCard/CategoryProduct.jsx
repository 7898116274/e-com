// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../../ProductCard/ProductCard';

// const CategoryProducts = ({ match }) => {
//       const [products, setProducts] = useState([]);

//       useEffect(() => {
//             const category = match.params.category;
//             const getProduct = async () => {
//                   try {
//                         const response = await axios.get(`http://localhost:5000/api/user/product/category/${category}`);
//                         console.log('API response:', response.data); // Log the response data
//                         setProducts(response.data);

//                   } catch (error) {
//                         console.error('Error fetching products:', error);
//                   }
//             };

//             getProduct();
//       }, [match.params.category]);


//       return (
//             <div>
//                   <h2>{match.params.category} Products</h2>
//                   {products.map(product => (
//                         product && <ProductCard key={product._id} product={product} /> // Check if product is defined
//                   ))}
//             </div>
//       );
// }

// export default CategoryProducts;
