import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// import Post2 from "../components/Post2";
// import post_list from "../components/MockData";
import Story_Tabs from "../components/Story_Tabs";
import Story_ContentBtn from "../components/Story_ContentBtn";

const Story = (props) => {
  const dispatch = useDispatch();

  // const me = localStorage.getItem('nickname');
  // const is_me = user_info.nickname === me ;
  // dispatch(userActions.getUserInfoAPI(nickname));
  React.useEffect(() => {
  
  }, []);

  // // 탭 구현하기
  // // 처음에는 0번째 인덱스 활성화
  const [active, setActive] = useState(3);
  // 클릭한 인덱스 활성화
  const handleClick = (e) => {
    const index = parseInt(e.target.id);
    if (index !== active) {
      setActive(index);
    }
  };

  
  return (
    <React.Fragment>
      <ProfileContainer>
        <ProfileImg src={props.user_info.profile} />

        <Grid padding="20px 0px 0px 0px">
          <Text margin="0px" size="1.6vw">
            {props.user_info.nickname}
          </Text>
          <Text size="0.8vw">{props.user_info.introduction}</Text>
          <TextBtn>프로필 편집</TextBtn>
        </Grid>
      </ProfileContainer>

      {/* <Story_Tabs/> */}

      
        <Tabs>
          <Tab onClick={handleClick} active={active === 3} id={3}>
            {props.user_info.nickname}님의 게시물
          </Tab>
          <Tab onClick={handleClick} active={active === 4} id={4}>
            {props.user_info.nickname}님의 좋아요
          </Tab>
        </Tabs> 


          <Content active={active === 3}>
            <Story_ContentBtn />
          </Content>
          <Content active={active === 4}>
          <Story_ContentBtn />
          </Content>

    </React.Fragment>
  );
};


Story.defaultProps = {
  user_info: {
    profile:
      "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
    nickname: "nickname",
    introduction: "자기소개를 입력해주세요 :)",
  },
};

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 1266px;
  height: 20%;
  margin: 3% auto;
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

const TextBtn = styled.button`
  padding: 12px 20px;
  border: 1px solid grey;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 0.8vw;
  color: grey;
  background-color: #ffffff;
  :focus {
    outline: none;
  }
  &:hover {
    color: grey;
    background-color: #eee;
    border: none;
    cursor: pointer;
  }
  position: relative;
  top: 0px;
  right: 0%;
`;

const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  margin: 0 auto;
  width: 1260px;
`;

const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  width: 50%;
  padding: 30px;
  font-size: 1.5em;
  color: ${(props) => (props.active ? "black" : "grey")};
  border: ${(props) => (props.active ? "2pt solid #eee" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "2pt solid #eee")};
  background-color: ${(props) => (props.active ? "white" : "#eee")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`;
const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
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

export default Story;
