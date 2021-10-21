import React from "react";
import {
  PostCommentDiv,
  InputComment,
  Button,
  Hide
} from "../PostComment/PostCommentStyled";

const PostComment = () => {

    return (
    <PostCommentDiv>
        <InputComment
        type="search"
        placeholder="Post comment"
        // value={comment}
        // name="comment"
        // onChange={handleComment}
        />
        <Button>POST</Button>
        <Hide>Hide</Hide>
    </PostCommentDiv>
    );
  };
  
  export default PostComment;