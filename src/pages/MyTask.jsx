import React, { useEffect, useState } from "react";
import editIcon from "../assets/icons/edit_icon.png";
import deleteIcon from "../assets/icons/delete_icon.png";
import { Link, useNavigate } from 'react-router-dom'

const MyTask = ({ baseURL }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const getData = async ()=>{
      const response = await fetch(`${baseURL}/tasks`);
      const data = await response.json();
      setData(data.tasks);
      console.log(data.tasks);
    };

    getData();

  }, []);

  const deleteTask = async ()=>{
    const res = await fetch(`${baseURL}/{id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    navigate(0);
  };

  return (
    <div className="container d-grid gap-4">
      <div className="d-flex justify-content-between align-items-center py-4">
        <p className="fs-3 m-0 fw-semibold">MyTasks</p>
        <Link to='/new-task' className="m-0 text-main-color fs-6 fw-semibold text-decoration-none">+ Add New Task</Link>
      </div>

      {data && data.map((eachTask) => {
        let textColor =
          eachTask.tag === "Urgent" ? "text-danger" : "text-success";
        const { _id, title, description, tag }  = eachTask;

        return (
          <div
            key={_id}
            className="border border-2 border-light p-3 rounded-3"
          >
            <div className="d-flex justify-content-between pb-3 align-items-end">
              <p className={`m-0 ${textColor}`}>{eachTask.tag}</p>
              <div className="d-flex align-items-center gap-3">
                <Link to={`/edit-task/${_id}`} className="btn text-white bg-main-color d-flex align-items-center gap-1">
                  <img src={editIcon} alt="" /> Edit
                </Link>
                <button onClick={()=>{
                  deleteTask(_id);
                }} className="btn text-main-color border-main-color border-1 d-flex align-items-center gap-1">
                  <img src={deleteIcon} alt="" /> Delete
                </button>
              </div>
            </div>
            <div className="text-md-start py-3 border-top border-light border-2">
              <p className="fs-3 fw-semibold">{eachTask.title}</p>
              <p className="text-secondary">{eachTask.description}</p>
            </div>
          </div>
        );
      })}
      <p className="py-4 text-main-color fw-semibold fs-5 text-decoration-none">
        Back to Top
      </p>
    </div>
  );
};

export default MyTask;
