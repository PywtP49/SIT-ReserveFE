
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import "./css/App.css";
import Mainpage from "./components/homepage/Mainpage";
import RoomList from "./components/room-lists/RoomList";
import RoomBooking from "./components/room-bookings/RoomBooking";
import CancelBooking from "./components/room-bookings/CancelBooking"

// import TimeTable from "./React/Homepagejsx/Calendars";


function App() {
  return (
    <div>
       <Router>     
        <Routes>
          <Route path="" element={<Mainpage />} />
          <Route path="/room-lists" element={<RoomList/>} />
          <Route path="/roombooking" element={<RoomBooking/>} />  
          <Route path="/confirmation" element={<CancelBooking/>} />
        </Routes>
      </Router>
    </div>
     
  );
}

export default App;
