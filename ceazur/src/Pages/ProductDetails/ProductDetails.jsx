/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { RadioGroup } from '@headlessui/react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useParams } from 'react-router-dom';
import axios from 'axios';




function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
}

const ProductDetails = () => {

      const { id } = useParams();
      const [product, setProduct] = useState(null);
      const [selectedSize, setSelectedSize] = useState(null); // Initialize selectedSize to null
      console.log(product)
      useEffect(() => {
            const fetchProductDetails = async () => {
                  try {
                        const response = await axios.get(`http://localhost:5000/api/user/product/${id}`);
                        setProduct(response.data); // Set product data from the API response
                        // Initialize selectedSize with the first available size
                        console.log(response.data)
                        if (response.data && response.data.sizes && response.data.sizes.length > 0) {
                              setSelectedSize(response.data.sizes);
                        }
                  } catch (error) {
                        console.error('Error fetching product details:', error);
                  }
            };

            fetchProductDetails();
      }, [id]);

      const handleSizeChange = (size) => {
            setSelectedSize(size); // Update selectedSize when a size is selected
      };

      const handleAddToCart = () => {
            // Implement add to cart functionality
            console.log('Added to cart:', product);
      };

      const handleAddToWishlist = () => {
            // Implement add to wishlist functionality
            console.log('Added to wishlist:', product);
      };

      if (!product) {
            return <div>Loading...</div>; // Add loading state while product data is being fetched
      }
      return (
            <div className="bg-white lg:px-20">
                  <div className="pt-6">
                        <nav aria-label="Breadcrumb">
                              <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                    {/* Home */}
                                    <li>
                                          <div className="flex items-center">
                                                <a href="/" className="mr-2 text-sm font-medium text-gray-900">
                                                      Home
                                                </a>
                                                <svg
                                                      width={16}
                                                      height={20}
                                                      viewBox="0 0 16 20"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                      className="h-5 w-4 text-gray-300"
                                                >
                                                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                                </svg>
                                          </div>
                                    </li>

                                    {/* Product */}
                                    <li>
                                          <div className="flex items-center">
                                                <a href={`/products`} className="mr-2 text-sm font-medium text-gray-900">
                                                      Product
                                                </a>
                                                <svg
                                                      width={16}
                                                      height={20}
                                                      viewBox="0 0 16 20"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                      className="h-5 w-4 text-gray-300"
                                                >
                                                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                                </svg>
                                          </div>
                                    </li>

                                    {/* Name of Product */}
                                    <li className="text-sm">
                                          <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                                {product.title}
                                          </a>
                                    </li>
                              </ol>
                        </nav>

                        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 '>
                              {/* Image gallery */}
                              <div className="flex flex-col items-center">
                                    {/* First row of images */}
                                    <div className="flex justify-center gap-6">
                                          {product.images.slice(0, 2).map((imageUrl, index) => (
                                                <div key={index} className="relative overflow-hidden rounded-lg w-[18rem] h-[25rem]">
                                                      {/* Adjusted width and height */}
                                                      <img
                                                            src={imageUrl}
                                                            alt={""}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                                    {/* Second row of images */}
                                    <div className="flex justify-center gap-6 mt-6">
                                          {product.images.slice(2, 4).map((imageUrl, index) => (
                                                <div key={index + 2} className="relative overflow-hidden rounded-lg w-[18rem] h-[25rem]">
                                                      {/* Adjusted width and height */}
                                                      <img
                                                            src={imageUrl}
                                                            alt={""}
                                                            className="absolute inset-0 w-full h-full object-cover"
                                                      />
                                                </div>
                                          ))}
                                    </div>
                              </div>




                              {/* Product info */}
                              <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                                    <div className="lg:col-span-2">
                                          <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{product.title}</h1>
                                          <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>
                                                {product.description}
                                          </h1>
                                    </div>
                                    <hr></hr>
                                    {/* Options */}
                                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                                          <h2 className="sr-only">Product information</h2>
                                          <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                                <p className='font-semibold'>${product.discountedPrice}</p>
                                                <p className='opacity-50 line-through'>${product.price}</p>
                                                <p className='text-green-600 font-semibold'>{-Math.round(product.discountedPrice / product.price * 100 - 100)}% off</p>
                                          </div>



                                          <form className="mt-2" onChange={handleSizeChange}>
                                                {/* Sizes */}
                                                <div className="mt-2">
                                                      <div className="flex items-center justify-between">
                                                            <h3 className="text-lg font-medium text-gray-900 font-semibold">Size</h3>
                                                            {/* need to edit href */}

                                                      </div>

                                                      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                                  {product.sizes.map((size) => (
                                                                        <RadioGroup.Option
                                                                              key={size.name}
                                                                              value={size}
                                                                              // Remove disabled attribute
                                                                              className={classNames(
                                                                                    'cursor-pointer bg-white text-gray-900 shadow-sm',
                                                                                    // Remove active class
                                                                                    'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                                              )}
                                                                        >
                                                                              <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                                        </RadioGroup.Option>
                                                                  ))}
                                                            </div>
                                                      </RadioGroup>

                                                </div>

                                                <Button variant="contained" sx={{ px: "3rem", py: "1rem" }} className='mt-3' onClick={handleAddToCart}>ADD To CART</Button>
                                                <Button sx={{ px: "2rem", py: "1rem", backgroundColor: 'transparent', border: '2px solid black', gap: '8px', fontWeight: 'bold' }} className='mt-3 mx-4 '  >
                                                      <FavoriteIcon sx={{ color: 'pink', borderRadius: "black", margin: "0rem", padding: "0rem" }} onClick={handleAddToWishlist} />
                                                      WISHLIST
                                                </Button>
                                                {/* CHECK THE COLOR AND OPACITY OF HEART */}
                                          </form>
                                    </div>

                                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                          {/* Description and details */}

                                          <div className="mt-10">
                                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                                <div className="mt-4">
                                                      {/* delected role:"list" from ul */}
                                                      {/* <ul className="list-disc space-y-2 pl-4 text-sm">
                                                            {product.highlights.map((highlight) => (
                                                                  <li key={highlight} className="text-gray-400">
                                                                        <span className="text-gray-600">{highlight}</span>
                                                                  </li>
                                                            ))}
                                                      </ul> */}
                                                </div>
                                          </div>

                                          <div className="mt-10">
                                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                                <div className="mt-4 space-y-6">
                                                      <p className="text-sm text-gray-600">{product.discription}</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </div>
            </div>


      )
}

export default ProductDetails;






// <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
      
//       <div className="grid grid-cols-4 gap-2 sm:grid-cols-8 lg:grid-cols-4">
//             {product.sizes.map((size) => (
//                   <RadioGroup.Option
//                         key={size.name}
//                         value={size}
//                         disabled={!size.inStock}
//                         className={({ active }) =>
//                               classNames(
//                                     size.inStock
//                                           ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
//                                           : 'cursor-not-allowed bg-gray-50 text-gray-200',
//                                     active ? 'ring-2 ring-indigo-500' : '',
//                                     'group relative flex items-center justify-center rounded-md border py-2 px-3 text-xs font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6' // Adjusted padding and font size
//                               )
//                         }
//                   >
//                         {({ active, checked }) => (
//                               <>
//                                     <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
//                                     {size.inStock ? (
//                                           <span
//                                                 className={classNames(
//                                                       active ? 'border' : 'border-2',
//                                                       checked ? 'border-indigo-500' : 'border-transparent',
//                                                       'pointer-events-none absolute -inset-px rounded-md'
//                                                 )}
//                                                 aria-hidden="true"
//                                           />
//                                     ) : (
//                                           <span
//                                                 aria-hidden="true"
//                                                 className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                                           >
//                                                 <svg
//                                                       className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                                                       viewBox="0 0 100 100"
//                                                       preserveAspectRatio="none"
//                                                       stroke="currentColor"
//                                                 >
//                                                       <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
//                                                 </svg>
//                                           </span>
//                                     )}
//                               </>
//                         )}
//                   </RadioGroup.Option>
//             ))}
//       </div>
// </RadioGroup>
