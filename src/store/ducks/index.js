import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as toastr } from "react-redux-toastr";
import user from "./user";

export default history =>
  combineReducers({
    user,
    toastr,
    router: connectRouter(history)
  });
