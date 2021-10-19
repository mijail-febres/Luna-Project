// This container is the restaurant preview
// you can call it from your own container like this:
// <RestaurantPreview restaurant_name='The blue Oyster' restaurant_address='Some place in Zürich' restaurant_nReviews='56' restaurant_rating='2.6'/>
// All the data should be obtained from the backend, for demonstration this is hard-coded as above

import StarRating from "../StarRating/StarRating"
import RestaurantPreviewContainer from "./RestaurantPreviewStyled"
import restaurant_picture from "../../assets/jay-wennington-restaurant.jpg"

const RestaurantPreview = ({restaurant_name,restaurant_address,restaurant_nReviews,restaurant_rating}) => {
    return (
        <RestaurantPreviewContainer image={restaurant_picture}>
            <div id='header'>
                <span id='name'>{restaurant_name}</span>
                <span>{restaurant_address}</span>
            </div>
            <div id='bodyStarRating'>
                <div id='starRating'>
                    <StarRating height='30' width='150' review='false' stars={restaurant_rating} />
                </div>
                <div id='nReviews'>
                    <span>{restaurant_nReviews}</span>
                </div>
            </div>
            <div id='picture'>

            </div>
        </RestaurantPreviewContainer>
    )
}

export default RestaurantPreview