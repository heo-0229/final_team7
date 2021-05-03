import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../Css/Navbar.css";
import { IconContext } from "react-icons";
import Category from "./Category";
import { history } from "../redux/configStore";
import styled from "styled-components";

function Navbar() {
  //GrMap
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* 안에 있는 요소들 색통일 */}
      <IconContext.Provider value={{ color: "#000" }}>
        {/* <div className="navbarBtn">
          {/* 햄버거 버튼 클릭시 sidebar 값을 !sidebar로 바꿔줌*/}
        {/* <Link className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
        {/* </div> */}
        <SideMini>
          <SideIcon>
            <LOGO>
              <Link to="/story">
                <CgIcons.CgProfile size="1.6rem" />
              </Link>
            </LOGO>
            <Link to="/">
              <GrIcons.GrMap size="1.5rem" />
            </Link>
            <IconInfo>홈</IconInfo>

            <Link to="/postlist">
              <MdIcons.MdPhotoLibrary size="1.6rem" />
            </Link>
            <IconInfo>커뮤니티</IconInfo>
            <Link to="/story">
              <CgIcons.CgProfile size="1.6rem" />
            </Link>
            <IconInfo>마이페이지</IconInfo>
            <Link>
              <IoIcons.IoMdPeople size="1.7rem" />
            </Link>
            <IconInfo>About</IconInfo>
            <Link to="/faq">
              <FaIcons.FaEnvelopeOpenText size="1.4rem" />
            </Link>
            <IconInfo>FAQ</IconInfo>
            <Link to="/login">
              <GrIcons.GrLogin size="1.5rem" />
            </Link>
            <IconInfo>로그인</IconInfo>
          </SideIcon>
        </SideMini>
        {/* sidebar값에 따라 클래스 네임을 바꿔준다 */}
        {/* nav-menu.active는 사이드바가 들어간 상태를 의미 */}
        <nav className={sidebar ? "nav-menu" : "nav-menu "}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* <LOGO
              onClick={(e) => {
                history.push("/");
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              LOGO
            </LOGO> */}
            <CategoryInfo>
              <CategoryIcon>
                {" "}
                <BiIcons.BiBookBookmark size="23px" />
              </CategoryIcon>
              카테고리
            </CategoryInfo>
            {/* <Category></Category> <Category /> */}
            <Bubble
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {SidebarData.map((item, index) => {
                //사이드바의 데이터 들을 map으로 돌려준다
                return (
                  <li
                    key={index}
                    className={item.cName}
                    onClick={(e) => {
                      history.push("item.path");
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </Bubble>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

const LOGO = styled.div`
  @media (max-width: 1450px) {
    // 1450밑으로 넓이가 내려가면
    display: none;
  }
`;

const SideMini = styled.div`
  align-items: center;
  width: 84px;
  height: 100vh;
  position: fixed;
  background-color: white;
  left: 0;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    // 1450밑으로 넓이가 내려가면
    z-index: 5000;
    width: 100%;
    height: 60px;
    justify-content: space-around;
    flex-direction: row;
  }
`;

const SideIcon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  margin-top: 25px;
  @media (max-width: 960px) {
    // 1450밑으로 넓이가 내려가면
    width: 100%;
    height: 7vh;
    justify-content: space-between;
    flex-direction: row;
    margin: 0px 9vw;
  }
`;

const CategoryInfo = styled.div`
  display: flex;
  margin-bottom: 25px;

  @media (max-width: 960px) {
    // 1450밑으로 넓이가 내려가면
    display: none;
  }
`;

const CategoryIcon = styled.div`
  margin-right: 12px;
`;

const Bubble = styled.div`
  z-index: 400;
`;

const IconInfo = styled.div`
  font-size: 9px;
  margin-top: -15px;
  @media (max-width: 1450px) {
    // 1450밑으로 넓이가 내려가면
    display: none;
  }
`;
