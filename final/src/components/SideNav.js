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
        <div className="navbarBtn">
          {/* 햄버거 버튼 클릭시 sidebar 값을 !sidebar로 바꿔줌*/}
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <SideMini>
          <SideIcon>
            <CgIcons.CgProfile size="22px" />
            <GrIcons.GrMap size="22px" />
            <MdIcons.MdPhotoLibrary size="22px" />
            <IoIcons.IoMdPeople size="22px" />
            <FaIcons.FaEnvelopeOpenText size="22px" />
            <IoIcons.IoMdHelpCircle size="22px" />
          </SideIcon>
        </SideMini>
        {/* sidebar값에 따라 클래스 네임을 바꿔준다 */}
        {/* nav-menu.active는 사이드바가 들어간 상태를 의미 */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <LOGO
              onClick={() => {
                history.push("/");
              }}
            >
              LOGO
            </LOGO>
            <CategoryInfo>
              <CategoryIcon>
                {" "}
                <BiIcons.BiBookBookmark size="23px" />
              </CategoryIcon>
              카테고리
            </CategoryInfo>
            {/* <Category></Category> */} <Category />
            {SidebarData.map((item, index) => {
              //사이드바의 데이터 들을 map으로 돌려준다
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

const LOGO = styled.div`
  width: 70px;
  width: 110px;
  margin-bottom: 35px;
  font-size: 30px;
  cursor: pointer;
`;

const SideMini = styled.div`
  align-items: center;
  width: 70px;
  height: 100vh;
  position: fixed;
  background-color: white;
  left: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
`;

const SideIcon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  margin-top: 270px;
`;

const CategoryInfo = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const CategoryIcon = styled.div`
  margin-right: 12px;
`;
