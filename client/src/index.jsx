import * as React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import UserStore from "./store/UserStore";
import './assets/styles/index.css'
import JewelryStore from "./store/JewelryStore";

export const Context = React.createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    jewelry: new JewelryStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)