import createDataContext from "./createDataContext";

const noteReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);
    case "ADD_NOTE":
      return [...state, action.payload];
    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.title,
              content: action.payload.content,
            }
          : note
      );
    default:
      return state;
  }
};

const addNote = (dispatch) => {
  return (note, callBack) => {
    let id = Math.random() * 9999;
    dispatch({ type: "ADD_NOTE", payload: { id, ...note } });
    callBack();
  };
};

const deleteNote = (dispatch) => {
  return (id, callBack) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
    callBack();
  };
};

const updateNote = (dispatch) => {
  return (note, callBack) => {
    dispatch({ type: "UPDATE_NOTE", payload: note });
    callBack();
  };
};

export const { Context, Provider } = createDataContext(
  noteReducer,
  { addNote, deleteNote, updateNote },
  []
);
