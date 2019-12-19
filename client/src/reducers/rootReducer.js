import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import commentsReducer from "./commentsReducer";
import favouritesReducer from "./favouritesReducer";
export default combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    comments: commentsReducer,
    favourites: favouritesReducer
})