import {
  CommentByUserWrapper,
  CommentByUserHeaderWrapper,
  ReviewNameWrapper,
  CommentBodyWrapper,
} from "../CommentByUser/CommentByUserStyled";

const CommentByUser = (props) => {
  const datePosted = new Date(props.creationDate);
  return (
    <CommentByUserWrapper>
      <CommentByUserHeaderWrapper>
        <div>
          <ReviewNameWrapper>{`Review ${props.commentedReview}`}</ReviewNameWrapper>
        </div>
        <div>
          <span>{`${datePosted.getDate()}.${datePosted.toLocaleString(
            "default",
            { month: "long" }
          )}.${datePosted.getFullYear()} ${datePosted.getHours()}-${datePosted.getMinutes()}`}</span>
        </div>
      </CommentByUserHeaderWrapper>
      <CommentBodyWrapper>
        <p>{props.textContent}</p>
      </CommentBodyWrapper>
    </CommentByUserWrapper>
  );
};

export default CommentByUser;
