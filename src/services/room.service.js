// src/services/bookingService.js
import axios from 'axios';

export const getRooms = async () => {
    try {
        const response = await axios.post('http://helloworld10.sit.kmutt.ac.th:3000/api/rooms/', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response.data; // คืนค่าการจองที่สร้างขึ้น
      } catch (error) {
        console.error('Error creating booking:', error);
        throw error; // ถ้ามีข้อผิดพลาด
      }
}

export const getRoomsByBuilding = async (building) => {
  try {
      const response = await axios.get(`http://helloworld10.sit.kmutt.ac.th:3000/api/rooms/area/${building}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data.data; // คืนค่าการจองที่สร้างขึ้น
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error; // ถ้ามีข้อผิดพลาด
    }
}