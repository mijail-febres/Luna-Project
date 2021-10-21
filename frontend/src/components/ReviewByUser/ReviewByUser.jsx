const ReviewByUser = ({restaurant_name, creation_date, review, rating}) => {
    return (
        <ReviewByUserContainer>
            <div id='header'>
                <div id='restaurant_name'>
                    <span id='name'>{restaurant_name}</span>
                </div>
                <div id='creation'>
                    {/* <span id='date_creation'>{creation_date}</span> */}
                    <span id='date_creation'>01.01.2018 15:22</span>
                </div>
            </div>
            <div id='rating'>
                <StarRating height='25' width='125' review='false' stars='3.7' />
            </div>
            <div id='review'>
                <p id='review_text'>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service. </p>
            </div>
        </ReviewByUserContainer>
    )
}

export default ReviewByUser;
