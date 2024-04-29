import React from 'react';
import { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ToDo = () => {
  const [toDoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [reminder, setReminder] = useState(false);

  const inputTask = useRef(null);

  function addTask() {
    // add task to list
    setTodoList([
      ...toDoList,
      { task: currentTask, completed: false, reminder },
    ]);
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

  const completeTask = (taskToComplete) => {
    setTodoList(
      toDoList.map((task) => {
        if (task.task === taskToComplete) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleEdit = (task) => {
    const foundTask = toDoList.find((t) => t.task === task);
    if (foundTask) {
      setEditTask(foundTask);
      setCurrentTask(foundTask.task);
    }
  };

  const handleSave = (task) => {
    if (editTask) {
      const updatedTasks = toDoList.map((task) => {
        if (task.task === editTask.task) {
          return { ...task, task: currentTask };
        }
        return task;
      });
      setTodoList(updatedTasks);
      setEditTask(null);
      setCurrentTask('');
    }
  };

  return (
    <div className="mainContainer min-h-screen flex justify-center items-center bg-[#403d39]">
      <div className="container pt-10 pb-10 rounded-md max-w-lg bg-[#fffcf2]">
        <h1 className="rubrik text-2xl text-[#252422] pt-4 pb-4">
          To Do List!
        </h1>
        <div className="containerTwo flex flex-col items-center w-full h-full p-4">
          <input
            className="taskField rounded-md p-1 mb-4 focus:outline-none cursor-pointer"
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
          <div className="flex items-center justify-between mb-2">
            <label className="labelReminder mr-4 my-4 text-[#252422]">
              Set Reminder:
            </label>
            <div className="form-control form-control-check">
              <input
                className="checkReminder appearance-none w-5 h-5 border rounded-md checked:bg-[#403d39]  mt-1 mr-2 cursor-pointer"
                name="field-name-three"
                id="unique-field-id-three"
                type="checkbox"
                checked={reminder}
                // value={reminder}
                onChange={toggleReminder}
              />
            </div>
          </div>
          <button
            className="btnAdd rounded-md px-8 py-2 mt-4 mb-4 text-white bg-[#403d39] hover:bg-[#252422] cursor-pointer"
            id="addButton"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        <div className="todo-list">
          <ul className="p-6 shadow-md rounded-md max-w-md">
            {toDoList.map((val, key) => {
              return (
                <div className="flex flex-col items-center" id="task" key={key}>
                  <li
                    style={{
                      textDecoration: val.completed ? 'line-through' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {val.reminder && (
                      <FiCheckCircle
                        style={{ verticalAlign: 'middle', marginRight: '10px' }}
                      />
                    )}{' '}
                    {/* Move the icon to the right */}
                    {val.task}
                  </li>
                  <div className="flex flex-row space-x-5 mt-4">
                    <button
                      className="btnComplete rounded-md px-2 py-2 mt-2 mb-2 text-white bg-[#403d39] hover:bg-[#252422] cursor-pointer"
                      onClick={() => completeTask(val.task)}
                    >
                      {val.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </button>
                    <button
                      className="deleteBtn rounded-md px-4 py-2 mt-2 mb-2 text-white bg-[#eb5e28] hover:bg-[#d9480f] cursor-pointer"
                      onClick={() => deleteTask(val.task)}
                    >
                      X
                    </button>
                    <button
                      className="editBtn rounded-md px-4 py-2 mt-2 mb-2 text-white bg-[#403d39] hover:bg-[#252422] cursor-pointer"
                      onClick={() => handleEdit(val.task)}
                    >
                      Edit
                    </button>
                    <button
                      className="saveBtn rounded-md px-4 py-2 mt-2 mb-2 text-white bg-[#eb5e28] hover:bg-[#d9480f] cursor-pointer"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
