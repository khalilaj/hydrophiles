import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_SYSTEMS, DELETE_SYSTEMS, ADD_SYSTEMS } from "./types";
import { tokenConfig } from "./auth";

// GET SYSTEM
export const getSystem = () => (dispatch, getState) => {
  axios
    .get("/api/system/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_SYSTEMS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE SYSTEM
export const deleteSystem = id => (dispatch, getState) => {
  axios
    .delete(`/api/system/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "System Deleted" }));
      dispatch({
        type: DELETE_SYSTEMS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD SYSTEM
export const addSystem = system => (dispatch, getState) => {
  axios
    .post("/api/system/", system, tokenConfig(getState), {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    .then(res => {
      dispatch(createMessage({ addSystem: "System Added" }));
      dispatch({
        type: ADD_SYSTEMS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
