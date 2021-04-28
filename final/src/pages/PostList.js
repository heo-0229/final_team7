import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../components/SideNav";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";
import LogBtn from "../components/LogBtn";
import Post2 from "../components/Post2";
import Modal from "../components/Modal";
import InfiniteScroll from "react-infinite-scroll-component";

import "../Css/Modal.css";
import modal from "../redux/modules/modal";
import post_list from "../components/MockData";

const PostList = () => {
  const dispatch = useDispatch();
  // const is_cafe = useSelector((state) => state.category.is_cafe);
  // console.log(is_cafe);

  // const selectCafe = () => {

  //   dispatch()

  // }

  return (
    <React.Fragment>
      {/* <InfiniteScroll  // 서버와 연결되면 인피니티 스크롤 게시!
        dataLength={post_list.length}
        next={next}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Container>
          {post_list.map((p, idx) => {
            return <Post2 key={p.id} {...p}></Post2>;
          })}
        </Container>
      </InfiniteScroll> */}
      <SideNav />
      {/* <LogBtn /> */}
      <SearchBar />
      <Box></Box>
      <Container>
        {post_list.map((p, idx) => {
          return <Post2 key={p.id} {...p}></Post2>;
        })}
      </Container>
    </React.Fragment>
  );
};

export default PostList;

//그리드 속성을 이렇게 줘야 모달창이 잘만들어진다!
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28%, 1fr));
  grid-auto-rows: 405px;
  grid-gap: 24px;
  text-align: center;
  margin: auto;
  width: 1266px;
  height: 100%;
  padding: 50px 200px;
  flex-wrap: wrap;
`;

const OutBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
`;

const Box = styled.div`
  height: 200px;
`;
