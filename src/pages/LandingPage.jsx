import React from "react";
import menuIcon from "../assets/images/Menu_icon.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container vh-100 d-flex justify-content-between gap-4 w-100 my-5 task-1">
      <div className="text-start w-50 my-5 task-1">
        <h1 className="py-3">
          Manage your Tasks on <span> TaskDuty</span>
        </h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          facilis <br /> neque dicta est ducimus, aliquam voluptate beatae ipsam
          ullam natus. <br /> Earum quam animi unde. Corporis cumque provident
          rerum. Repudiandae, maxime?
        </p>
        <Link
          to="./my-task"
          className="w-20 bg-main-color py-2 px-3 rounded-2 text-white border-0 text-decoration-none btn"
        >
          Go to My Tasks
        </Link>
      </div>
      <div className=" w-50">
        <img src={menuIcon} alt="menuicon" />
      </div>
    </div>
  );
};

export default LandingPage;
