import { FETCH_ITINERARIES, FETCH_ALL_ITINERARIES } from "./types";
import axios from "axios";

export const fetchItineraries = city => dispatch => {
  console.log("Axios working on Itineraries!");
  axios
    .get(`/itinerary/itineraries/${city}`)
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
  axios.get("/itinerary/itineraries").then(res => {
    dispatch({
      type: FETCH_ALL_ITINERARIES,
      payload: res.data
    });
  });
};