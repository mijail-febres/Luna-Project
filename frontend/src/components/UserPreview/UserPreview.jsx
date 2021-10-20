// This container is the user preview
// you can call it from your own container like this:
// All the data should be obtained from the backend, for demonstration this is hard-coded as above
// call like this:
// <UserPreview user_name='Laurent H.' user_nReviews='6' restaurant_name='Colinz Bar' contentReview="Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell"></UserPreview>
// all data must be provided from backend

import React from "react"
import {Link} from "react-router-dom";
import StarRating from "../StarRating/StarRating"
import UserPreviewContainer from "./UserPreviewStyled"
import user_picture from "../../assets/userPicture.png"

const UserPreview = ({user_name, user_nReviews, restaurant_name, contentReview}) => {
    const [showLess, setShowLess] = React.useState(true);
    const length =130;
    const handleText = (event) => {
    }

    return (
        <UserPreviewContainer image={user_picture}>
            <div id='header'>
                <div id='picture'>

                </div>
                <div id='userInfo'>
                    <span id='name'>{user_name}</span>
                    <span id='reviews'>{`${user_nReviews} Reviews in total`}</span>
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

            </div>
        </UserPreviewContainer>
    )
}

export default UserPreview