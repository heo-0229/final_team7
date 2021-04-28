import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import Post2 from "../components/Post2";
import post_list from "../components/MockData";

const Story = (props) => {
  const dispatch = useDispatch();

  // const me = localStorage.getItem('nickname');
  // const is_me = user_info.nickname === me

  //   React.useEffect(() => {
  //     dispatch(userActions.getUserInfoAPI(nickname));
  // }, []);

  const clickHandler = (id) => {
    console.log(id);
  };

  console.log(props.user_info);
  return (
    <React.Fragment>
      <ProfileContainer>
        <ProfileImg src={props.user_info.profile} />
        <Grid padding="0px 0px 0px 30px">
          <Text margin="0px" size="2vw">
            {props.user_info.nickname}
            <TextBtn onClick={() => history.push("/editprofile")}>
              프로필 편집
            </TextBtn>
          </Text>
          <Text>{props.user_info.introduction}</Text>
        </Grid>
      </ProfileContainer>

      {/* <Tab className="tab">
        <li onClick ={()=> clickHandler(0)}>{props.user_info.nickname}님의 장소</li>
        <li onClick ={()=> clickHandler(0)}>저장한 장소</li>
      </Tab> */}

      <Tab>
        <ClickedTab>{props.user_info.nickname}님의 장소</ClickedTab>
        <UnclickedTab
        >
          {props.user_info.nickname}님이 좋아요한 장소
        </UnclickedTab>
      </Tab>

      <Container>
        {/* <Post></Post> */}
        {post_list.map((p, idx) => {
          return <Post2 key={p.id} {...p}></Post2>;
        })}
      </Container>

    </React.Fragment>
  );
};

Story.defaultProps = {
  user_info: {
    profile:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    nickname: "_nickname",
    introduction: "자기소개를 입력해주세요 :)",
  },
};

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1266px;
  height: 20%;
  margin: 5% auto;
`;

const ProfileImg = styled.img`
  position: relative;
  width: 15%;
  aspect-ratio: 1/1;
  border-radius: 100px;
  margin: 0px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  object-fit: cover;
  cursor: pointer;
`;

const TextBtn = styled.span`
  font-size: 1vw;
  color: grey;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1260px;
  margin: auto;
  background-color: #eee;
`;

const UnclickedTab = styled.button`
  width: 50%;
  aspect-ratio: 9/1;
  font-size: 1.2vw;
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
  aspect-ratio: 9/1;
  font-size: 1.2vw;
  font-weight: bold;
  background-color: #ffffff;
  color: #343a40;
  border: none;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28%, 1fr));
  grid-auto-rows: 405px;
  grid-gap: 24px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 82%;

  width: 1266px;
  /* width: 1266px; */
  height: 100%;
  padding: 50px 200px;
  flex-wrap: wrap;
`;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(28%, 1fr));
//   grid-auto-rows: 405px;
//   grid-gap: 24px;
//   text-align: center;
//   margin: auto;
//   width: 1266px;
//   height: 100%;
//   padding: 50px 200px;
//   flex-wrap: wrap;
// `;

// const ImageContainer = styled.div`
//   display: block;
// `;

export default Story;
