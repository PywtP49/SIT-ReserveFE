import "react";
import { useLocation } from "react-router-dom";
import "../../../src/css/RoomList.css";
import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";

const rooms = [
  { id: "LX 10/1", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 10/2", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 10/3", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 10/4", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 10/5", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 11/1", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 11/2", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 11/3", status: "Available", image: "/IMG/room.jpg" },
  { id: "LX 11/4", status: "Available", image: "/IMG/room.jpg" },
];

const RoomListLX = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";
  const date = searchParams.get("date") || "";
  
  return (
    <>
      <Navbar2 />
      <div className="room-list">
        <h2>Available Rooms</h2>
        <div className="rooms-container">
          {rooms.map((room) => (
            <div className="room-card" key={room.id}>
              <img
                src={room.image}
                alt={`Room ${room.id}`}
                className="room-image"
              />
              <div className="room-info">
                <span className="room-status">{room.status}</span>
                <h3 className="room-id">{room.id}</h3>
                <Link 
                  className="book-btn" 
                  to={`/roombooking?room=${room.id}&status=${room.status}&start=${start}&end=${end}&date=${date}`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomListLX;
