import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  //MdPhotoLibrary
  {
    title: "마이페이지",
    path: "/story",
    icon: <CgIcons.CgProfile size="22px" />,
    cName: "nav-text",
  },
  {
    title: "지도보기",
    path: "/reports",
    icon: <GrIcons.GrMap size="22px" />,
    cName: "nav-text",
  },
  {
    title: "커뮤니티",
    path: "/products",
    icon: <MdIcons.MdPhotoLibrary size="22px" />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/team",
    icon: <IoIcons.IoMdPeople size="22px" />,
    cName: "nav-text",
  },
  {
    title: "문의하기",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText size="22px" />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle size="22px" />,
    cName: "nav-text",
  },
];
