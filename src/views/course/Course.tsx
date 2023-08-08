import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div className="w-full container px-5">
      <Header size="md">
        <Breadcrumbs />
      </Header>
      <div className="w-full flex items-start">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Course;
