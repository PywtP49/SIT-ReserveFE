import "react";
import { useLocation } from "react-router-dom";
import "../../../src/css/RoomList.css";
import Navbar2 from "../homepage/Navbar2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRoomsByBuilding } from "../../services/room.service";
import { getBuildingImage } from "../../utils/imageUtils";

const RoomList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const building = searchParams.get("building") || "";
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";
  const date = searchParams.get("date") || "";
  
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRoomsByBuilding(building)
      setRooms(data)
    }

    fetchData()
  }, [building])

  
  return (
    <>
      <Navbar2 />
      <div className="room-list">
        <h2>Available Rooms</h2>
        <div className="rooms-container">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img
                src={getBuildingImage(building)}
                alt={`Room ${room.id}`}
                className="room-image"
              />
              <div className="room-info">
                {/* <span className="room-status">{room.status}</span> */}
                <h3 className="room-id">{room.room_name}</h3>
                <Link 
                  className="book-btn" 
                  to={`/roombooking?room=${room.room_id}&roomName=${room.room_name}&building=${building}&status=${room.status}&start=${start}&end=${end}&date=${date}`}
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

export default RoomList
