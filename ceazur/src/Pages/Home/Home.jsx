import React from 'react';
import Banner from '../../Component/HomePart/Banner/Banner'
import CatergoryCard from '../../Component/HomePart/catergoryCard/CategoryCart';
import HomeArrival from '../../Component/HomePart/HomeArrival/Homearrival';
import UserOffer from '../../Component/HomePart/UserOffer/userOffer';
import LatestCollection from '../../Component/HomePart/latestCollection/LatestCollection';
import TopSales from '../../Component/HomePart/topSale/TopSales';
import ProductCard from '../../Component/ProductCard/ProductCard';

function Home() {
      return (
            <>

                  <div className="container-fluid" >
                        <Banner />
                  </div>
                  <div className="container my-5">
                        <CatergoryCard />
                  </div>
                  <div className="container-fluid my-5" >
                        <HomeArrival />
                  </div>
                  <div className='container-fluid my-5'>
                        <LatestCollection />
                  </div>
                  <div className='container-fluid my-5'>
                        <TopSales />
                  </div>
                  <div className="container-fluid my-5">
                        <UserOffer />
                  </div>
                  <ProductCard />

            </>
      );
}

export default Home;

