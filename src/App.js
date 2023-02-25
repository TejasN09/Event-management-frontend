import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/Loginform";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="body">
      {/* <h1>Event Management</h1> */}
      <Header />
      {/* <SignupForm></SignupForm> */}
      {/* <LoginForm /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
