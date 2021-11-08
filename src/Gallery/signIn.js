import React, { useState } from "react";
import styled from "styled-components";
import { fireAuth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { collection, doc, setDoc } from "@firebase/firestore";
import { firestore } from "./firebase";
export const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const signUpUser = async () => {
    setError(null);
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(fireAuth, email, password);
      if (!res) {
        throw Error("an error occured");
      }
      updateProfile(res.user, { displayName });
      if (res) {
        const docRef = doc(firestore, "galleryData", res.user.uid);
        const payload = { email, password, displayName };
        await setDoc(docRef, payload);
      }
      history.push("/galleryCard");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <FormHolder>
          <FormText>Hello, sign up to see exciting Art galleria from awesome artists</FormText>
          <Input
            placeholder="Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isPending && <Button onClick={signUpUser}>Sign Up</Button>}
          {isPending && <Button>Loading...</Button>}
          {error && <p>{error}</p>}
        </FormHolder>
      </Wrapper>
    </Container>
  );
};

// const Container= styled.div``
const FormText = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  padding: 10px 20px;
  background: lightgray;
  color: black;
  border-radius: 5px;
  font-weight: bold;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background: gray;
    color: white;
  }
`;
const FileInput = styled.input`
  display: none;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: black;
`;
const InputLabel = styled.label`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  background: lightgray;
  color: black;
  margin: 10px 0;
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 10px 0;
  outline: none;
  padding-left: 5px;
`;
const FormHolder = styled.div`
  width: 500px;
  min-height: 400px;
  margin-top: 20px;
  border: 1px solid lightgray;
  box-shadow: -10px 1px 43px -6px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: -10px 1px 43px -6px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: -10px 1px 43px -6px rgba(0, 0, 0, 0.54);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
