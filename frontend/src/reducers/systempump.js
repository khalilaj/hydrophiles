import {
  GET_PUMPS,
  DELETE_PUMPS,
  ADD_PUMPS,
  CLEAR_PUMPS
} from "../actions/types.js";

const initialState = {
  pumps: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PUMPS:
      return {
        ...state,
        pumps: action.payload
      };
    case DELETE_PUMPS:
      return {
        ...state,
        pumps: state.pumps.filter(pump => pump.id !== action.payload)
      };
    case ADD_PUMPS:
      return {
        ...state,
        pumps: [...state.pumps, action.payload]
      };
    case CLEAR_PUMPS:
      return {
        ...state,
        pumps: []
      };
    default:
      return state;
  }
}
