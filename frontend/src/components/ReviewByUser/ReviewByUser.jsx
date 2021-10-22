import ReviewByUserContainer from "./ReviewByUserStyled";
import StarRating from "../StarRating/StarRating";

const ReviewByUser = ({ restaurant_name, creation_date, review, rating }) => {
  const datePosted = new Date(creation_date);
  return (
    <ReviewByUserContainer>
      <div id="header">
        <div id="restaurant_name">
          <span id="name">{restaurant_name}</span>
        </div>
        <div id="creation">
          <span id="date_creation">{`${datePosted.getDate()}.${datePosted.toLocaleString(
            "default",
            { month: "long" }
          )}.${datePosted.getFullYear()} ${datePosted.getHours()}-${datePosted.getMinutes()}`}</span>
        </div>
      </div>
      <div id="rating">
        <StarRating height="25" width="125" review="false" stars={rating} />
      </div>
      <div id="review">
        <p id="review_text">{review}</p>
      </div>
    </ReviewByUserContainer>
  );
};

export default ReviewByUser;
