// This page can be viewed without authentication and shows the 4 best rated restaurants and a search bar
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import RestaurantPreview from "../RestaurantPreview/RestaurantPreview";
import {
  BestRated,
  FormTitle,
  UnderLineTitle,
  BestRatedBody,
} from "../BestRatedRestaurants/BestRatedRestaurantsStyled";

const BestRatedRestaurants = () => {
  const [bestRated, setBestRated] = useState("");

  useEffect(() => {
    getBestRestaurants();
  }, []);

  const getBestRestaurants = () => {
    const url = "https://luna-dhmp.propulsion-learn.ch/backend/api/home/";

    const method = "GET";

    const config = {
      method: method,
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((data) => setBestRated(data));
  };

  let state = {
    bestRated: bestRated,
  };

  const history = useHistory();

  const handleClickOnResto = (id) => {
    history.push(`/restaurant/${id}/`);
  };

  return (
    <BestRated>
      <FormTitle>BEST RATED RESTAURANTS</FormTitle>
      <UnderLineTitle />

      <BestRatedBody>
        {state.bestRated ? (
          state.bestRated.map((restaurant) => {
            return (
              <div
                key={restaurant.id}
                id="RestaurantPreview"
                onClick={() => handleClickOnResto(restaurant.id)}
              >
                <RestaurantPreview
                  restaurant_name={restaurant.name}
                  restaurant_address={`${restaurant.street}, ${restaurant.zip} ${restaurant.city}`}
                  restaurant_nReviews={restaurant.num_of_reviews}
                  restaurant_rating={restaurant.rating_sum}
                  restaurant_picture={restaurant.image}
                />
              </div>
            );
          })
        ) : (
          <div>Nothing to show</div>
        )}
      </BestRatedBody>
    </BestRated>
  );
};

export default BestRatedRestaurants;
