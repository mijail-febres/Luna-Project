import {
  RestaurantByUserWrapper,
  RestaurantByUserHeaderWrapper,
  RestaurantNameWrapper,
  RestaurantBodyWrapper,
} from "../RestaurantByUser/RestaurantByUserStyled";
import StarRating from "../StarRating/StarRating";

const RestaurantByUser = (props) => {
  return (
    <RestaurantByUserWrapper>
      <RestaurantByUserHeaderWrapper>
        <div>
          <RestaurantNameWrapper>{props.restaurantName}</RestaurantNameWrapper>
        </div>
      </RestaurantByUserHeaderWrapper>
      <div id="rating">
        <StarRating
          height="25"
          width="125"
          review="false"
          stars={props.rating}
        />
      </div>
      <RestaurantBodyWrapper>
        <p>{props.textContent}</p>
        <p>{`${props.city},${props.country} Street: ${props.street}`}</p>
        <p>{`Opening hours: ${props.openingHours}`}</p>
      </RestaurantBodyWrapper>
    </RestaurantByUserWrapper>
  );
};

export default RestaurantByUser;
