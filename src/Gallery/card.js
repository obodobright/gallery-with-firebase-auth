import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { Link } from "react-router-dom";

const GalleryCard = () => {
  return (
    <Container>
      <Wrapper>
        {data.map((gallery, index) => (
          <Card key={index} to={`/gallerydetail/${gallery.id}`}>
            <Image src={gallery.images.gallery} />
            <Desc>
              <Name>{gallery.name}</Name>
              <ArtistName>{gallery.artist.name}</ArtistName>
            </Desc>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};
export default GalleryCard;

const Desc = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
`;
const Name = styled.div`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
const ArtistName = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 400;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Card = styled(Link)`
  width: 300px;
  height: 300px;
  background: transparent;
  transition: all 400ms;
  transfor: scale(1);
  position: relative;
  margin: 10px 5px;

  @media (max-width: 326px) {
    visibility: hidden;
  }
  :hover {
    cursor: pointer;
    box-shadow: 0px 16px 16px -10px rgb(255, 255, 255);
    transform: scale(1.02);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`;
