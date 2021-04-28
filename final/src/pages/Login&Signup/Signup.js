import React, { useState } from "react";
import styled from "styled-components";
import signup from "../../scss/signup.css";

import { Grid, Text, Button, Input } from "../../elements/index";
import { actionCreators as userActions } from "../../redux/modules/user";
import {
  nicknameRegCheck,
  emailRegCheck,
  pwdRegCheck,
  pwdRegContinuousCheck,
} from "../../shared/common";

import { history } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

const Signup = (props) => {
  const dispatch = useDispatch();

  // input 입력 값
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [rePwd, setRePwd] = React.useState("");

  // 닉네임, 이메일 중복체크
  const [nicknameDup, setNicknameDup] = React.useState(false);
  const [emailDup, setEmailDup] = React.useState(false);


  // 조건 충족 여부에 따라  info를 다르게
  // querySelector를 이용하면 ''안에 해당되는 태그가 여러개 일 경우 그 첫번째 것만 선택한다.
  // 따라서 선택하고자 하는 것이 명확하다면 ''안에 몇번째 child 인지까지 정확하게 입력하거나 className 사용하기


  // 닉네임 정규식 검사(info 컬러 바꿔주기)
  const changeNickname = (e) => {
    setNickname(e.target.value);
    const nicknameInfo = document.querySelector(
      "ul.checkNickname li:nth-child(1)"
    );

    if (!nicknameRegCheck(e.target.value)) {
      nicknameInfo.classList.add("error");
      nicknameInfo.classList.remove("ok");
    } else {
      nicknameInfo.classList.add("ok");
      nicknameInfo.classList.remove("error");
    }
  };

   // 이메일 형식
   const changeEmail = (e) => {
    setEmail(e.target.value);
    const emailInfo = document.querySelector("ul.checkEmail li:nth-child(1)");
    if (!emailRegCheck(e.target.value)) {
      emailInfo.classList.add("error");
      emailInfo.classList.remove("ok");
    } else {
      emailInfo.classList.add("ok");
      emailInfo.classList.remove("error");
    }
    
  };
  

  // 비밀번호 정규식 검사(info 컬러 바꿔주기)
  const changePwdReg = (e) => {
    setPwd(e.target.value);
    const pwdInfo_len = document.querySelector("ul.checkPwd li:nth-child(1)");
    const pwdInfo_match = document.querySelector("ul.checkPwd li:nth-child(2)");
    const pwdInfo_continuous = document.querySelector(
      "ul.checkPwd li:nth-child(3)"
    );

    // 비밀번호 길이
    if (e.target.value.length < 10) {
      pwdInfo_len.classList.add("error");
      pwdInfo_len.classList.remove("ok");
    } else {
      pwdInfo_len.classList.remove("error");
      pwdInfo_len.classList.add("ok");
    }

    // 비밀번호 정규식 검사 : /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/
    if (!pwdRegCheck(e.target.value)) {
      pwdInfo_match.classList.add("error");
      pwdInfo_match.classList.remove("ok");
    } else {
      pwdInfo_match.classList.add("ok");
      pwdInfo_match.classList.remove("error");
    }

    // 비밀번호 연속 체크
    if (pwdRegContinuousCheck(e.target.value)) {
      pwdInfo_continuous.classList.add("error");
      pwdInfo_continuous.classList.remove("ok");
    } else {
      pwdInfo_continuous.classList.add("ok");
      pwdInfo_continuous.classList.remove("error");
    }
  };

  
  // 비밀번호 확인 정규식 검사(info 컬러 바꿔주기)
  const changeRePwd = (e) => {
    setRePwd(e.target.value);
    const rePwdInfo = document.querySelector("ul.reCheckPwd li:nth-child(1)");

    if (pwd === e.target.value) {
      rePwdInfo.classList.add("ok");
      rePwdInfo.classList.remove("error");
    } else {
      rePwdInfo.classList.add("error");
      rePwdInfo.classList.remove("ok");
    }
  };

  // 닉네임 중복확인
  // const nicknameDupCheckAPI = (nickname) => {

  //   console.log(nickname)
  //     const API = '';
  //     axios.post(API,{
  //         nickname:nickname,
  //     },
  //     {
  //         headers: {
  //         'Content-Type': 'application/json',
  //         'Accept' : 'application/json'
  //         },
  //     })
  //     .then((res) => {
  //         console.log('이메일중복확인!', res)
  //         if(res === false){
  //             alert('이미 등록된 닉네임 입니다!');
  //             setNicknameDup(false);
  //         }else{
  //             alert('사용 가능한 닉네임 입니다 :)');
  //             setNicknameDup(true);
  //         }
  //     })
  // }

  // 이메일 중복확인
  //   const EmailDupCheckAPI = (email) => {

  //      console.log(email)
  //     const API = '';
  //     axios.post(API,{
  //         email:email,
  //     },
  //     {
  //         headers: {
  //         'Content-Type': 'application/json',
  //         'Accept' : 'application/json'
  //         },
  //     })
  //     .then((res) => {
  //         console.log('이메일중복확인!', res)
  //         if(res === false){
  //             alert('이미 등록된 이메일 입니다!');
  //             setEmailDup(false);
  //         }else{
  //             alert('사용 가능한 이메일 입니다 :)');
  //             setEmailDup(true);
  //         }
  //     })
  // }

  // 회원가입 버튼
  const onSignup = () => {
    if (
      !nicknameRegCheck(nickname) ||
      !pwdRegCheck(pwd) ||
      pwdRegContinuousCheck(pwd) ||
      pwd !== rePwd
    ) {
      alert("아이디,비밀번호 확인을 해주세요.");
      return false;
    }

    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
      return false;
    }

    if (email === "") {
      alert("이메일을 입력해주세요.");
      return false;
    }

    if (nicknameDup === false) {
      alert("닉네임 중복확인을 해주세요.");
      return false;
    }

    if (emailDup === false) {
      alert("이메일 중복확인을 해주세요.");
      return false;
    }

    if (!emailRegCheck(email)) {
      alert("이메일 형식을 지켜주세요!");
      return false;
    }
    console.log(nickname, email, pwd, rePwd);
    // dispatch(userActions.signupAPI(nickname, email, pwd, rePwd));
  };

  return (
    <React.Fragment>
      <Container>
        <Title>Signup</Title>

        <div>
          <InputStyle
            placeholder="닉네임 입력"
            type="type"
            width="76%"
            onClick={() => {
              document.querySelector(".checkNickname").style.display = "block";
            }}
            onChange={(e) => {
              changeNickname(e);
            }}
          />
          <DupCheckBtn
            onClick={() => {
              if (!nicknameRegCheck(nickname)) {
                alert(
                  "아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다."
                );
                return false;
              }
              // nicknameDupCheckAPI(id);
            }}
          >
            중복확인
          </DupCheckBtn>
        </div>
        <InfoUl className="checkNickname">
          <li>6자 이상의 영문 혹은 영문과 숫자를 조합</li>
          <li>아이디 중복확인</li>
        </InfoUl>

        <div>
          <InputStyle
            placeholder="이메일 입력"
            type="type"
            width="76%"
            onClick={() => {
              document.querySelector(".checkEmail").style.display = "block";
            }}
            onChange={(e) => {
              changeEmail(e);
            }}
          />
          <DupCheckBtn
            onClick={(e) => {
              if (!emailRegCheck(email)) {
                alert("이메일 형식을 지켜주세요!");
                return false;
              }
              // EmailDupCheckAPI(email);
            }}
          >
            중복확인
          </DupCheckBtn>
        </div>
        <InfoUl className="checkEmail">
          <li>이메일 형식을 지켜주세요.(예시: hh99@sflash.com)</li>
        </InfoUl>

        <InputStyle
          placeholder="비밀번호 입력"
          type="password"
          width="98%"
          onClick={() => {
            document.querySelector(".checkPwd").style.display = "block";
          }}
          onChange={(e) => {
            changePwdReg(e);
          }}
        />
        <InfoUl className="checkPwd">
          <li>10글자 이상 입력</li>
          <li>영문/숫자/특수문자(공백 제외)만 허용,2개 이상의 조합</li>
          <li>동일한 숫자 3개 이상 연속 사용 불가</li>
        </InfoUl>

        <InputStyle
          placeholder="비밀번호 재입력"
          type="password"
          width="98%"
          onClick={() => {
            document.querySelector(".reCheckPwd").style.display = "block";
          }}
          onChange={(e) => {
            changeRePwd(e);
          }}
        />
        <InfoUl className="reCheckPwd">
          <li>동일한 비밀번호를 입력해주세요.</li>
        </InfoUl>

        <SolidBtn
          background-color="grey"
          style={{ display: "block" }}
          onClick={onSignup}
        >
          회원가입하기
        </SolidBtn>
        <Grid padding="10px">
          <TextBtn onClick={() => history.push("/login")}>
            이미 회원이에요! 로그인 하러가기
          </TextBtn>
        </Grid>
      </Container>
    </React.Fragment>
  );
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

const InfoUl = styled.ul`
  font-size: 12px;
  color: #666666;
  font-weight: 400;
  text-align: left;
  margin-left: -15px;
`;

const SolidBtn = styled.button`
  border: none;
  width: 100%;
  min-height: 50px;
  max-height: 70px;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 25px auto 10px auto;
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
  width: 18%;
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
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Signup;
