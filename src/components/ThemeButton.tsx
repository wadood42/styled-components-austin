import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const ThemeButton = () => {
  const authContext = useContext(AuthContext);

  return (
    <button
      className='theme-btn'
      onClick={() =>
        authContext.toggleDarkMood !== undefined && authContext.toggleDarkMood()
      }>
      {authContext?.darkMood ? "White" : "Dark"}
    </button>
  );
};

export default ThemeButton;
