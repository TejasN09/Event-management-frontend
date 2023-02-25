import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/Loginform";


function App() {
  return (
    <div className="body">
      <h1>Event Management</h1>
      {/* <SignupForm></SignupForm> */}
      <LoginForm />

    </div>
  );
}

export default App;
