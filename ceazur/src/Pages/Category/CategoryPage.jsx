import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../Component/ProductCard/ProductCard';


const CategoryPage = ({ match }) => {
      const [products, setProducts] = useState([]);
      console.log(products)
      useEffect(() => {
            const fetchProductsByCategory = async () => {
                  try {
                        const category = match.params.category; // Extract category name from URL
                        const response = await axios.get(`http://localhost:5000/api/products/category/${category}`);
                        setProducts(response.data);
                        console.log(response.data)
                  } catch (error) {
                        console.error('Error fetching products by category:', error);
                  }
            };

            fetchProductsByCategory();
      }, [match.params.category]);

      return (
            <div>
                  <h2>Products in {match.params.category} Category</h2>
                  <div className="products-container">
                        {products.map(product => (
                              <ProductCard key={product._id} product={product} />
                        ))}
                  </div>
            </div>
      );
}

export default CategoryPage;
