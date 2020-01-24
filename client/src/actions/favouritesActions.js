import axios from "axios";
import { FETCH_FAVOURITES, POST_FAVOURITES, DELETE_FAVOURITES } from "./types";

export const fetchAxiosFavourites = UserId => dispatch => {
  axios.get(`/favourite/favourites/${UserId}`).then(res => {
    dispatch({
      type: FETCH_FAVOURITES,
      payload: res.data
    });
  })
    .catch(err => {
      console.log(err);
    });
};
export const deleteAxiosFavourites = favouriteId => dispatch => {
  axios.delete(`/favourite/favourites/${favouriteId}`).then(res => {
    dispatch({
      type: DELETE_FAVOURITES,
      payload: res.data
    });
    window.location.reload();
  })
};
export const postAxiosFavouritesSuccess = data => {
  return {
    type: POST_FAVOURITES,
    payload: {
      ItineraryId: data.ItineraryId,
      UserId: data.UserId
    }
  };
};

export const postAxiosFavourites = ({
  ItineraryId,
  UserId
}) => {
  return dispatch => {
    return axios
      .post("/favourite/favourites", { ItineraryId, UserId })
      .then(res => {
        console.log(res.data)
        if (typeof res.data !== 'string') {
          dispatch(postAxiosFavouritesSuccess(res.data));
        }
      })
  };
};