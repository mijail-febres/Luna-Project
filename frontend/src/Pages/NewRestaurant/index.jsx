import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader"
import MainFooter from "../../components/MainFooter/MainFooter"
import NewRestoForm from "../../components/CreateRestaurantForm/CreateRestaurantForm"

function NewRestaurant() {
  return (
    <>
    <MainHeader/>
    <NewRestoForm/>
    <MainFooter/>
    </>
  );
}

export default NewRestaurant;