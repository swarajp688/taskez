import React, { useState } from "react";
import HomeWrapper from "../styles/HomeWrapper";
import homeSvg from "../svg/Home.svg";
import Login from "./Login";
import Signup from "./Signup";
const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <HomeWrapper>
      <div className="container">
        <div className="image-container">
          <img src={homeSvg} alt="home" className="home-image" />
        </div>
        <div className="auth-container">
          <div className="title-container">
            <span
              onClick={() => setIsLogin(true)}
              className={`title ${isLogin ? "border" : ""}`}
            >
              Login
            </span>
            <span
              onClick={() => setIsLogin(false)}
              className={`title ${isLogin ? "" : "border"}`}
            >
              Signup
            </span>
          </div>
          {isLogin ? <Login /> : <Signup />}
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
