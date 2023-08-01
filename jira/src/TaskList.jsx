import Task from "./Task";

function TaskList({taskList,deleteTask,updateToTask,darkmod}) {
    return ( 

     <div>
     {!darkmod ?
      <div className="w-100 border border-1 edits row mx-auto pt-3 gap-3">
          {
            taskList.map((task,index)=>{
                  return  <Task key={index} task={task} deleteTask={deleteTask} updateToTask={updateToTask}/>
                })
          }
        </div>:
        <div className="w-100 border border-1 bg-dark edits row mx-auto pt-3 gap-3">
          {
            taskList.map((task,index)=>{
                  return  <Task key={index} task={task} deleteTask={deleteTask} updateToTask={updateToTask}/>
                })
          }
        </div>
     }
       
     </div>

    );
}

export default TaskList;