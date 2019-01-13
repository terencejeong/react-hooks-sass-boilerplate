import React, { createContext, useReducer } from "react";

// creating the context
let ContextOne = createContext();

let initialState =  {
  selectedStaff: null
};

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_STAFF":
      return {
        selectedStaff: action.payload
      };
    default:
      return initialState;
  }
};

function ContextOneProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <ContextOne.Provider value={value}>
      {props.children}
    </ContextOne.Provider>
  )
}

let ContextOneConsumer = ContextOne.Consumer;

export { ContextOne, ContextOneProvider, ContextOneConsumer }

