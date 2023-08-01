
import { useState } from 'react';
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {RiEdit2Fill}  from "react-icons/ri";
import TaskForm from './TaskForm';
function Task({task,deleteTask,updateToTask}) {
    const [editPosition, seteditPosition] = useState(false);
    const deleteFunction=()=>{
        deleteTask(task.id)
    }

    const editFunction=()=>{
        seteditPosition(true);
    }
    const onUpdate=(id,updatedTitle,updatedDesc)=>{
        seteditPosition(false);
        updateToTask(id,updatedTitle,updatedDesc);
    }
    return (
        

        <div className="col-lg-3 col-md-4">
            {editPosition?
            <TaskForm task={task} taskFormUpdate={true} onUpdate={onUpdate}/>
            
            :<div class="shadow-lg p-3 bg-body rounded borderOne height-alert">
                <p className="rounded-pill w-75 text-center bg-colomy text-white fs-4">{task.title}</p>
                <p className="lead pt-3">{task.desc}</p>
                <div class="d-grid d-md-flex justify-content-md-end position">
                    <button class="btn btn-white" type="button" onClick={deleteFunction}><RiDeleteBin6Fill className='icon-edit'/></button>
                    <button class="btn btn-white" type="button" onClick={editFunction} ><RiEdit2Fill className='icon-edit'/></button>
                </div>
            </div>}
        </div>
        );
}

export default Task;
