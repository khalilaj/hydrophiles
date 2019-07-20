import {
  GET_CROPS,
  DELETE_CROPS,
  ADD_CROPS,
  CLEAR_CROPS
} from "../actions/types.js";

const initialState = {
  crops: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CROPS:
      return {
        ...state,
        crops: action.payload
      };
    case DELETE_CROPS:
      return {
        ...state,
        crops: state.crops.filter(crop => crop.id !== action.payload)
      };
    case ADD_CROPS:
      return {
        ...state,
        crops: [...state.crops, action.payload]
      };
    case CLEAR_CROPS:
      return {
        ...state,
        crops: []
      };
    default:
      return state;
  }
}
