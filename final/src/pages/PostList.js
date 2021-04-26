import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../components/SideNav";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";
import LogBtn from "../components/LogBtn";

const PostList = () => {
  return (
    <React.Fragment>
      <SideNav />
      <LogBtn />
      <SearchBar />
      <Box></Box>
      <Post></Post>
    </React.Fragment>
  );
};

export default PostList;

const OutBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
`;

const Box = styled.div`
  height: 200px;
`;
