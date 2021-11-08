import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import data from "./data.json";

const GalleryDetail = () => {
  const { id } = useParams();
  const [myGallery, setMyGallery] = useState([]);

  useEffect(() => {
    setMyGallery(data[id]);
  }, [id]);
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={myGallery.gallery} />
          <NameTitle>
            <Name>{myGallery.name}</Name>
            <ArtistName>{myGallery.artistName}</ArtistName>
          </NameTitle>
          <ArtistImage src={myGallery.image} />
        </ImageContainer>
        <Content>
          <Year>{myGallery.year}</Year>
          <Description>{myGallery.description}</Description>
          <SourceLink href={myGallery.source}>GO TO SOURCE</SourceLink>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default GalleryDetail;
const ArtistImage = styled.img`
  width: 150px;
  height: 120px;
  background: transparent;
  position: absolute;
  right: -170px;
  object-fit: cover;
  bottom: 0;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 130px;
  line-height: 1;
`;
const ArtistName = styled.div``;

const NameTitle = styled.div`
  position: absolute;
  top: 20px;
  right: -180px;
  background: white;
  width: 250px;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Year = styled.div`
  font-size: 200px;
  opacity: 0.1;
  position: absolute;
  top: 0;
  right: 0;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  width: 300px;
  opacity: 0.6;
  position: absolute;
  top: 170px;
`;
const SourceLink = styled.a`
  font-size: 15px;
  color: black;
  opacity: 0.6;
  position: absolute;
  bottom: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
  padding: 0 20px;
  position: relative;
`;
const Content = styled.div`
  width: 600px;
  height: 500px;

  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
  padding: 0 20px;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
