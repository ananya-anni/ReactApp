
import './App.css';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import {useState} from 'react';
import { useEffect } from 'react';


function App() {

  const [tasks,setTasks]=useState(() => {
  const saved = localStorage.getItem("tasks");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});


useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
}, [tasks]);


const onDelete=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id));
  alert("Task Deleted!")
}

const onAdd=(name)=>{
  const id = Date.now()+Math.floor(Math.random()*10000)+1;
  const newTask={id, text: name,marked:false};
  setTasks([...tasks, newTask]); 
}

const onComplete=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id));
  alert("Task Completed!");
}

const onImportant=(id,marked)=>{
  console.log("Mark as important",id);
  if(marked===false){
    alert("Task marked as important");
  }
  else{
    alert("Remove importance");
  }
  setTasks(
    tasks.map((task)=>task.id===id?{...task,marked:!task.marked}:task)
  ) 
}


  return (
    <>
      <Header title="My Day ..."/>
      <AddTask tasks={tasks} onAdd={onAdd}/>
      {tasks.length>0?<Tasks tasks={tasks} onDelete={onDelete} onComplete={onComplete} onImportant={onImportant}/>:<h2 className='no-tasks'>"No task to display"</h2>}
    </>
  );
}

export default App;
