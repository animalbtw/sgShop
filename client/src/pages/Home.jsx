import React from 'react';
import st from '../assets/styles/home.module.css'
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Home = () => {
  return (
    <div className={st.home}>
      <div className={st.home_title}>
        Lorem ipsum dolor.
      </div>
      <div className={st.home_linkContainer}>
        <NavLink className={st.home_linkContainer_link} to={SHOP_ROUTE}>
          <button className={st.home_linkContainer_link_button}>
            Start shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;