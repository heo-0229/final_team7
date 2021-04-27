import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../elements/index";
import { history } from "../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../components/SideNav";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";
import LogBtn from "../components/LogBtn";
import Post2 from "../components/Post2";
import Modal from "../components/Modal";

import "../Css/Modal.css";
import modal from "../redux/modules/modal";
import post_list from "../components/MockData";

const PostList = () => {
  const dispatch = useDispatch();

  // const modal_id = useSelector((state) => state.modal.modal_id);
  // const is_modal = useSelector((state) => state.modal.is_open);
  // console.log(modal_id);
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <React.Fragment>
      <SideNav />
      <LogBtn />
      <SearchBar />
      <Box></Box>
      <Container>
        {/* <Post></Post> */}
        {post_list.map((p, idx) => {
          return <Post2 key={p.id} {...p}></Post2>;
        })}
      </Container>
      {/* {post_list.map((p, idx) => {
        if (is_modal && p.id == modal_id) {
          return <Modal key={p.id} {...p} />;
        }
      })} */}
      {/* {is_modal ? <Modal key={p.id} {...p} /> : null} */}
    </React.Fragment>
  );
};

export default PostList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28%, 1fr));
  grid-auto-rows: 405px;
  grid-gap: 24px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 75%;
  overflow: visible;
  width: 1266px;
  /* width: 1266px; */
  height: 100%;
  padding: 50px 200px;
  flex-wrap: wrap;
`;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   top: 75%;
//   width: 1266px;
//   height: 100%;
//   padding: 50px 200px;
// `;

const OutBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
`;

const Box = styled.div`
  height: 200px;
`;
