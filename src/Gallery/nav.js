import React, { useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "./context";
import { Link } from "react-router-dom";

import { useHistory } from "react-router";
import { fireAuth } from "./firebase";
import { useState } from "react/cjs/react.development";

const Nav = () => {
  const { mgs, currentUser } = useContext(AuthContext);
  console.log(mgs);
  console.log(currentUser);
  const history = useHistory();

  const logOut = async () => {
    await fireAuth.signOut();
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Logo>galleria</Logo>
        <Navigation>
          {/* {currentUser && <Link1>{`Welcome ${user.displayName}`}</Link1>} */}
          {currentUser ? (
            <LinkBtn onClick={logOut}>Log out</LinkBtn>
          ) : (
            <NavLink to="/signup">Sign In</NavLink>
          )}
        </Navigation>
      </Wrapper>
    </Container>
  );
};
export default Nav;
const NavLink = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  color: black;
  :hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;
const LinkBtn = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  :hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: arial black;
  padding: 0 20px;
`;
const Link1 = styled.div`
  padding: 0 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background: whitesmoke;
`;
