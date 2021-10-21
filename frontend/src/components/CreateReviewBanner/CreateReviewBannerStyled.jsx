import styled from "styled-components";

export const RestoBannerWrapper = styled.div`
  width: 100%;
  height: 3%;
`;

export const RestoImage = styled.img`
  width: 100vw;
  height: 17vh;
  display: flex;
  position: absolute;
  top: 71px;
  object-fit: cover;
  z-index: 0;
`;

export const OpaqueOverlay = styled.div`
  z-index: 10;
  width: 100vw;
  height: 17vh;
  display: flex;
  position: absolute;
  top: 71px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NameBox = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 15%;
  left: 9%;
`;

export const RestoName = styled.div`
  display: flex;
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 30px;
  top: 6%;
  font-family: ${(props) => props.theme.fontFamilyHeader};
`;

export const RestoCategory = styled(RestoName)`
  font-weight: 300;
  font-size: 24px;
  top: 26%;
`;

export const RatingAndReviews = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  color: white;
  font-weight: bold;
  font-size: 30px;
  top: 45%;
`;

export const RestoRating = styled.div`
  display: flex;
`;

export const RestoReviews = styled.div`
  display: flex;
  padding-left: 15px;
`;

export const AddressBox = styled.div`
  width: 23vw;
  height: 27vh;
  z-index: 20;
  display: flex;
  position: absolute;
  top: 85px;
  right: 8.7%;
  flex-direction: column;
`;

export const GoogleMap = styled.img`
  height: 50%;
  width: 100%;
`;

export const Address = styled.div`
  height: 16.7%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: white;
  color: #4c4c4c;
  font-size: ${(props) => props.theme.fontMenu};
  font-family: ${(props) => props.theme.fontFamilyHeader};
`;

export const Pin = styled.img`
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Phone = styled(Address)``;

export const PhoneImg = styled(Pin)``;

export const Website = styled(Address)``;

export const WebsiteImg = styled(Pin)``;
