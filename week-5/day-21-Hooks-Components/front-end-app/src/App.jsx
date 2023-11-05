import { useState, useEffect } from "react";
import jsontasks from "/data/tasks.json";
import "./App.css"
import Task from '/components/Task.jsx'

function App(){
        //get     set            init                  
  const [tasks, setTasks] = useState(jsontasks)
  const [formInput, setFormInput] = useState("")
  const [show, setShow] = useState(true)
  const formSubmit = (e) =>{
    e.preventDefault();
    let newTask = {id:tasks.length+1, task: formInput, complete:false}
    setTasks([...tasks, newTask])
    setFormInput("")
  }

  useEffect(()=>{
    console.log(show)
  })

  return (
    <>
      {/* <div>{hello}</div>
      <button onClick={()=>setHello("Goodbye Victor")}>Click Me</button>
     */}
      {/* {show ?
      <h1>Hello</h1>
      :
      <h1>Goodbye</h1>
      } */}
      {/* <button onClick={()=>setShow(!show)} > 
      Change
      </button>
      <br/>
      <br/> */}

      <form onSubmit={(e)=> formSubmit(e)}>
        <input 
        value={formInput}
        placeholder="Enter Task" 
        onChange={(e) => setFormInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ol>
        {tasks.map((task)=>(
          // taskTitle = {task.task} taskId = {task.id} taskCompleted = {task.completed}
          <Task
          key = {task.id}
          taskTitle = {task.task} 
          taskId = {task.id} 
          taskCompleted = {task.completed}
          />
        ))}
      </ol>
      
    </>
  );
}

export default App