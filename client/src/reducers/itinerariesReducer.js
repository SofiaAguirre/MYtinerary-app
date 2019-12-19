import { FETCH_ITINERARIES, FETCH_ALL_ITINERARIES } from "../actions/types";

const initialState = {
  itinerary: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES:
      return {
        ...state,
        itinerary: action.payload
      };
      case FETCH_ALL_ITINERARIES:
      return {
        ...state,
        itinerary: action.payload
      };
    default:
      return state;
  }
}