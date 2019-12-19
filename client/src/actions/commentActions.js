import axios from "axios";
import { FETCH_COMMENTS, POST_COMMENTS, FETCH_ALL_COMMENTS } from "./types";

export const fetchAxiosComments = ItineraryId => dispatch => {
  axios.get(`http://localhost:5000/comment/comments/${ItineraryId}`).then(res => {
    dispatch({
      type: FETCH_COMMENTS,
      payload: res.data
    });
  });
};
export const fetchAllAxiosComments = () => dispatch => {
  axios.get("http://localhost:5000/comment/comments").then(res => {
    dispatch({
      type: FETCH_ALL_COMMENTS,
      payload: res.data
    });
  });
};
export const postAxiosCommentSuccess = data => {
  return {
    type: POST_COMMENTS,
    payload: {
      message: data.message,
      username: data.username,
      profileImg: data.profileImg,
      ItineraryId: data.ItineraryId
    }
  };
};

export const postAxiosComments = ({
  message,
  username,
  profileImg,
  ItineraryId
}) => {
  return dispatch => {
    return axios
      .post("http://localhost:5000/comment/comments", { message, username, profileImg, ItineraryId })
      .then(res => {
        dispatch(postAxiosCommentSuccess(res.data));
      })
  };
};