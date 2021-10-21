// This container is the review preview
// you can call it from your own container like this:
// All the data should be obtained from the backend, for demonstration this is hard-coded as above
// call like this:
// <ReviewPreview review_name='Laurent H.' review_nReviews='6' restaurant_name='Colinz Bar' contentReview="Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell"></ReviewPreview>
// all data must be provided from backend

import React from "react";
import {Link} from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import ReviewPreviewContainer from "./ReviewPreviewStyled";
import review_picture from "../../assets/reviewPicture.png";
import icon_like from "../../assets/thumb-up.svg";
import { LikeButtonLeft, LikeButtonRight } from "../DefaultButton/DefaultButtonStyled";

const ReviewPreview = ({review_name, review_nReviews, restaurant_name, contentReview, likes, comments}) => {
    const [showLess, setShowLess] = React.useState(true);
    const length =130;
    const handleText = (event) => {
    }

    return (
        <ReviewPreviewContainer image={review_picture}>
            <div id='header'>
                <div id='picture'>

                </div>
                <div id='reviewInfo'>
                    <span id='name'>{review_name}</span>
                    <span id='reviews'>{`${review_nReviews} Reviews in total`}</span>
                </div>
            </div>
            <div id='body'>
                <span id='restaurant_name'>{restaurant_name}</span>
                <p id='review'>{ `${contentReview.slice(0, length)}...`}</p>
                <div id='read_more'>
                    <a>
                        <Link id='link' to="/profile/">read more</Link>
                    </a>
                </div>
            </div>
            <div id='footer'>
                <div id='buttons_footer'>
                    <LikeButtonLeft>
                        <img id='icon_like' src={icon_like} alt='icon like'/>
                        {`Like ${likes}`}
                    </LikeButtonLeft>
                    <LikeButtonRight>{`Comment ${comments}`}</LikeButtonRight>
                </div>
                <div id='latest_comments'>
                    <span id='label_comments'>Latest Comments</span>

                </div>
            </div>
        </ReviewPreviewContainer>
    )
}

export default ReviewPreview