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
    <div className="body">
      <Header />
      <Router>
        {/* <h1>Event Management</h1> */}

        {/* <SignupForm></SignupForm> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<SignupForm />} />
          <Route path="/login" exact element={<LoginForm />} />
        </Routes>
        {/* <Home /> */}
      </Router>
      <Footer />
      <h1 class="container justify-center">Event Management</h1>
      {/* <EventCard/> */}
      <SignupForm></SignupForm>
      {/* <LoginForm></LoginForm> */}
    </div>
  );
}

export default App;
