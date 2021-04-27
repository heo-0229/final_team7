import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Grid, Text, Button, Input } from "../../elements/index";
import { actionCreators as userActions } from "../../redux/modules/user";

import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

const FindEmailPwd = () => {
  const dispatch = useDispatch();

  const [FindEmailMode, setFindEmailMode] = useState(true);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  const onFindEmail = () => {

    // 닉네임이 존재하면 (is_nickname ? true)
    // useSelector로 email 가져오기
    // if (is_nickname) {
    //   alert(
    //     "등록된 이메일은 ${email} 입니다."
    //   );
    //   return false;
    // }
  };

  const onVertification = () => {
    // 이메일이 존재하면?? 이메일 값을 받아서
    // if (is_email) {
    //   alert(
    //     "입력하신 이메일({email})로 인증번호가 전송되었습니다."
    //   );
    //   return false;
    // }
  };

  const onFindPwd = () => {
    //  인증번호가 일치하면 비밀번호 변경 페이지로 
    history.push('editpwd')
  };

  if (FindEmailMode) {
    return (
      <React.Fragment>
        <Container>
          <Title>이메일/비밀번호 찾기</Title>
          <Tab>
            <ClickedTab>이메일 찾기 </ClickedTab>
            <text>|</text>
            <UnclickedTab
              onClick={() => {
                setFindEmailMode(false);
              }}
            >
              비밀번호 찾기
            </UnclickedTab>
          </Tab>

          <InputStyle
            placeholder="닉네임을 입력"
            type="type"
            width="97%"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <SolidBtn
            background-color="grey"
            style={{ display: "block" }}
            onClick={onFindEmail}
          >
            이메일 찾기
          </SolidBtn>
          <TextBtn onClick={() => history.push("/login")}>
            로그인으로 돌아가기
          </TextBtn>
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Container>
          <Title>이메일/비밀번호 찾기</Title>
          <Tab>
            <UnclickedTab
              onClick={() => {
                setFindEmailMode(true);
              }}
            >
              이메일 찾기
            </UnclickedTab>
            <text style={{color:"grey"}}>|</text>
            <ClickedTab>비밀번호 찾기</ClickedTab>
          </Tab>
          <div>
            <InputStyle
              placeholder="이메일 입력"
              type="type"
              width="70%"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <VertificationBtn
            onClick = {onVertification}>인증번호전송</VertificationBtn>
          </div>

          <InputStyle
            placeholder="인증번호를 입력"
            type="type"
            width="97%"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <SolidBtn background-color="grey" style={{ display: "block" }}
          onClick={onFindPwd}>
            비밀번호 찾기
          </SolidBtn>
          <Grid padding="10px">
            <TextBtn onClick={() => history.push("/login")}>
              로그인으로 돌아가기
            </TextBtn>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
};

const Container = styled.div`
  width: 25%;
  height: 70%;
  margin: 10% auto;
  padding: 80px 50px;
  border: none;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 1.5vw;
  font-weight: 600;
  text-align: center;
  color: #343a40;
`;

const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0px 5px 0px;
`;

const UnclickedTab = styled.button`
  width: 50%;
  aspect-ratio: 5/1;
  font-size: 1vw;
  background-color: #ffffff;
  border: none;
  :focus {
    outline: none;
  }
  color: lightgrey;

  &:hover {
    background-color: #eee;
    color: grey;
    cursor: pointer;
  }
`;

const ClickedTab = styled.button`
  width: 50%;
  aspect-ratio: 5/1;
  font-size: 1vw;
  font-weight: bold;
  background-color: #ffffff;
  color: #343a40;
  border: none;
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
  width: 100%;
  min-height: 50px;
  max-height: 70px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 8px 0px 8px 0px;
  font-size: 0.8vw;
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
  width: 25%;
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
  font-size: 0.8vw;
  margin: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default FindEmailPwd;
