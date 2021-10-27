// This Component shows a list of reviews arranged in columns
// It is called like: <UserBody></UserBody>
// This container can be accessed without authentication

import ReviewsBodyContainer from './ReviewsBodyStyled';
import ReviewPreview from '../ReviewPreview/ReviewPreview';

const ReviewsBody = ({reviewsList}) => {
    const handleClickOnUser = (index) => {
        //redirect to page of user
    }

    const handleClickLike = () =>{
        //Do something
    }

    
    return(
        <ReviewsBodyContainer>
            {reviewsList.map((review,index) =>{
                return (
                    <div key={index} id='reviewContainer' onClick={index => handleClickOnUser(index)}>
                        <ReviewPreview 
                            review_id = {review.id}
                            user_name={`${review.author.username}`} 
                            user_picture={review.author.profile_picture} 
                            user_nReviews={review.author.total_reviews} 
                            restaurant_name={review.reviewed_restaurant.name} 
                            contentReview={review.text_content} 
                            likes={review.like_count} 
                            comments_count={review.comments.length}
                            comments={review.comments}
                            onClick ={(event) => handleClickLike(event)}
                        >
                        </ReviewPreview>
                    </div>
                )
            })}
        </ReviewsBodyContainer>

    )
}

export default ReviewsBody;