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
            <div className="writer-text font-sans font-bold">Host Events</div>
          </div>
          <div class="container mx-auto px-4 lg:px-20 relative">
            <p class="text-xl mt-4">The process of planning and coordinating the event is usually referred to as event planning
              and which can include budgeting, scheduling, site selection.</p>
          </div>
          <Link to="/register" className="mb-10">
            <button className="mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
          </Link>
        </div>

      </div>
      <div className="mt-[30rem] cardListing relative">
        <h1 className="text-3xl font-bold text-center relative pt-8">Upcoming Events</h1>
        <EventCard title="Tejas N" description={"Im a man"} />
        <EventCard title="Chess" description={"Chess tournament"} />
        <EventCard title="Dancing stars" description={"Dance Competition"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
