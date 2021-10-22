import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import CreateReviewBanner from "../../components/CreateReviewBanner/CreateReviewBanner";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ReviewBodyWrapper = styled.div`
  position: absolute;
  top: 250px;
  left: 20%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageWrapper = styled.div`
  background: grey;
`;

function Review() {
  const params = useParams();
  console.log("params", params);
  return (
    <PageWrapper>
      <MainHeader />
      <ReviewBodyWrapper>
        <CreateReviewBanner />
        <ReviewForm id_restaurant={params.id} />
      </ReviewBodyWrapper>
      <MainFooter />
    </PageWrapper>
  );
}

export default Review;
