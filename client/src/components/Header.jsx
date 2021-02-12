import React from 'react';
import st from '../assets/styles/header.module.css'
import NavBar from "./NavBar";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";

const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.header_title}>
        <NavLink to={HOME_ROUTE} className={st.header_title_href}>
          <div className={st.header_title_href_inner}>
            Bijouterie<br/>by Sasha G.
          </div>
        </NavLink>
      </div>
      <div className={st.header_navBar}>
        <NavBar/>
      </div>
    </div>
  );
};

export default Header;