import React, {useState} from "react";
import styled from "styled-components";

import { Grid, Text, Button, Input } from "../../elements/index";
import { actionCreators as userActions } from "../../redux/modules/user";

import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();

  // input 입력 값
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  // 닉네임, 이메일 중복체크
  const [nicknameDup, setNicknameDup] = React.useState(false);
  const [emailDup, setEmailDup] = React.useState(false);




  // 회원가입 버튼
  const signup = () => {
    
    // dispatch(userActions.loginAPI(nickname, email, password, passwordCheck));
  };







  return (
    <React.Fragment>
      <LoginContainer>
        <Title>Signup</Title>

        <div>
          <InputStyle
            placeholder="닉네임 입력"
            type="type"
            width="37%"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <DupCheckBtn>중복확인</DupCheckBtn>
        </div>

        <div>
          <InputStyle
            placeholder="이메일 입력"
            type="type"
            width="37%"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <DupCheckBtn>중복확인</DupCheckBtn>
        </div>

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
          회원가입하기
        </SolidBtn>
        <Grid padding="10px">
          <TextBtn onClick={() => history.push("/login")}>
            이미 회원이에요! 로그인 하러가기
          </TextBtn>
        </Grid>
      </LoginContainer>
    </React.Fragment>
  );
};

const LoginContainer = styled.div`
  width: 50%;
  height: 70%;
  margin: 20% auto;
  padding: 80px 50px;
  border: none;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 2vw;
  font-weight: 600;
  text-align: center;
  color: grey;
`;

const InputStyle = styled.input`
  border: none;
  ${(props) => (props.width ? `width:${props.width};` : "")}
  height: 30px;
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

const DupCheckBtn = styled.button`
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

const TextBtn = styled.text`
  font-size: 1vw;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Signup;
