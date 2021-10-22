// This Component shows a list of restaurants arranged in columns
// It is called like: <RestaurantBody></RestaurantBody>
// This container can be accessed without authentication
import RestaurantsBodyContainer from './RestaurantsBodyStyled';
import RestaurantPreview from '../RestaurantPreview/RestaurantPreview';
import { useHistory } from "react-router-dom";

const RestaurantsBody = ({restaurantsList}) => {
    const history = useHistory();
    const handleClickOnRestaurant = (id) => {
        history.push(`/restaurant/${id}/`);
    }

    return(
        <RestaurantsBodyContainer>
            {restaurantsList?
                restaurantsList.map((restaurant,index) =>{
                    return (
                        <div key={index} id='restaurantContainer' onClick={() => handleClickOnRestaurant(restaurant.id)}>
                            <RestaurantPreview 
                            restaurant_name={restaurant.name}
                            restaurant_address={`${restaurant.street}, ${restaurant.zip} ${restaurant.city}`} 
                            restaurant_nReviews={restaurant.num_of_reviews}
                            restaurant_rating = {restaurant.rating_sum}
                            restaurant_picture = {restaurant.image}
                            />
                        </div>
                    )
                })
            :
                <div>Nothing to show</div>
            }
        </RestaurantsBodyContainer>
    )
}

export default RestaurantsBody;