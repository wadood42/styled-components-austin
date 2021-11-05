import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ThemeButton from "./ThemeButton";

const Nav = () => {
  const authContext = useContext(AuthContext);

  const { darkMood } = authContext;

  console.log("RENDERING NAV");
  return (
    <NavWrapper color={`${darkMood ? "black" : "white"}`}>
      <List>
        {!authContext.signIn ? (
          <>
            <ListItem>
              <NavLink
                to='/signin'
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}>
                Sign in
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to='/signup' className='link'>
                Sign up
              </NavLink>
            </ListItem>
            <ListItem>
              <ThemeButton />
            </ListItem>
          </>
        ) : (
          <ListItem>
            <NavLink to='/profile'>Profile</NavLink>
          </ListItem>
        )}
      </List>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  /* background-color: #9191e9; */
  width: 100%;
  background-color: ${(props) => props.color};
`;

const List = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  list-style-type: none;

  width: 80%;
`;

const ListItem = styled.li`
  /* border: 1px solid red; */
`;
export default Nav;
