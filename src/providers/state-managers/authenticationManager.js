import React, { useReducer } from "react";

const AuthContext = React.createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "all_data_to_empty":
      return { ...state, username: "", email: "" };

    case "update_data":
      console.log({ myData: action.payload });
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
  }
};

// testing one two, 1 2
console.log("Abdulhafeez");

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    username: "",
    email: "",
  });

  async function updateWithLoginData(data) {
    await dispatch({ type: "update_data", payload: data });
  }

  const boundActions = {
    updateWithLoginData,
  };

  return (
    <AuthContext.Provider value={{ state, ...boundActions }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
