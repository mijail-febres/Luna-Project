import React, { useEffect } from "react";
import { useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import RestaurantBanner from "../../components/RestaurantBanner/RestaurantBanner";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import RestaurantReviews from "../../components/RestaurantReviews/RestaurantReviews";
import {
  RestaurantReviewsInfo,
  RestaurantWrapper,
  RestaurantRevWrapper,
} from "../../Pages/Restaurant/indexStyled";
import { useParams } from "react-router-dom";
import FilterReviews from "../../components/FilterReviews/FilterReviews";

function Restaurant() {
  const params = useParams();

  const [restoReviews, setRestoReviews] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState("");
  console.log("restaurantInfo", restaurantInfo);

  const getRestoInfo = () => {
    const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/restaurants/${params.id}/`;

    const method = "GET";

    const config = {
      method: method,
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((data) => setRestaurantInfo(data));
  };

  const getRestoReviews = () => {
    const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/reviews/restaurant/${params.id}/`;

    const method = "GET";

    const config = {
      method: method,
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((data) => setRestoReviews(data));
  };

  useEffect(() => {
    getRestoReviews();
    getRestoInfo();
  }, []);

  return (
    <RestaurantWrapper>
      <MainHeader />
      {restaurantInfo?
      <RestaurantBanner
        name={restaurantInfo ? restaurantInfo.name : null}
        category={restaurantInfo ? restaurantInfo.category : null}
        rating={restaurantInfo ? restaurantInfo.rating_sum : null}
        numOfReviews={restaurantInfo ? restaurantInfo.num_of_reviews : null}
        country={restaurantInfo ? restaurantInfo.country : null}
        phone={restaurantInfo ? restaurantInfo.phone : null}
        website={restaurantInfo ? restaurantInfo.website : null}
        image={restaurantInfo ? restaurantInfo.image : null}
      />
      :
      null}
      <RestaurantReviewsInfo>
        <RestaurantRevWrapper>
          <FilterReviews />
          {restoReviews ? (
            restoReviews.map((review) => {
              return (
                <RestaurantReviews
                  id={review ? review.id : null}
                  name={review ? review.author.username : null}
                  created={review ? review.created : null}
                  text_content={review ? review.text_content : null}
                  avatar={review ? review.author.profile_picture : null}
                  total_reviews={review ? review.author.total_reviews : null}
                  like_count={review ? review.like_count : null}
                  //comments = {review? review.comments : null}
                  rating={review ? review.rating : null}
                />
              );
            })
          ) : (
            <div>
              {" "}
              No reviews yet for this restaurant. Be the first to write a
              review!{" "}
            </div>
          )}
        </RestaurantRevWrapper>
        <RestaurantInfo
          restaurantId={restaurantInfo ? restaurantInfo.id : null}
          openingHours={restaurantInfo ? restaurantInfo.opening_hours : null}
          priceLevel={restaurantInfo ? restaurantInfo.price_level : null}
        />
      </RestaurantReviewsInfo>
      <MainFooter />
    </RestaurantWrapper>
  );
}

export default Restaurant;
