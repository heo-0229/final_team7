import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import Post2 from "./Post2";
import post_list from "./MockData";

import { FiImage } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";

const Story_Content = (props) => {
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
      <Wrapper>
      <Icons>
        <Icon onClick={handleClick} active={active === 1} id={1}>
          <FiImage size="40" />
        </Icon>
        <Icon onClick={handleClick} active={active === 2} id={2}>
          <HiOutlineMap size="40" />
        </Icon>
      </Icons>

      <Content active={active === 1}>
        <GridList>
          {post_list.map((p, idx) => {
            return <Post2 key={p.id} {...p}></Post2>;
          })}
        </GridList>
      </Content>
      <Content active={active === 2}>
        <Box></Box>
      </Content>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
`;

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
  
  color: ${(props) => (props.active ? "grey" : "grey")};
  border: ${(props) => (props.active ? "2pt solid #eee" : "")};
  background-color: ${(props) => (props.active ? "white" : "#eee")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: lightgrey;
    color: #eee;
    border:lightgrey;
  }
`;

const GridList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 50 auto;
  width: 100%;
  padding: 50px 0px;
  flex-wrap: wrap;

  @media (max-width: 1440px) {
      width: 1280px;
      grid-template-columns: 1fr 1fr 1fr;
      margin: auto;
    }
    
    @media (max-width: 1312px) {
      width: 912px;
      grid-template-columns: 1fr 1fr 1fr;
      margin: auto;
    }
    @media (max-width: 944px) {
      width: calc(100% - 2rem);
      grid-template-columns: 1fr 1fr;
      margin: auto;
    }
    @media (max-width: 767px) {
      width: calc(100% - 2rem);
      grid-template-columns: 1fr;
      margin: auto;
    }
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


export default Story_Content;
