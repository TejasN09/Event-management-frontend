import React from "react";
import homeImg from "./../../assets/HomePage_main.jpg";
import Header from "../header/Header";
import "./Home.css";
import EventCard from "../EventCard";
const Home = () => {
    return (
        <section className="text-gray-600 body-font">
            <Header />
        <div className="home w-full mx-auto">
            <div className="home__container ">
                <img src={homeImg} alt="homePage" className="relative w-fit left-2/4 h-72 object-cover  " />
                <div className="home__content items-center justify-center flex mt-1 absolute ">
                    <h1 className="home__content__title relative mb-1 text-black font-bold text-lg text-center ">
                        Event Management
                    </h1>
                    <h2 className="home__content__des absolute text-black text-lg">Event management is the application of project management to the creation and development of small and/or 
                    large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, 
                    concerts, or conventions. It involves studying the brand, identifying its target audience, devising the event 
                    concept, and coordinating the technical aspects before actually launching the event</h2>
                    <h2 className="try__it text-black text-bold text-xl absolute ml-0">Try it!</h2>
                    <button className="home__content__btn absolute bg-blue-500 rounded-md ml-36 px-2 py-2 text-center text-white hover:bg-slate-500">
                        Get Started
                    </button>
                </div>
            </div>


  return (
    <>
      <div className=" flex items-center justify-center  ">
        <img src={homeImg} alt="homePage" className="" />
      </div>
      <div className="writer">
        <div className="writer-text">
          Host Events
        </div>
        </section>
    )
}

export default Home;
