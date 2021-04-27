import "../App.css";
import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./Cookie";

import Signup from "../pages/Login&Signup/Signup";
import Login from "../pages/Login&Signup/Login";
import FindEmailPwd from "../pages/Login&Signup/FindEmailPwd";
import EditPwd from "../pages/Login&Signup/EditPwd";
import PostList from "../pages/PostList";
import Main from "../pages/Main";
import Story from "../pages/Story";
import EditProfile from "../pages/EditProfile";
import NotFound from "../pages/NotFound";

function App() {
  const dispatch = useDispatch();
  const token = getCookie("token"); // is_login 이라는 키값을 가진 토큰 가져와라
  const is_cookie = token ? true : false; // 그리고 is_cookie로 토큰 유무판단
  const user_info = useSelector((state) => state.user.user);

  // React.useEffect(() => {
  //   if (is_cookie) {
  //     console.log("로그인 체크");
  //     dispatch(userActions.loginCheckAPI(token));
  //   } //렌더링 마다 로그인체크
  // }, []);

  return (
    <React.Fragment>
      {/* <Responsive> */}
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/findemailpwd" exact component={FindEmailPwd} />
        <Route path="/editpwd" exact component={EditPwd} />
        <Route path="/postlist" exact component={PostList} />
        {/* story와 editprofile은 후에 /:id 붙여야함 */}
        <Route path="/story" exact component={Story} />
        <Route path="/editprofile" exact component={EditProfile} />
        {/* <Route exact component={NotFound}/> */}
      </ConnectedRouter>
      {/* </Responsive> */}
    </React.Fragment>
  );
}

// const Responsive = styled.div`
//   ${(prop) => prop.theme.responsiveContainer};
// `;

export default App;
