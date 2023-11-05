import { useState } from "react";


const Task = ({taskTitle, taskId, taskCompleted}) => {
  // console.log({taskTitle, taskId, taskCompleted})

  const [checked, setChecked] = useState(taskCompleted)
  return(
    <>
      <li>
            <input 
            type="checkbox"
            checked ={taskCompleted}
            onChange={(e)=>setChecked(e.target.checked)}
            // checked ={task.completed}
            // onChange={(e) => 
            //   setTasks(
            //     tasks.map((item)=>{
            //       if(item.id === task.id) {
            //         item.completed = !item.completed;
            //         return item;
            //       }else {
            //         return item;
            //       }
            // }))}  
            />
            {/* {task.task} */}
            {taskTitle}
      </li>
    </>
  );

};

export default Task