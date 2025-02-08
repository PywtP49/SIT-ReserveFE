import React, { useState } from "react";
import { PlusCircle, XCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getBuildingImage } from "../../utils/imageUtils";

export default function RoomAddMoreRoom() {
  const [showPopup, setShowPopup] = useState(false);
  const [roomBooked, setRoomBooked] = useState(true);
  const location = useLocation(); // Access the location object
  const bookingData = location.state; // Retrieve the data

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Your room</h2>
        {roomBooked ? (
          <div className="p-4 flex items-center space-x-4 bg-white shadow-lg rounded-lg">
            <img src={getBuildingImage(bookingData.building)} alt="Room" className="w-24 h-24 object-cover rounded-lg" />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{bookingData.building} Building</h3>
              <p>Name: {bookingData.name}</p>
              <p>Start date: {bookingData.date} {bookingData.time_start}</p>
              <p>End date:  {bookingData.date} {bookingData.time_end}</p>
              <p>Duration: {bookingData.duration} hours</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-lg"
                onClick={() => setShowPopup(true)}
              >
                Cancel booking
              </button>
            </div>
          </div>
        ) : (
          <div
            className="mt-6 p-4 bg-gray-200 text-center rounded-lg cursor-pointer hover:bg-gray-300"
            onClick={() => {
              navigate("/")
            }}
          >
            <PlusCircle className="mx-auto text-gray-600" size={32} />
            <p className="text-gray-600">Add more room</p>
          </div>
        )}

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative">
              <XCircle className="mx-auto text-red-600" size={48} />
              <h2 className="text-lg font-semibold mt-2">Cancel Room Booking</h2>
              <div className="mt-4 flex justify-between">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setShowPopup(false)}
                >
                  Back
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  onClick={() => {
                    setRoomBooked(false);
                    setShowPopup(false);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
