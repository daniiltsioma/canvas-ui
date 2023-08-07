import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div className="w-full container px-5">
      <Header size="md">MTH-253 Calculus III</Header>
      <div className="w-full flex items-start">
        <Sidebar term="Spring 2023" />
        <Outlet />
      </div>
    </div>
  );
};

export default Course;