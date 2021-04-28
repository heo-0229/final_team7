import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configStore";
import "moment";
import moment from "moment";
import { config } from "../../shared/config";

const SET_CAFE = "SET_CAFE";
const NO_CAFE = "NO_CAFE"; //음 하나를 선택하면 다른 선택들은 false가 되도록 해야하나
const SET_DAY = "SET_DAY";
const SET_NIGHT = "SET_NIGHT";

const setCafe = createAction(SET_CAFE, (is_cafe) => ({ is_cafe }));
const noCafe = createAction(NO_CAFE, (is_cafe) => ({ is_cafe }));
const setDay = createAction(SET_DAY, (is_day) => ({ is_day }));
const setNight = createAction(SET_NIGHT, (is_night) => ({ is_night }));

const initialState = {
  is_cafe: false,
  is_day: false,
  is_night: false,
};

export default handleActions(
  {
    [SET_CAFE]: (state, action) =>
      produce(state, (draft) => {
        draft.is_cafe = true;
      }),
    [NO_CAFE]: (state, action) =>
      produce(state, (draft) => {
        draft.is_cafe = false;
      }),
  },
  initialState
);

const actionCreators = { setCafe, noCafe };

export { actionCreators };
