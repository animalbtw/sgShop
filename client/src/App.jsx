import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import st from './assets/styles/app.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className={st.appWrapper}>
        <div className={st.appWrapper_container}>
          <Header/>
          <div className={st.appWrapper_container_content}>
            <AppRouter/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;