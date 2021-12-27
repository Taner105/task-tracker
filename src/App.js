
import './App.css';
import {useState, useEffect} from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
   const baseUrl = "http://localhost:5000/tasks"

  // const deleteTask = (deletdeTaskId) => {
  //   setTasks(tasks.filter((task)=> task.id !== deletdeTaskId));
   
   
  // };


  //delete task fetch
  // const deleteTask = async(deletedTaskId) => {
  //   await fetch(`${baseUrl}/${deletedTaskId}`, {
  //     method:"DELETE",
  //   });
  //   fetchTasks()
  // }

  //delete task axios

  const deleteTask = async(deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`);
    fetchTasks();

  }

  //Fetch tasks
  // const fetchTasks = async() => {
  //     const res = await fetch(baseUrl);
  //     const data = await res.json();

  //     console.log(data)
  //   };

  //Fetch tasks with axios

  const fetchTasks = async() => {
    const {data} = await axios.get(baseUrl)  //destrc. işlemi
    setTasks(data)
  }
    

  useEffect(() => {
    fetchTasks();
  }, [])

  //Add task

  // const addTask = async(newTask) => {
  //   const res = await fetch(baseUrl, {
  //     method:"POST",
  //     headers: {
  //       "Content-type":"aplication/json"
  //     },
  //     body:JSON.stringify(newTask),
  //   });
  //   fetchTasks();
  // }

  //ADD TASKS AXİOS
  const addTask = async(newTask) => {
    const res = await axios.post(baseUrl, newTask)
    fetchTasks()
  }


  // const addTask = (newTask) => {
  //   // console.log("addtask");
  //   const id = Math.floor(Math.random() * 100) + 1;
  //   const addNewTask = {id, ...newTask}
  //   setTasks([...tasks, addNewTask]); 
  // }
  return (
    <div className="container">
      
      <Header/>
      <AddTask addTask={addTask}/>
      <Tasks  tasks={tasks} deleteTask={deleteTask}/>
      
    </div>
  );
}

export default App;
