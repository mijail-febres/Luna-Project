import React from "react";
import {
  CreateReviewCommentDiv,
  InputComment,
  Button,
  Hide
} from "./CreateReviewCommentStyled";

const CreateReviewComment = () => {

    return (
    <CreateReviewCommentDiv>
        <InputComment
        type="search"
        placeholder="Post comment"
        // value={comment}
        // name="comment"
        // onChange={handleComment}
        />
        <Button>POST</Button>
        <Hide>Hide</Hide>
    </CreateReviewCommentDiv>
    );
  };
  
  export default CreateReviewComment;