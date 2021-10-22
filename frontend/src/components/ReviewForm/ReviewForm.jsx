// This form sends a review for a restaurant
// id_restaurant must be passed from this container parent
// Add this form to parent like this:
// <ReviewForm id_restaurant={<id>} token={token}></ReviewForm>
import StarRating from "../StarRating/StarRating";
import React, { useState } from "react";
import ReviewFormContainer from "./ReviewFormStyled";
import { SmallerButton } from "../DefaultButton/DefaultButtonStyled";
import store from "../../store";

const ReviewForm = ({ id_restaurant }) => {
  const [contentReview, setContent] = useState("");
  const [fontColorRequired, setFontColor] = useState("red");
  const [buttonState, setButtonState] = useState(true);
  const token = localStorage.getItem("luna-auth-token");

  const ta_placehoder =
    "Your review helps others learn about great local bussinesses.\n" +
    "Please, dont't review this bussiness if you received a freebie for writing this review,\n" +
    "or if you're connected in any way to the owner or employees";

  const handleText = (event) => {
    setContent(event.target.value);
    if (event.target.value === "") {
      setFontColor("red");
      setButtonState(true);
    } else {
      setFontColor("#F8F8F8");
      setButtonState(false);
    }
  };

  const handleSubmitReview = async () => {
    let newState = store.getState();

    const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/reviews/new/${id_restaurant}/`;

    const method = "POST"; // method

    const headers = new Headers({
      // headers
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    });

    const body = {
      // body
      text_content: contentReview,
      rating: newState.restaurants.restaurantRating, // change this
    };

    const config = {
      // configuration
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    };

    const response = await fetch(url, config); //fething
    const data = await response.json(); // getting the user
  };

    return (
        <ReviewFormContainer>
            <div id='main'>
                <div id='header'>
                    <StarRating height='44' width='220' review='true' stars='3' />
                    <span id='selectRating'>Select your rating</span>
                </div>
                <div id='body'>
                    <textarea 
                        id="review" 
                        name="restauran_review" 
                        rows="12" 
                        onChange={handleText}
                        placeholder={ta_placehoder}
                        value = {contentReview}
                    >
                    </textarea>
                </div>
                <div id='footer'>
                    <span id="fieldRequired" style={{color: fontColorRequired}}>This field is required</span>
                    <SmallerButton disabled={buttonState} onClick={handleSubmitReview}>SUBMIT</SmallerButton>
                </div>
            </div>
        </ReviewFormContainer>
    )
}

export default ReviewForm;