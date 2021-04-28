import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";

import Post2 from "./Post2";
import post_list from "./MockData";

import { FiImage } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";

const Story_MyPost = (props) => {
  // 버튼 탭 구현하기
  // 처음에는 0번째 인덱스 활성화
  const [active, setActive] = useState("grid");
  // 클릭한 인덱스 활성화
  const handleClick = (e) => {
    const index = parseInt(e.target.id);
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <React.Fragment>
      <Icons>
        <Icon onClick={handleClick} active={active === "grid"} id={"grid"}>
          <FiImage size="40" />
        </Icon>
        <Icon onClick={handleClick} active={active === "map"} id={"map"}>
          <HiOutlineMap size="43" />
        </Icon>
      </Icons>

      <Content active={active === "grid"}>
        <PostList>
          {post_list.map((p, idx) => {
            return <Post2 key={p.id} {...p}></Post2>;
          })}
        </PostList>
      </Content>
      <Content active={active === "map"}>
        <Box></Box>
      </Content>
    </React.Fragment>
  );
};

// const Story_MyPost = (props) => {
//   // 버튼 탭 구현하기
//   // 처음에는 0번째 인덱스 활성화
//   const [PostListMode, setPostListMode] = useState(true);
//   // 클릭한 인덱스 활성화

//   return (
//     <React.Fragment>
//       <Icons>
//         <Icon
//           onClick={() => {
//             setPostListMode(true);
//           }}
//         >
//           <FiImage size="40" />
//         </Icon>
//         <Icon
//           onClick={() => {
//             setPostListMode(false);
//           }}
//         >
//           <HiOutlineMap size="43" />
//         </Icon>
//       </Icons>
//       {PostListMode ? (
//         <PostList>
//           {post_list.map((p, idx) => {
//             return <Post2 key={p.id} {...p}></Post2>;
//           })}
//         </PostList>
//       ) : (
//         <Box></Box>
//       )}
//     </React.Fragment>
//   );
// };

const Icons = styled.div`
  position: fixed;
  right: 13%;
  top: 29%;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Icon = styled.div`
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 100px;
  margin: 5px;
  padding: 30px;
  border: 3pt solid #eee;

  background-color: #ffffff;
  color: ${(props) => (props.active ? "black" : "grey")};
  background-color: ${(props) => (props.active ? "white" : "#eee")};

  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
    cursor: pointer;
  }
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

const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;

export default Story_MyPost;
