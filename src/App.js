import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EventCard from "./components/EventCard/EventCard";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/Loginform";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import EventListing from "./components/EventCard/EventListing";
import Details from "./components/details/Details";


function App() {
  return (
    <div className="body ">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<SignupForm />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/events" exact element={<EventListing />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        {/* <Home /> */}
      {/* <h1 class="container justify-center">Event Management</h1> */}
      {/* <EventCard/> */}
      {/* <SignupForm></SignupForm> */}
      {/* <LoginForm></LoginForm> */}
    </div>
  );
}

export default App;
