import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_PUMPS, DELETE_PUMPS, ADD_PUMPS } from "./types";

// GET PUMPS
export const getPumps = () => dispatch => {
  axios
    .get("/api/systempump/")
    .then(res => {
      dispatch({
        type: GET_PUMPS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE PUMP
export const deletePump = id => dispatch => {
  axios
    .delete(`/api/systempump/${id}/`)
    .then(res => {
      dispatch(createMessage({ deletePump: "Pump Deleted" }));
      dispatch({
        type: DELETE_PUMPS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD LEAD
export const addPump = pump => dispatch => {
  axios
    .post("/api/systempump/", pump)
    .then(res => {
      dispatch(createMessage({ addPump: "Pump Added" }));
      dispatch({
        type: ADD_PUMPS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
