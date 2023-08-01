
import React from "react";

function TaskInput({ value, onChange, label, type = "text", rows = 1, darkmod = false }) {
  return (
    <div className={`mb-3 w-50 center ${darkmod ? "text-white" : ""}`}>
      <label className={`form-label ${darkmod ? "text-white" : ""}`}>{label}</label>
      {type === "textarea" ? (
        <textarea value={value} onChange={onChange} className="form-control" rows={rows}></textarea>
      ) : (
        <input value={value} onChange={onChange} type="text" className="form-control" />
      )}
    </div>
  );
}

export default TaskInput;
