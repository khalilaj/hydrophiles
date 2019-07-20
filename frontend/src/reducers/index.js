import { combineReducers } from "redux";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

import system from "./system";
import crops from "./systemcrop";
import pumps from "./systempump";
import conditions from "./systemcondition";

export default combineReducers({
  auth,
  messages,
  errors,
  system,
  crops,
  pumps,
  conditions
});
