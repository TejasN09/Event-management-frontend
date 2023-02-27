import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EventCard from "./components/EventCard";
import SignupForm from "./components/SignupForm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
