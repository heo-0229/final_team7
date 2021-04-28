import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as categoryActions } from "../redux/modules/category";

const Category = () => {
  const dispatch = useDispatch();

  const is_cafe = useSelector((state) => state.category.is_cafe);
  console.log(is_cafe);

  return (
    // 해당 카테고리 클릭시 넘어온 포스트 중에서 카테고리가 일치한 것만 return 해줘야한다!
    // 한가지 방법은 카테고리마다 페이지를 만들어서 클릭시 다른 페이지 렌더링
    // 다른 방법은 PostList페이지에서 map을 돌리는 조건을 is_cafe? 로 돌리고 p.category가 cafe인것만 출력되게 돌림
    <React.Fragment>
      <CategoryBox>
        <Btn
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); //이렇게 이벤트 버블을 막아줘서 카테고리를 클릭해도 사이드바가 사라지지 않음
            // history.push("/postlist");
          }}
        >
          전체보기
        </Btn>
        <Btn
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation(); //이렇게 이벤트 버블을 막아줘서 카테고리를 클릭해도 사이드바가 사라지지 않음
            // history.push("/cafe");
          }}
        >
          카페
        </Btn>
        <Btn>카페</Btn>
        <Btn>야경</Btn>
        <Btn>바다</Btn>
        <Btn>산</Btn>
        <Btn>도심</Btn>
        <Btn>전시</Btn>
        <Btn>공원</Btn>
        <Btn>꽃</Btn>
        <Btn>나홀로</Btn>
        <Btn>연인</Btn>
        <Btn>친구</Btn>
        <Btn>반려동물</Btn>
      </CategoryBox>
    </React.Fragment>
  );
};

export default Category;

const CategoryBox = styled.div`
  /* display: flex;
justify-content: space-between; */
  margin-top: 10px;
  width: 210px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 8px 0px;
  /* height: 100px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: lightgrey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  } */
`;

const Btn = styled.button`
  margin: 2px;
  padding: 3px 5px;
  background-color: white;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  cursor: pointer;
  font-size: 12px;
`;
