import { Observable } from "rxjs/Rx";
import { HttpService } from "../../services/http";
import PATH from "./../../config/path";
import config from "./../../config/config";
import { authAction } from "../action/index";
import { SIGNUP, LOGIN, LOGOUT, IS_LOGGED_IN } from "../constants";

export default class authEpic {
  static signup = (action$) => {
    return action$;
  };
  static login = (action$) => {
    return action$;
  };
  static logout = (action$) => {
    return action$;
  };
  static isLoggedIn = (action$) => {
    return action$;
  };
}
