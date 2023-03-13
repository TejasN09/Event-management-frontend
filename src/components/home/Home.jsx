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
            <div className="writer-text m-0 font-sans font-bold">Host Events</div>
          </div>
          <div class="container mx-auto px-4 lg:px-20 relative">
            <p class="text-sm subpixel-antialiased text-center font-normal	 font-sans m-1">Introducing our brand new event Management web application - the ultimate solution for organizing and managing events of all kinds!! Our user friendly platform is designed to help you streamline every aspect of event planning, sending invitations and even collecting payments. So why wait? Sign up now and start planning your next event with ease!  </p>
          </div>
          <Link to="/register" className="mb-10">
            <button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
          </Link>
        </div>

      </div>
      <div className="mt-[30rem] cardListing relative">
        <h1 className="text-3xl font-bold text-center relative">Upcoming Events</h1>
        <EventCard title="Tejas N" description={"Im a man"} />
        <EventCard title="Chess" description={"Chess tournament"} />
        <EventCard title="Dancing stars" description={"Dance Competition"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
