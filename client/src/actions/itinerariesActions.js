import { FETCH_ITINERARIES, FETCH_ALL_ITINERARIES } from "./types";
import axios from "axios";

export const fetchItineraries = city => dispatch => {
  console.log("Axios working on Itineraries!");
  axios
    .get(`http://localhost:5000/itinerary/itineraries/${city}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_ITINERARIES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const fetchAllAxiosItineraries = () => dispatch => {
  axios.get("http://localhost:5000/itinerary/itineraries").then(res => {
    dispatch({
      type: FETCH_ALL_ITINERARIES,
      payload: res.data
    });
  });
};