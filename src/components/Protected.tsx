import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const Protected = () => {
  const authContext = useContext(AuthContext);

  console.log("RENDERING PROTECTED");

  if (!authContext?.signIn) {
    <Redirect />;
  }
  return (
    <div>
      <h3>PROTECT LAND</h3>
    </div>
  );
};

export default Protected;
