import React, { useReducer } from "react";

interface State {
  username: string | null;
  signIn: boolean;
  darkMood: boolean;
}

export enum ActionKind {
  Signin = "SIGN_IN",
  Signout = "SIGN_OUT",
  ToggleTheme = "TOGGLE_THEME",
}
interface Action {
  type: ActionKind;
  payload: string | null;
}

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        signIn: true,
        username: action.payload,
      };

    case "SIGN_OUT":
      return {
        ...state,
        signIn: false,
        username: null,
      };

    case ActionKind.ToggleTheme:
      return {
        ...state,
        darkMood: !state.darkMood,
      };

    default:
      return state;
  }
}

export default authReducer;
