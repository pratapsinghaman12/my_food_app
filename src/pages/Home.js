import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";

import Header from "../components/Header";

const Home = () => {
  return (
    <Provider store={appStore}>
      <div className="Home">
        <div className="mb-20">
          <Header />
        </div>
        <Outlet />
      </div>
    </Provider>
  );
};

export default Home;

// Outlet will get replace by the component sent as a child from route.
