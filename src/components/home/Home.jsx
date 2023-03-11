// import React from "react";
// import homeImg from "./../../assets/HomePage_main.jpg";
// import Header from "../header/Header";
// import "./Home.css";
// import EventCard from "../EventCard";
// const Home = () => {
//   // return (
//   //   <section className="text-gray-600 body-font">
//   //     <Header />
//   //     <div className="home w-full mx-auto">
//   //       <div className="home__container ">
//   //         <img src={homeImg} alt="homePage" className="relative w-fit left-2/4 h-72 object-cover  " />
//   //         <div className="home__content items-center justify-center flex mt-1 absolute ">
//   //           <h1 className="home__content__title relative mb-1 text-black font-bold text-lg text-center ">
//   //             Event Management
//   //           </h1>
//   //           <h2 className="home__content__des absolute text-black text-lg">Event management is the application of project management to the creation and development of small and/or
//   //             large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties,
//   //             concerts, or conventions. It involves studying the brand, identifying its target audience, devising the event
//   //             concept, and coordinating the technical aspects before actually launching the event</h2>
//   //           <h2 className="try__it text-black text-bold text-xl absolute ml-0">Try it!</h2>
//   //           <button className="home__content__btn absolute bg-blue-500 rounded-md ml-36 px-2 py-2 text-center text-white hover:bg-slate-500">
//   //             Get Started
//   //           </button>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </section>
//   // )
// }

// export default Home;
import React from "react";
import homeImg from "./../../assets/HomePage_main.jpg";
import "./Home.css";
import EventCard from "../EventCard";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between absolute">
        <div className="md:w-1/2">
          <img src={homeImg} alt="homePage" className="w-full" />
        </div>
        <div className="md:w-1/2 text-center md:text-left ">
          <div className="writer">
            <div className="writer-text">
              Host Events
            </div>
          </div>
          <p className="text-xl mt-4">Hello world</p>
          <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
        </div>
      </div>
      <div className="mt-[30rem]"> 
        <EventCard title="Tejas N" description={"Im a man"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
