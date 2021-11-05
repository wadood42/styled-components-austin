import React, { useMemo, useReducer, createContext } from "react";

import authReducer from "../contexts/authReducer";
import { ActionKind } from "../contexts/authReducer";
interface AuthContextInterface {
  signIn: boolean;
  username: string | null;
  darkMood: boolean;
  userSignin?: (userData: string) => void;
  toggleDarkMood?: () => void;
}

const initialValues: AuthContextInterface = {
  signIn: false,
  username: null,
  darkMood: false,
};

const AuthContext = createContext<AuthContextInterface>(initialValues);

const AuthProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  const authHelperFuncs = {
    userSignin(userData: string) {
      dispatch({
        type: ActionKind.Signin,
        payload: userData,
      });
    },

    toggleDarkMood() {
      dispatch({
        type: ActionKind.ToggleTheme,
        payload: null,
      });
    },
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        ...authHelperFuncs,
      }}
      {...props}
    />
  );
};

export { AuthProvider, AuthContext };
