import React from 'react';
import cart from '../assets/img/shopping-basket.svg';
import search from '../assets/img/search.svg';
import login from '../assets/img/login.svg';
import {NavLink} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE, SEARCH_ROUTE} from "../utils/consts";
import st from '../assets/styles/navBar.module.css'

const NavBar = () => {
  return (
    <div className={st.navBar}>
      <NavLink to={SEARCH_ROUTE} className={st.navBar_link}>
        <img className={st.navBar_link_img} src={search} alt="search"/>
      </NavLink>
      <NavLink to={BASKET_ROUTE} className={st.navBar_link}>
        <img className={st.navBar_link_img} src={cart} alt="basket"/>
      </NavLink>
      <NavLink to={LOGIN_ROUTE} className={st.navBar_link}>
        <img className={st.navBar_link_img} src={login} alt="login"/>
      </NavLink>
    </div>
  );
};

export default NavBar;