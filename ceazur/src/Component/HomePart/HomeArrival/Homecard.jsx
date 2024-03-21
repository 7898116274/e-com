import React from "react";
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function Homecard() {
      return (
            <Card sx={{ maxWidth: 345, height: '100%' }} className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden w-15rem mx-3">
                  {/* Image */}
                  <CardMedia
                        component="img"
                        height="150px"
                        image="//www.snitch.co.in/cdn/shop/files/4MSS2867-02-M23.jpg?v=1710743768"
                        alt="Hoodies"
                        style={{ objectFit: "cover" }}
                  />
                  {/* Content */}
                  <CardContent className="p-4">
                        <Typography variant="h5" component="div" className="font-medium text-gray-900 " style={{ fontFamily: "'Times New Roman', serif" }}>
                              Hoodies
                        </Typography>
                        <Typography variant="body2" className="mt-2 text-gray-500">
                              Men's solid Pure Cotton
                        </Typography>
                        <Typography variant="body2" className="mt-2 ">
                              <div className='flex items-center space-x-2 px-2'>
                                    <p className='font-semibold text-lg'>$500</p>
                                    <p className='line-through opacity-50 text-sm'>$1000</p>
                                    <p className='text-green-600 font-semibold text-sm'>30% off</p>
                              </div>
                        </Typography>

                  </CardContent>
            </Card>
      );
}

export default Homecard;
