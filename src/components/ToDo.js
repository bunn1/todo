import React from 'react';
import { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const inputTask = useRef(null);

function addTask() {
  // add task to list
  setTodoList(...toDoList, { task: currentTask, completed: false, reminder });

  // clear line
  inputTask.current.value = '';
  setCurrentTask('');
  setReminder(!reminder);
}

const toggleReminder = () => {
  setReminder(!reminder);
};

const deleteTask = (taskToDelete) => {
  setTodoList(
    toDoList.filter((task) => {
      return task.task !== taskToDelete;
    })
  );
};

const ToDo = () => {
  const [toDoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [reminder, setReminder] = useState(false);

  return (
    <div className="App">
      <h1>To Do List!</h1>
      <div className="container">
        <input
          ref={inputTask}
          value={currentTask}
          type="text"
          placeholder="..Task"
          // Tryck på enter knappen för att lägga till en task
          onKeyDown={(event) => {
            event.keyCode === 13 && addTask();
          }}
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <label className="labelReminder">Set Reminder:</label>
        <div className="form-control form-control-check">
          <input
            className="checkReminder"
            name="field-name-three"
            id="unique-field-id-three"
            type="checkbox"
            checked={reminder}
            // value={reminder}
            onChange={toggleReminder}
          />
        </div>

        <button id="addButton" onClick={addTask}>
          Add Task
        </button>
      </div>
      <hr />

      <ul>
        {toDoList.map((val, key) => {
          return (
            <div id="task" key={key}>
              <li
                style={{
                  textDecoration: val.completed ? 'line-through' : 'none',
                }}
              >
                {val.task}
                {val.reminder ? <FiCheckCircle /> : ''}
              </li>
              <button onClick={() => completeTask(val.task)}>
                {val.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              <button onClick={() => handleEdit(val.task)}>Edit</button>
              <button onClick={handleSave}>Save</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
