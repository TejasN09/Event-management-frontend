import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EventCard from "./components/EventCard";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/Loginform";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="body ">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<SignupForm />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/events" exact element={<EventCard />} />
        </Routes>
    </div>
  );
}

export default App;
