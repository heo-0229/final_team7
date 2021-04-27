import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  return (
    <React.Fragment>
      <CategoryBox>
        <Btn
          onClick={() => {
            history.push("/");
          }}
        >
          주경
        </Btn>
        <Btn>야경</Btn>
        <Btn>카페</Btn>
        <Btn>자연경관</Btn>
        <Btn>치킨</Btn>
        <Btn>주경</Btn>
        <Btn>주경</Btn>
        <Btn>주경</Btn>
        <Btn>주경</Btn>
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
  height: 130px;
  /* background-color: red; */
`;

const Btn = styled.button`
  margin: 2px;
  padding: 3px 13px;
  background-color: white;
  border-radius: 50px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  cursor: pointer;
`;
