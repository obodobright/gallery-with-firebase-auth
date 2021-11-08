import React from "react";
import styled from "styled-components";
import GalleryCard from "./card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GalleryDetail from "./GalleryDetail";
import Nav from "./nav";
import HomeScreen from "./homescreen";
import { Signup } from "./signIn";
const Home = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/galleryCard" exact component={GalleryCard}></Route>
          <Route path="/gallerydetail/:id" exact component={GalleryDetail}></Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Home;
const Container = styled.div``;
