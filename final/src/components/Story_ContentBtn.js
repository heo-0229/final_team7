import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import Post2 from "./Post2";
import post_list from "./MockData";

import { FiImage } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";

const Story_ContentBtn = (props) => {
  // 버튼 탭 구현하기
  // 처음에는 0번째 인덱스 활성화git
  const [active, setActive] = useState(1);
  // 클릭한 인덱스 활성화
  const handleClick = (e) => {
    const index = parseInt(e.target.id);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <React.Fragment>
      <Icons>
        <Icon onClick={handleClick} active={active === 1} id={1}>
          <FiImage size="40"/>
        </Icon>
        <Icon onClick={handleClick} active={active === 2} id={2}>
          <HiOutlineMap size="40" />
        </Icon>
      </Icons>

      <Content active={active === 1}>
        <PostList>
          {post_list.map((p, idx) => {
            return <Post2 key={p.id} {...p}></Post2>;
          })}
        </PostList>
      </Content>
      <Content active={active === 2}>
        <Box></Box>
      </Content>
    </React.Fragment>
  );
};

const Icons = styled.div`
  position: absolute;
  left:50%;
  transform: translate(650px, 50px);
  /* right: 1%;
  top: 29%; */
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Icon = styled.button`
  aspect-ratio: 1/1;
  border-radius: 100px;
  margin: 5px;
  padding:20px;
  border: 3pt solid #eee;  
  box-sizing: border-box;
  
  color: ${(props) => (props.active ? "black" : "grey")};
  border: ${(props) => (props.active ? "2pt solid #eee" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "2pt solid #eee")};
  background-color: ${(props) => (props.active ? "white" : "#eee")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

const PostList = styled.div`
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

const Box = styled.div`
  text-align: center;
  margin: 2% auto;
  width: 1260px;
  height: 50vh;
  flex-wrap: wrap;
  background-color: #eee;
`;

const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;


export default Story_ContentBtn;
