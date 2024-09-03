import { createStore } from "redux";

const INITIAL_STATE = {
  english: true,
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LANGUAGE") {
    return {
      ...state,
      english: action.english,
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;
