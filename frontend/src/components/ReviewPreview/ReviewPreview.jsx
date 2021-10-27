// This container is the review preview
// you can call it from your own container like this:
// All the data should be obtained from the backend, for demonstration this is hard-coded as above
// call like this:
// <ReviewPreview user_name='Laurent H.' user_picture='' user_nReviews='6' restaurant_name='Colinz Bar' contentReview="Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell"></ReviewPreview>
// all data must be provided from backend

import React, {useState} from "react";
import {Link} from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import ReviewPreviewContainer from "./ReviewPreviewStyled";
import user_default_picture from "../../assets/default-user.jpg";
import icon_like from "../../assets/thumb-up.svg";
import { LikeButtonLeft, LikeButtonRight } from "../DefaultButton/DefaultButtonStyled";
import { useDispatch, useSelector } from 'react-redux';
import { setReviews } from '../../store/actions';

const ReviewPreview = ({review_id, user_name, user_picture, user_nReviews, restaurant_name, contentReview, likes, comments_count, comments}) => {
    const dispatch = useDispatch();
    const [showLess, setShowLess] = useState(true);
    const [loc_likes, setLikes] = useState(likes);
    const length =130;

    const handleOnClickLike = () => {
        likeUnlikeReview(review_id);
    }

    const likeUnlikeReview = async (item) => {

        const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/reviews/like/${item}/`;

        const method = 'POST'; // method

        const token = localStorage.getItem("luna-auth-token");

        if (token) {
            const headers = new Headers({
                Authorization: `Bearer ${token}`,
            });

            const config = { // configuration
                method : method,
                headers,
            }

            const response = await fetch(url, config);  //fething
            const data     = await response.json();  // getting the user
            setLikes(data.like_count)
        }

    }

    return (
        <ReviewPreviewContainer image={user_picture?user_picture:user_default_picture}>
            <div id='header'>
                <div id='picture'>

                </div>
                <div id='reviewInfo'>
                    <span id='name'>{user_name}</span>
                    <span id='reviews'>{`${user_nReviews} Reviews in total`}</span>
                </div>
            </div>
            <div id='body'>
                <span id='restaurant_name'>{restaurant_name}</span>
                <p id='review'>{`${contentReview.slice(0, length)}...`}{contentReview? contentReview.length>length?<a><Link id='link' to="/profile/">read more</Link></a>:'':''}</p>
            </div>
            <div id='footer'>
                <div id='buttons_footer'>
                    <LikeButtonLeft id='button_left' onClick={handleOnClickLike}>
                        <img id='icon_like' src={icon_like} alt='icon like'/>
                        <span>{`Like ${loc_likes}`}</span>
                    </LikeButtonLeft>
                    <LikeButtonRight>{`Comment ${comments_count}`}</LikeButtonRight>
                </div>
                <div id='latest_comments'>
                    <span id='label_comments'>Latest Comments</span>
                    {comments.length>0?
                        comments.map((comment,index) => {
                            if (index < 2) {
                                return(
                                    <div key={index} className='Comments'>
                                        <span className='comment_author'>{comment.author_comment.username}</span>
                                        <span className='comment_content'>{comment.text_content}</span>
                                    </div>
                                );
                            }
                        })
                    :
                        null
                    }
                </div>
            </div>
        </ReviewPreviewContainer>
    )
}

export default ReviewPreview
