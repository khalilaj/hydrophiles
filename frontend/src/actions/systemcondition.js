import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_CONDITIONS, DELETE_CONDITIONS, ADD_CONDITIONS } from "./types";

import { tokenConfig } from "./auth";

// GET CONDITIONS
export const getConditions = () => (dispatch, getState) => {
  axios
    .get("/api/systemcondition/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_CONDITIONS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE CONDITIONS
export const deleteConditions = id => (dispatch, getState) => {
  axios
    .delete(`/api/systemcondition/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteConditions: "Condition Deleted" }));
      dispatch({
        type: DELETE_CONDITIONS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD CONDITIONS
export const addConditions = condition => (dispatch, getState) => {
  axios
    .post("/api/systemcondition/", condition, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addCondition: "Condition Added" }));
      dispatch({
        type: ADD_CONDITIONS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
