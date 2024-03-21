import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ProductCard.css";
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom"

const ProductCard = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
            const fetchProducts = async () => {
                  try {
                        const response = await axios.get('http://localhost:5000/api/user/product');
                        setProducts(response.data.content);
                        console.log(response.data.content);
                  } catch (error) {
                        console.error('Error fetching products:', error);
                  }
            };

            fetchProducts();
      }, []);

      return (
            <div className="productGrid">
                  {products.map((item) => (
                        <div key={item._id} className='productCard w-[40rem] h-[30rem] m-5 transition-all cursor-pointer relative'>
                              <Link to={`/product/${item._id}`} style={{ textDecoration: "none", color: "none" }}>
                                    <div className='h-[22rem]'>
                                          <img className='h-full w-full object-fill ' src={item.images[0]} alt={item.title} />
                                          <Button className='actions-link'>
                                                {/* need to change color when needed */}
                                                <FavoriteIcon sx={{ color: "red" }} />
                                          </Button>
                                    </div>
                                    <div className='textPart bg-white p-3'>
                                          <p className='font-bold opacity-60'>{item.title}</p>
                                          <p>{item.description.substring(0, 25)}</p>
                                          <div className='flex items-center space-x-2 px-2'>
                                                <p className='font-semibold'>${item.discountedPrice}</p>
                                                <p className='line-through opacity-50'>${item.price}</p>
                                                <p className='text-green-600 font-semibold'>{item.discountPercent}% off</p>
                                          </div>
                                    </div>


                              </Link>
                        </div>



                  ))}
            </div>
      );
}

export default ProductCard;   