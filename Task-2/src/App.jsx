import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === '') return;
    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, index) =>
        index === editIndex ? { ...t, name: task } : t
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { name: task, completed: false }]);
    }
    setTask('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };



  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };



  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };



  const editTask = (index) => {
    if (!tasks[index].completed) {
      setTask(tasks[index].name);
      setEditIndex(index);
    }
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)} onKeyPress={handleKeyPress}
        />
        <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? 'completed' : ''}>
            {t.name}
            <div className="task-actions">
              <button onClick={() => toggleComplete(index)}>
                {t.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
