import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Grid, Text, Button, Input } from "../../elements/index";
import { actionCreators as userActions } from "../../redux/modules/user";

import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { SettingsPowerRounded } from "@material-ui/icons";
import { render } from "@testing-library/react";

const ChangePwd = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  return (
    <React.Fragment>
      <Container>
        <Title>이메일/비밀번호 찾기</Title>

        <InputStyle
          placeholder="비밀번호 입력"
          type="password"
          width="50%"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <InputStyle
          placeholder="비밀번호 재입력"
          type="password"
          width="50%"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />

        <SolidBtn background-color="grey" style={{ display: "block" }}>
          비밀번호 변경
        </SolidBtn>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 50%;
  height: 70%;
  margin: 20% auto;
  padding: 80px 50px;
  border: none;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 2vw;
  font-weight: 700;
  text-align: center;
  color: grey;
`;

const InputStyle = styled.input`
  border: none;
  ${(props) => (props.width ? `width:${props.width};` : "")}
  height: 40px;
  border-bottom: 1px grey solid;
  margin: 15px auto;
  padding: 4px;
  font-size: 1vw;
  font-weight: 500;
  color: grey;
  :focus {
    outline: none;
  }
  cursor: pointer;
`;

const SolidBtn = styled.button`
  border: none;
  width: 51%;
  min-height: 50px;
  max-height: 70px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 8px auto;
  font-size: 1vw;
  font-weight: 500;
  ${(props) => (props.color ? `color:${props.color};` : "")}
  ${(props) => (props.bg ? `background-color:${props.bg};` : "")}
  :focus {
    outline: none;
  }
  &:hover {
    color: grey;
    background-color: lightgrey;
    cursor: pointer;
  }
`;

const VertificationBtn = styled.button`
  width: 12%;
  height: 40px;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 0.9vw;
  font-weight: 500;
  color: grey;
  background-color: #ffffff;
  :focus {
    outline: none;
  }
  &:hover {
    color: grey;
    background-color: lightgrey;
    border: none;
    cursor: pointer;
  }
  position: relative;
  top: 0px;
  right: 0%;
`;

const TapUnclicked = styled.text`
  font-size: 1vw;
  color: lightgrey;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const TapClicked = styled.text`
  font-size: 1vw;
  color: grey;
  font-weight: 600;
`;

const TextBtn = styled.text`
  font-size: 1vw;
  margin: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default ChangePwd;
