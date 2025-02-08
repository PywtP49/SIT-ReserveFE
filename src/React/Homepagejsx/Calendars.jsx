import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TimeTable = () => {
    const navigate = useNavigate(); 
    const [selectedTimes, setSelectedTimes] = useState({
        roomA: [],
        roomB: [],
        roomC: []
    });

    const handleCheckboxChange = (room, time) => {
        setSelectedTimes(prevState => {
            const newTimes = prevState[room].includes(time)
                ? prevState[room].filter(t => t !== time)
                : [...prevState[room], time];
            return { ...prevState, [room]: newTimes };
        });
    };

    const handleSubmit = () => {
        const params = new URLSearchParams();
        for (const room in selectedTimes) {
            params.append(room, selectedTimes[room].join(','));
        }
        navigate(`/result?${params.toString()}`); // ใช้ navigate() แทน history.push()
    };

    const timeSlots = [];
    for (let hour = 8; hour <= 14; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const time = `${hour}:${minute === 0 ? '00' : '30'}`;
            timeSlots.push(time);
        }
    }

    return (
        <div>
            <h2>ตารางเวลา</h2>
            <table>
                <thead>
                    <tr>
                        <th>เวลา</th>
                        <th>ห้อง A</th>
                        <th>ห้อง B</th>
                        <th>ห้อง C</th>
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map(time => (
                        <tr key={time}>
                            <td>{time}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedTimes.roomA.includes(time)}
                                    onChange={() => handleCheckboxChange('roomA', time)}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedTimes.roomB.includes(time)}
                                    onChange={() => handleCheckboxChange('roomB', time)}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedTimes.roomC.includes(time)}
                                    onChange={() => handleCheckboxChange('roomC', time)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSubmit}>ยืนยัน</button>
        </div>
    );
};

export default TimeTable;
