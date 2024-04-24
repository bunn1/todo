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

const ToDo = () => {
  const [toDoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [reminder, setReminder] = useState(false);

  return <div></div>;
};

export default ToDo;
