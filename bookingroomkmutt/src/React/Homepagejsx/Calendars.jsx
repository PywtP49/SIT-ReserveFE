import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const TaskScheduler = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);

//   const handleSelectSlot = ({ start, end }) => {
//     const newTask = { start, end, title: 'New Task' };
//     setEvents([...events, newTask]);
//     setSelectedTask(newTask);
//   };

  // const handleConfirm = () => {
  //   alert('Task confirmed: ' + selectedTask.title);
  // };

  return (
    <div>
      <h2>Task Scheduler</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        views={['week', 'day']}
      />
      {selectedTask && (
        <div>
          <h3>Selected Task: </h3>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default TaskScheduler;
