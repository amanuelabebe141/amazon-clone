import { createContext, useReducer } from "react";

export const Data = createContext();

export const DataProvider = ({ children, Reducer, InitialState }) => {
  return (
    <Data.Provider value={useReducer(Reducer, InitialState)}>
      {children}
    </Data.Provider>
  );
};
