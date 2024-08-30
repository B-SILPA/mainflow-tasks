import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const toggleComplete = async () => {
    const updatedTask = { ...task, completed: !task.completed };
    const res = await axios.patch(`http://localhost:5000/tasks/${task._id}`, updatedTask);
    onUpdate(res.data);
  };

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/tasks/${task._id}`);
    onDelete(task._id);
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
