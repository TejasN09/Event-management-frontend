import React from "react";
import "./Home.css";
import { useState } from "react";
import homeImg from "./../../assets/HomePage2.png";

const Home = () => {
    return (
        <div className="home dark:bg-neutral-800 w-full">
            <img src={homeImg} alt="homePage" className="absolute h-72 w-64 " />
            <div className="home__content">
                <h2 className="home__content__title absolute right-4 mb-1 text-black pt-10 font-bold text-sm">Wanna try out!</h2>
                <button className="home__content__btn absolute right-3 mt-0 bg-blue-500 mt-20 rounded-md px-2 py-2">Get Started</button>
            </div>
        </div>
    )
}

export default Home;