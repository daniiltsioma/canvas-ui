import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div className="container px-5">
      <Header size="md">MTH-253 Calculus III</Header>
      <div className="flex mt-12">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Course;
