import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardMedia } from '@mui/material';
import mountain from "./image/mountain.png";
import beach from './image/beach.png';
import './Categorycart.css'; // Import the external CSS file

function CategoryCart() {




      return (
            <div className="card-container">
                  <div className="card-wrapper">
                        <Card>
                              <Link to="/category/mountain">
                                    <CardMedia
                                          component="img"
                                          alt="mountain"
                                          height="300"
                                          image={mountain}
                                          className="card-image"
                                    />
                                    <div className="card-text">Mountain Image</div>
                              </Link>
                        </Card>
                  </div>
                  <div className="card-wrapper">
                        <Card>
                              <Link to="/category/beach">
                                    <CardMedia
                                          component="img"
                                          alt="beach"
                                          height="300"
                                          image={beach}
                                          className="card-image"
                                    />
                                    <div className="card-text">Beach Image</div>
                              </Link>
                        </Card>
                  </div>
                  <div className="card-wrapper">
                        <Card>
                              <Link to="/category/safari">
                                    <CardMedia
                                          component="img"
                                          alt="safari"
                                          height="300"
                                          image={beach} // Note: Assuming you want to use the same image for safari as beach for now
                                          className="card-image"
                                    />
                                    <div className="card-text">Safari Image</div>
                              </Link>
                        </Card>
                  </div>
            </div>
      );
}

export default CategoryCart;
