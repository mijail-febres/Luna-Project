import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import CreateReviewBanner from "../../components/CreateReviewBanner/CreateReviewBanner";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import styled from "styled-components";

const ReviewBodyWrapper = styled.div`
  position: absolute;
  top: 201px;
  left: 30%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageWrapper = styled.div`
  background: grey;
`;

function Review() {
  return (
    <PageWrapper>
      <MainHeader />
      <ReviewBodyWrapper>
        <CreateReviewBanner />
        <ReviewForm />
      </ReviewBodyWrapper>
      <MainFooter />
    </PageWrapper>
  );
}

export default Review;
