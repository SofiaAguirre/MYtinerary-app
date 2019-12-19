import { FETCH_CITIES } from "../actions/types";

const initialState = {
  city: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        city: action.payload
      };

    default:
      return state;
  }
}