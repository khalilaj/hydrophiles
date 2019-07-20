import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_CROPS, DELETE_CROPS, ADD_CROPS } from "./types";

import { tokenConfig } from "./auth";

// GET CROPS
export const getCrops = () => (dispatch, getState) => {
  axios
    .get("/api/systemcrop/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CROPS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CROPS
export const deleteCrops = id => (dispatch, getState) => {
  axios
    .delete(`/api/systemcrop/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteCrop: "Crop Deleted" }));
      dispatch({
        type: DELETE_CROPS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD CROPS
export const addCrops = crop => (dispatch, getState) => {
  axios
    .post("/api/systemcrop/", crop, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCrop: "Crop Added" }));
      dispatch({
        type: ADD_CROPS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
