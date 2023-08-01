// TaskForm.jsx

import React, { useState } from "react";
import TaskInput from "./TaskInput";

function TaskForm({ addTask, task, taskFormUpdate, onUpdate, darkmod }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [desc, setDesc] = useState(task ? task.desc : "");

  const handleTaskTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, desc);
    } else {
      addTask(title, desc);
    }

    setTitle("");
    setDesc("");
  };

  return (
    <div>
      {!darkmod && taskFormUpdate ? (
        <div className="task-form w-100 container">
          <form className="center " onSubmit={handleOnSubmit}>
            <TaskInput value={title} onChange={handleTaskTitleChange} label="Görev Adı" />
            <TaskInput value={desc} onChange={handleTaskDescChange} label="Görev Açıklaması" type="textarea" rows={5} />
            <button type="submit" className="btn btn-secondary">
              Güncelle
            </button>
          </form>
        </div>
      ) : darkmod && taskFormUpdate ? (
        <div className="task-form w-100 container">
          <form className="center " onSubmit={handleOnSubmit}>
            <TaskInput value={title} onChange={handleTaskTitleChange} label="Görev Adı" />
            <TaskInput value={desc} onChange={handleTaskDescChange} label="Görev Açıklaması" type="textarea" rows={5} />
            <button type="submit" className="btn btn-secondary">
              Güncelle
            </button>
          </form>
        </div>
      ) : !darkmod ? (
        <div className="bg-gray">
          <div className="task-form container">
            <h3 className="text-center">Yapılacaklar Listesi</h3>
            <form className="center" onSubmit={handleOnSubmit}>
              <TaskInput value={title} onChange={handleTaskTitleChange} label="Görev Adı" />
              <TaskInput value={desc} onChange={handleTaskDescChange} label="Görev Açıklaması" type="textarea" rows={5} />
              <button type="submit" className="btn btn-primary">
                Gönder
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-dark">
          <div className="task-form container">
            <h3 className="text-center text-white">Yapılacaklar Listesi</h3>
            <form className="center" onSubmit={handleOnSubmit}>
              <TaskInput value={title} onChange={handleTaskTitleChange} label="Görev Adı" darkmod />
              <TaskInput value={desc} onChange={handleTaskDescChange} label="Görev Açıklaması" type="textarea" rows={5} darkmod />
              <button type="submit" className="btn btn-primary">
                Gönder
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
