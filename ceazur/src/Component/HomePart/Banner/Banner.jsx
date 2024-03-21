import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import image from "./image/mainimage.png"
import image2 from "./image/img1.jpg"
import image3 from "./image/img2.jpg"



const items = [
      // <div className="item" data-value="1"><img src={image} alt="" style={{ height: "500px", width: "100%" }} /></div>,
      // <div className="item" data-value="1"><img src={image1} alt="" style={{ height: "500px", width: "100%" }} /></div>,
      <div className="item" data-value="1"><img src={image2} alt="" style={{ height: "500px", width: "100%" }} /></div>,
      <div className="item" data-value="1"><img src={image3} alt="" style={{ height: "500px", width: "100%" }} /></div>,

];

const Banner = () => (
      <AliceCarousel
            items={items}
            cover
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={5000}
            infinite
      />
);

export default Banner;