import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import Mainpage from "./React/Homepagejsx/Mainpage";
// import TimeTable from "./React/Homepagejsx/Calendars";
import RoomListLX from "./React/Homepagejsx/RoomListLX";
import RoomBooking from "./React/Homepagejsx/RoomBooking";
import Navbar from "./React/Homepagejsx/Navbar";
import Navbar2 from "./React/Homepagejsx/Navbar2";
function App() {
  return (
    <div>
       <Router>     
        <Routes>
        <Route path="/" element={<Mainpage />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/roomlistlx" element={<RoomListLX/>} />
          <Route path="/roombooking" element={<RoomBooking/>} />
        </Routes>
      </Router>
    </div>
     
  );
}

export default App;
