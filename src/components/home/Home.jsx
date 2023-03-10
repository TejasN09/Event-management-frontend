import React from "react";
import homeImg from "./../../assets/HomePage_main.jpg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className=" flex items-center justify-center  ">
        <img src={homeImg} alt="homePage" className="" />
      </div>
      <div className="writer">
        <div className="writer-text">
          Host Events
        </div>
      </div>
    </>
  );
};

export default Home;
