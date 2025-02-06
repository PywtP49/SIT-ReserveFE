import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import Mainpage from "./React/Homepagejsx/Mainpage";
import TaskScheduler from "./React/Homepagejsx/Calendars";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/TaskScheduler" element={<TaskScheduler/>} />
        </Routes>
      </Router>
  );
}

export default App;
