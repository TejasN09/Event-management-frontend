import React from "react";
import homeImg from "./../../assets/HomePage_main.jpg";
import "./Home.css";
import EventCard from "../EventCard/EventCard";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between absolute">
        <div className="md:w-1/2">
          <img src={homeImg} alt="homePage" className="w-full" />
        </div>
        <div className="md:w-1/2 text-center md:text-left ">
          <div className="writer ">
            <div className="writer-text font-sans">Host Events</div>
          </div>
          <p className="text-xl mt-4">Hello world</p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
        </div>
        {/* <EventCard title="Chess" description={"Chess tournament"} />
      <EventCard title="Dancing stars" description={"Dance Competition"} /> */}
      </div>
      <div className="mt-[30rem]"> 
        <EventCard title="Tejas N" description={"Im a man"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
