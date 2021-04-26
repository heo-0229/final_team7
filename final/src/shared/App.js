import "../App.css";
import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PostList from "../pages/PostList";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <React.Fragment>
      {/* <Responsive> */}
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/postlist" component={PostList} />
        {/* <Route exact component={NotFound} /> */}
      </ConnectedRouter>
      {/* </Responsive> */}
    </React.Fragment>
  );
}

const Responsive = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
  width: 70%;
  margin: auto;
`;

export default App;
