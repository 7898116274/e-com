import React from 'react';
import Banner from '../../Component/HomePart/Banner/Banner'
import CatergoryCard from '../../Component/HomePart/catergoryCard/CategoryCart';
import HomeArrival from '../../Component/HomePart/HomeArrival/Homearrival';

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

            </>
      );
}

export default Home;

