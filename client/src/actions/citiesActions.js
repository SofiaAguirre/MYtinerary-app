import { FETCH_CITIES } from "./types";
import axios from "axios";

export const fetchCities = () => dispatch => {
  console.log("Axios working on cities!");
  axios
    .get("http://localhost:5000/api/cities")
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_CITIES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};