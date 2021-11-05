import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./AuthProvider";

const Signin = () => {
  const authContext = useContext(AuthContext);

  console.log("authCOntext", authContext);

  console.log("RENDERING SIGNIN");

  return (
    <Wrapper>
      <h3>Sign in page</h3>
      <button
        onClick={() =>
          authContext.userSignin !== undefined &&
          authContext.userSignin("wadood")
        }>
        Sign in
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Signin;
