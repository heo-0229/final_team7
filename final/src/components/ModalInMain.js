// 부모 컴포넌트는 Main.js
import React from "react";

import styled from "styled-components";
import * as FcIcons from "react-icons/fc";
import * as CgIcons from "react-icons/cg";

// import { actionCreators as commentActions } from "../redux/modules/comment"
// import { actionCreators as userActions } from "../redux/modules/user"
// import { actionCreators as postActions } from "../redux/modules/post"

import { useDispatch, useSelector } from "react-redux";

const ModalInMain = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  
  return(
    <React.Fragment>
      <ModalContainer>
        <PicBox src={props.image_url}>
          <Head>
            <SpotName>{props.spot_address}</SpotName>
          </Head>
          <Center/>
          <Bottom>
            <IconsBox>
              <LikeIcon/>
              <CommentIcon/>
            </IconsBox>
          </Bottom>
        </PicBox>
      </ModalContainer>
    </React.Fragment>
  ) 
}

ModalInMain.defatultProps = {
  image_url: "https://i.pinimg.com/originals/3b/b2/5c/3bb25c56d66d633b2e6a47250b0eacbb.jpg",
  spot_address: "제주도 유채밭",
}

const ModalContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  background-color: white;
`;

const PicBox = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SpotName = styled.div`
  width: 15px;
  background-color: transparent;
  color: white;
  font-size: 12px;
`;

const Center = styled.div`
  height: 30px
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const IconsBox = styled.div`
  display: flex;
  justify-content: right;
`;

export default ModalInMain;