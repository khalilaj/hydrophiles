import {
  GET_CONDITIONS,
  DELETE_CONDITIONS,
  ADD_CONDITIONS,
  CLEAR_CONDITIONS
} from "../actions/types.js";

const initialState = {
  conditions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONDITIONS:
      return {
        ...state,
        conditions: action.payload
      };
    case DELETE_CONDITIONS:
      return {
        ...state,
        conditions: state.pumps.filter(
          condition => condition.id !== action.payload
        )
      };
    case ADD_CONDITIONS:
      return {
        ...state,
        conditions: [...state.conditions, action.payload]
      };
    case CLEAR_CONDITIONS:
      return {
        ...state,
        conditions: []
      };
    default:
      return state;
  }
}
