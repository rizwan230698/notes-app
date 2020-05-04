import React, { useReducer } from "react";

const createDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === {addNote = (dispatch) => {return ()=> {dispatch(type:"ADD_NOTE")}}}
    const boundAction = {};
    for (key in actions) {
      boundAction[key] = actions[key](dispatch);
    }
    //boundActions === {addNote = ()=> {dispatch(type:"ADD_NOTE")}}
    return (
      <Context.Provider value={{ state, ...boundAction }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
