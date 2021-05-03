import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as profileActions } from "../redux/modules/profile";

const Story_EditProfile = (props) => {
  const dispatch = useDispatch();
  const { user_info } = props;
  const nickname = user_info.nickname;
  const is_uploading = useSelector((state) => state.profile.is_uploading);
  const profile_preview = useSelector((state) => state.profile.profile_preview);

  const [introduction, setIntroduction] = React.useState("");
  const changeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  // 이미지 업로드하기
  const fileInput = React.useRef();
  const selectFile = (e) => {
    // changed 된 event (e.target은 input)
    // console.log(e.target.files); // input 이 가진 files 객체
    // console.log(e.target.files[0]); //선택한 파일이 어떻게 저장되어 있나 확인
    // console.log(fileInput.current.files[0]); //ref로도 확인;

    // 이미지 미리보기
    const reader = new FileReader();
    var img = fileInput.current.files[0];
    if (img === undefined) {
      dispatch(
        profileActions.setPreview(
          "http://desk87.com/assets/images/preview-not-available.jpg"
        )
      );
    }
    reader.readAsDataURL(img); // readAsDataURL(읽고 싶은 파일) 메서드를 이용한다.
    reader.onloadend = () => {
      // onloadend: reader가 끝나자마자 다음 것을 수행한다.
      // console.log(reader.result);
      dispatch(profileActions.setPreview(reader.result));
    };
  };

  const editProfile = () => {
    const img = fileInput.current.files[0];
    dispatch(profileActions.editProfileAPI(nickname, img, introduction));
    // window.location.reload();
  };

  return (
    <React.Fragment>
      <ProfileContainer>
        <Grid flex padding="0px">
        <ProfileImg
          src={
            profile_preview
              ? profile_preview
              : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          }
        />
        </Grid>
        
        {/* <EditImgBtn for="edit_profile_img">프로필 사진 바꾸기</EditImgBtn> */}
        <input
        type="file"
        id="edit_profile_img"
        ref={fileInput}
        onChange={selectFile}
        disabled={is_uploading}
      />
        <Grid flex margin="10px">
          <Label>닉네임</Label>
          <text>{user_info.nickname}</text>
        </Grid>

        <Grid flex margin="10px">
          <Label>소개</Label>
          <IntroductionInput
            value={introduction}
            placeholder="placeholder"
            onChange={changeIntroduction}
            disabled={is_uploading}
          />
        </Grid>
        <Grid> <TextBtn onClick={editProfile}>편집 완료</TextBtn></Grid>
       
      </ProfileContainer>
    </React.Fragment>
  );
};
const ProfileContainer = styled.div`
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 140px;
  aspect-ratio: 1/1;
  border-radius: 150px;
  padding: 0px;
  margin: 30px auto;
  background-size: cover;
  object-fit: cover;
  cursor: pointer;
`;

const EditImgBtn = styled.label`
  font-size: 0.8vw;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;


const Label = styled.text`
  display: block;
  width: 10%;
  text-align: right;
  margin-right: 20px;
  /* background-color: yellow; */
`;
const IntroductionInput = styled.textarea`
  display: block;
  border: 1px solid grey;
  width: 70%;
  aspect-ratio: 1/0.4;
  padding: 6px 10px;
  box-sizing: border-box;
  /* background-color: yellow; */
`;


const TextBtn = styled.text`
display:block;
  font-size: 0.8vw;
  margin: auto;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Story_EditProfile;
