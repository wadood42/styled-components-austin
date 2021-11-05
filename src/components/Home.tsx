import React, { useContext } from "react";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import "../styles/Home.css";
import Nav from "./Nav";
import { AuthContext } from "./AuthProvider";
import Protected from "./Protected";
import styled from "styled-components";

function Home() {
  const authContext = useContext(AuthContext);

  console.log("RENDERING HOME", authContext);
  return (
    <Router>
      <HomeWrapper>
        <Nav />
        <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/protected' component={Protected} />
        </Switch>
      </HomeWrapper>
    </Router>
  );
}

const HomeWrapper = styled.div`
  /* border: 1px solid blue; */
  background-color: #d1d1d1;
  width: 700px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export default Home;
