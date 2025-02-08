import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TimeSelection() {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSelect = () => {
    if (time) {
      navigate(`/booking?time=${time}`);
    } else {
      alert("กรุณาเลือกเวลา");
    }
  };

  return (
    <div>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">-- กรุณาเลือกเวลา --</option>
        <option value="09:00">09:00</option>
        <option value="09:30">09:30</option>
        <option value="10:00">10:00</option>
        <option value="10:30">10:30</option>
        <option value="11:00">11:00</option>
        <option value="11:30">11:30</option>
        <option value="12:00">12:00</option>
      </select>
      <button onClick={handleSelect}>ยืนยัน</button>
    </div>
  );
}

export default TimeSelection;
