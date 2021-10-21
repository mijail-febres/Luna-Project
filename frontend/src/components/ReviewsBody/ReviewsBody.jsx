// This Component shows a list of reviews arranged in columns
// It is called like: <UserBody></UserBody>
// This container can be accessed without authentication

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../store/actions';
import ReviewsBodyContainer from './ReviewsBodyStyled';
import UserPreview from '../UserPreview/UserPreview';

const ReviewsBody = ({reviewsList}) => {
    const dispatch = useDispatch();


    useEffect(() => {
        getUserInformation();
    }, []);

    const getUserInformation = async () => {
        const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/reviews/';

        const method = 'GET'; // method

        const config = { // configuration
            method : method,
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user

        dispatch(setReviews(data)) // update user list with middleware

    }

    const handleClickOnUser = (index) => {
        //redirect to page of user
    }

    return(
        <ReviewsBodyContainer>
            {reviewsList.map((review,index) =>{
                return (
                    <div key={index} id='reviewContainer' onClick={index => handleClickOnUser(index)}>
                        <ReviewPreview 
                            user_name={`${review.author.username}`} 
                            user_picture={review.author.profile_picture_url} 
                            user_nReviews={review.author.total_reviews} 
                            restaurant_name={review.reviewed_restaurant.name} 
                            contentReview={review.text_content} 
                            likes={review.like_count} 
                            comments_count={review.comments.length}
                            comments={review.comments}
                        >
                        </ReviewPreview>
                    </div>
                )
            })}
        </ReviewsBodyContainer>

    )
}

export default ReviewsBody;