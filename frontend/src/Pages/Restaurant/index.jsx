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
import FilterReviews from "../../components/FilterReviews/FilterReviews"

function Restaurant() {
  const params = useParams();

  const [restoReviews, setRestoReviews] = useState("");

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

  useEffect(getRestoReviews, []);

  return (
    <RestaurantWrapper>
      <MainHeader />
      <RestaurantBanner />
      <FilterReviews/>
      <RestaurantReviewsInfo>
          <RestaurantRevWrapper>
          {restoReviews ? (
            restoReviews.map((review) => {
              return (
                <RestaurantReviews
                  id={review ? review.id : null}
                  name = {review ? review.author.username : null}
                  created={review ? review.created : null}
                  text_content={review ? review.text_content : null}
                  profile_picture = {review? review.author.profile_picture : null}
                  total_reviews = {review? review.author.total_reviews : null}
                  like_count = {review? review.like_count : null}
                  //comments = {review? review.comments : null}
                  rating = {review? review.rating : null}
                />
              );
            })
          ) : (
            <div>
              {" "}
              No reviews yet for this restaurant. Be the first to write a review!{" "}
            </div>
          )}
          </RestaurantRevWrapper>
          <RestaurantInfo />
      </RestaurantReviewsInfo>
      <MainFooter />
    </RestaurantWrapper>
  );
}

export default Restaurant;
