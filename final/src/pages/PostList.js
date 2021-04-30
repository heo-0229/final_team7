import React, { useState } from "react";
import styled from "styled-components";

// 컴포넌트 파일들 임포트해오기
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../components/SideNav";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";
import LogBtn from "../components/LogBtn";
import Post2 from "../components/Post2";
import Category from "../components/Category";
import Input2 from "../elements/Input2";
import Modal from "../components/Modal";
import InfiniteScroll from "react-infinite-scroll-component";

import "../Css/Modal.css";
import modal from "../redux/modules/modal";
import post_list from "../components/MockData";
import { actionCreators as PostActions } from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();

  const is_category = useSelector((state) => state.category.is_category);

  console.log(is_category);

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    dispatch(PostActions.getPostAPI());
  }, []);

  ////상태값에 따라 get요청을 보내는 것을 생각해보자!

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
      <TopBox>
        <Search>
          {/* 검색기능  */}
          <Input2
            value={search}
            placeholder="카테고리를 검색해주세요 (●'◡'●)"
            _onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></Input2>
        </Search>
      </TopBox>
      {/* 검색기능 구현 */}
      <Container>
        {post_list //포스트리스트를 필터링 해준다 // 이런식으로 카테고리 별로 구현 할 수도??
          .filter((val) => {
            if (search == "") {
              // 검색칸이 비어있을때
              return val; //val 포스트 리스트 그대로 출력!
            } else if (val.title.includes(search)) {
              return val; // axios로 받아온 제목이 검색어에 포함 되었을때
            } else if (val.content.includes(search)) {
              return val; // axios로 받아온 글쓴이가 검색어에 포함 되었을때
            }
          })
          .map((p, i) => {
            return (
              <>
                <Post2 key={i} {...p} />
              </>
            );
          })}
      </Container>
      <SideNav />
      {/* <LogBtn /> */}
      {/* <SearchBar
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      /> */}

      <Category />
      <Box></Box>
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

const TextBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 15%;
  z-index: 200;
`;

const TopBox = styled.div`
  width: 100vw;
  height: 110px;
`;

const Search = styled.div`
  margin: auto auto;
  margin-top: 130px;
  display: flex;
  width: 500px;
  margin-bottom: 20px;
  /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); */
  border: none;
`;
