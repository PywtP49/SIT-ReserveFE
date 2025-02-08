// src/services/bookingService.js
import axios from 'axios';

export const createBooking = async (formData) => {
  try {
    const response = await axios.post('http://helloworld10.sit.kmutt.ac.th:3000/api/bookings', {
      ...formData,
      timestamp:  new Date().toISOString().slice(0, 19).replace("T", " ")
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // คืนค่าการจองที่สร้างขึ้น
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error; // ถ้ามีข้อผิดพลาด
  }
};

export const updateBooking = async (bookingId, updatedData) => {
    console.log("Booking ", bookingId)
    try {
      const response = await axios.put(`http://helloworld10.sit.kmutt.ac.th:3000/api/bookings/${bookingId}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data; // คืนค่าการอัปเดตที่เสร็จสมบูรณ์
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error; // ถ้ามีข้อผิดพลาด
    }
  };
  
  