import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { config } from "../../shared/config"

// actions
const LOG_OUT = 'LOG_OUT';
const SET_USER = 'SET_USER';

// actionCreators: createAction
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initial State
const initialState = {
    user: '', //null
    is_login: false,
    img: '',
  };

  //API요청(middleware actions)





  // reducer: handleActions(immer를 통한 불변성 유지)
export default handleActions(
    {
      [SET_USER]: (state, action) =>
        produce(state, (draft) => {
          draft.user = action.payload.user;
          draft.is_login = true;
        }),
      [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
          localStorage.removeItem('token');
          draft.user = null;
          draft.is_login = false;
        }),
    },
    initialState
  );
  
  // actionCreator export
const actionCreators = {
    setUser,
    logOut,
  };
  
  export { actionCreators };