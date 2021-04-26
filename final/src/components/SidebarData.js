import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
  {
    title: "마이페이지",
    path: "/",
    icon: <CgIcons.CgProfile size="22px" />,
    cName: "nav-text",
  },
  {
    title: "지도보기",
    path: "/reports",
    icon: <IoIcons.IoIosPaper size="22px" />,
    cName: "nav-text",
  },
  {
    title: "커뮤니티",
    path: "/products",
    icon: <FaIcons.FaCartPlus size="22px" />,
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
