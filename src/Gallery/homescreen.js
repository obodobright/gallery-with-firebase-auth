import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Text> Explore our Online Museum</Text>
        <Button to="/signup">Visit Galleria</Button>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
const Text = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const Button = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  font-size: 17px;
  margin-top: 30px;
  border: 1px solid black;
  transition: all 350ms;
  text-decoration: none;
  color: black;
  :hover {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 87vh;
  background-image: url("bg.jpg");
  background-size: cover;
  background-position: center;
`;

// const Container = styled.div``;
