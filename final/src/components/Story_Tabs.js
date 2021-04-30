import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import Story_MyPost from "./Story_ContentBtn";
import zIndex from "@material-ui/core/styles/zIndex";

const Story_Tabs = (props) => {
  // 탭의 타이틀과 컨텐츠 정보를 담은 배열을 만들어 놓는다.
  const Tab = [
    {
      title: "nickname님의 게시물",
      content:  <Story_MyPost />,
    },
    {
      title: "nickname님의 좋아요",
      content: <Box/>,
    },
  ];

  // 우리가 클릭한 title 탭의 content를 얻기 위해선 해당 idx가 필요하고,
  // 그 값을 return 받기 위한 함수
  const useTab = (idx, Tabs) => {
    // 매개변수가 하나라도 에러가 안뜨게 하기
    // Array.isArray(): 해당 인자가 Array인지 알려주는 매서드
    // 즉, 배열이 아니고  useTab의 매개변수가 하나만 있어도 ok
    // if (!Tabs || !Array.isArray(Tabs)) {
    //   return null;
    // }
    const [currentIdx, setCurrentIdx] = useState(idx);
    return {
      // 현재 클릭된 아이템
      currentItem: Tabs[currentIdx],
      // 새로 클릭 되어지는 아이템: setCurrentIndx로 정의하여 값에 접근해 바꿔줄 수 있다.      
      changeItem: setCurrentIdx
    };
  };

  // useTab 의 기본 값(initialTab)을 0으로 세팅, 즉 useState(0)
  const { currentItem, changeItem } = useTab(0, Tab);

  return (
    // 맵을 이용해 원하는 개수의 탭 버튼 생성
    <React.Fragment>
        <TabContainer>
      {Tab.map((t, index) => (
        <TabBtn key={index} onClick={() => changeItem(index)} active={changeItem}>{t.title}</TabBtn>
      ))}
        </TabContainer>
      <Content>{currentItem.content}</Content>
    </React.Fragment>
    
  
  );
};

const TabContainer = styled.div`
  background: #fff;
  margin: auto;
  width: 1260px;
`;

const TabBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 50%;
  padding: 30px;
  font-size: 1.5em;
  color: ${(props) => (props.active ? "black" : "grey")};
  border: ${(props) => (props.active ? "3pt solid #eee" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "3pt solid #eee")};
  background-color: ${(props) => (props.active ? "white" : "#eee")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`;

const Content = styled.div`

`;

const Box = styled.div`
  text-align: center;
  margin: 2% auto;
  width: 1260px;
  height: 50vh;
  flex-wrap: wrap;
  background-color: #eee;
`;

export default Story_Tabs;
