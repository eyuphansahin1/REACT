import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs'
import axios from 'axios'
import { useEffect } from 'react';
function App() {
  
  const [darkmod, setDarkmod] = useState(localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : false)
  console.log(localStorage.getItem('darkMode'))
  console.log(darkmod);
  const [taskList, setTaskList] = useState([]);

  const addTask= async(title,desc)=>{
    const response=await axios.post('http://localhost:3004/tasks',{
      title,
      desc,
  })
    const createdTasks = [
      ...taskList,response.data
    ];
    setTaskList(createdTasks);
  } 


  const fetchTasks=async()=>{
    const response= await axios.get('http://localhost:3004/tasks');
    setTaskList(response.data)
  }
  
  useEffect(() => {
    fetchTasks();
  },[])
  

  const deleteTask=async(id)=>{
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const afterDeletingTasks=taskList.filter((task)=>{
      return task.id!=id
    })
    setTaskList(afterDeletingTasks);
  }
  const updateToTask=async(id,updatedTitle,updatedDesc)=>{
    await axios.put(`http://localhost:3004/tasks/${id}`,{
      title:updatedTitle,
      desc:updatedDesc,
    });
    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, desc: updatedDesc };
      }
      return task;
    });
    setTaskList(updatedTasks);

  }
  const translateDarkMode=()=>{
    setDarkmod(!darkmod);
    localStorage.setItem('darkMode',!darkmod)
  }
  return (
    <div>
      {!darkmod ?<div className='App'>
      <button className='dark-mod-button' onClick={translateDarkMode}><BsFillMoonFill/></button>
      <TaskForm addTask={addTask} darkmod={darkmod}/>
      <TaskList taskList={taskList} deleteTask={deleteTask} updateToTask={updateToTask}/>
      </div>:
      
      <div className='App'>
      <button className='dark-mod-button sun' onClick={translateDarkMode}><BsFillSunFill/></button>
      <TaskForm addTask={addTask} darkmod={darkmod}/>
      <TaskList darkmod={darkmod} taskList={taskList} deleteTask={deleteTask} updateToTask={updateToTask}/>
      </div>}

    </div>

  )
}

export default App
