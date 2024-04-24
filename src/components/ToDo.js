import React from 'react';
import { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ToDo = () => {
  const [toDoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [reminder, setReminder] = useState(false);

  return <div></div>;
};

export default ToDo;
