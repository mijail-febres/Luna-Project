import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import SearchHomepage from "../../components/SearchHomepage/SearchHomepage";
import BestRatedRestaurants from "../../components/BestRatedRestaurants/BestRatedRestaurants";


function Home() {
  return (
    <>
    <MainHeader/>
    <SearchHomepage/>
    <BestRatedRestaurants/>
    <MainFooter/>
    </>
  );
}

export default Home;
