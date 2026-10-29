"use Client";

import { useState, useEffect } from "react";


export default function ToDoForm({ AddTask, editingTask, updateTask, resetEditingTask }) {

    const [title, settitle] = useState('');
    const [taskStatus, setTaskStatus] = useState(false);

    const handleCancel = (e)=> {
        settitle('');
        setTaskStatus(false);
        resetEditingTask();

        useEffect( () =>{
           
            if(editingTask) {
               const {title , status} = editingTask;
              settitle(title);
              setTaskStatus(status);
            }else {
              settitle("");
              setTaskStatus(false);
              
            }
        },[editingTask]);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();

        if(!title.trim() ) return;

        if(editingTask)
          updateTask(editingTask.id, title , taskStatus);
        else
        AddTask (title, taskStatus);

        handleCancel;
    }

    return (
         <form onSubmit={handleSubmit}>
      <div className="m-3 p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Pet Data</h3>
        <div className="flex">
          <label className="mb-2 text-sm font-medium text-slate-700">Pet Name:</label>
          <br>
          </br>
          <input
            type="text"
            placeholder="Enter name"
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
           <label className="mb-2 text-sm font-medium text-slate-700">Birthdate:</label>
          
          <input
            type="text"
            placeholder="วว/ดด/ปปปป"
            className="w-11/12 ms-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease-content focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            value={title}
            onChange={(e)=>settitle(e.target.value)}
          />
          
        </div>
        
        <div className="flex gap-3">
          <label className="mt-4 py-4 text-sm font-medium text-slate-700">sex:</label>
          <label className="mt-4 px-4 py-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="taskStatus" value='true' checked={taskStatus === true} onChange={(e)=>setTaskStatus(e.target.value === 'true')} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">Male</span>
          </label>
          <label className="ms-2 mt-4 px-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <input type="radio" name="taskStatus" value='false' checked={taskStatus === false} onChange={(e)=>setTaskStatus(e.target.value === 'true')} className="h-4 w-4 accent-blue-600 cursor-pointer" />
            <span className="text-sm font-medium text-gray-700">Female</span>
          </label>
        </div>
        <div className="flex mt-4 gap-2 justify-center">

          <button  className="bg-blue-600 text-white px-4 py-1 rounded">
           {editingTask ? 'Update' : "Submit"}
          </button>

          <button className="bg-gray-600 text-white px-4 rounded" onClick= {handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>


    );
}