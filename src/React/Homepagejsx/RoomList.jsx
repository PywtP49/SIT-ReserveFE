import "react";
import "./RoomList.css";

const rooms = [
  { id: "LX 10/1", status: "Available", image: "/images/room.jpg" },
  { id: "LX 10/2", status: "Available", image: "/images/room.jpg" },
  { id: "LX 10/3", status: "Available", image: "/images/room.jpg" },
  { id: "LX 10/4", status: "Available", image: "/images/room.jpg" },
  { id: "LX 10/5", status: "Available", image: "/images/room.jpg" },
  { id: "LX 11/1", status: "Available", image: "/images/room.jpg" },
  { id: "LX 11/2", status: "Available", image: "/images/room.jpg" },
  { id: "LX 11/3", status: "Available", image: "/images/room.jpg" },
  { id: "LX 11/4", status: "Available", image: "/images/room.jpg" },
];

const RoomList = () => {
  return (
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
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
