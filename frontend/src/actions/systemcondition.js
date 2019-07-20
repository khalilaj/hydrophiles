import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_CONDITIONS, DELETE_CONDITIONS, ADD_CONDITIONS } from "./types";

// GET CONDITIONS
export const getConditions = () => dispatch => {
  axios
    .get("/api/systemcondition/")
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
export const deleteConditions = id => dispatch => {
  axios
    .delete(`/api/systemcondition/${id}/`)
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
export const addConditions = condition => dispatch => {
  axios
    .post("/api/systemcondition/", condition)
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
