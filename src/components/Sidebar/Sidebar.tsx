import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

interface Props {
  term: string;
}

const Sidebar = ({ term }: Props) => {
  const [isChildActive, setIsChildActive] = useState();
  const { courseId } = useParams();

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname.split("/"));
    console.log(location.pathname.split("/").slice(3));
  }, [location]);

  const items = [
    {
      path: `/course/${courseId}`,
      text: "Home",
    },
    {
      path: `/course/${courseId}/announcements`,
      text: "Announcements",
    },
    {
      path: `/course/${courseId}/grades`,
      text: "Grades",
    },
    {
      path: `/course/${courseId}/people`,
      text: "People",
    },
  ];

  return (
    <aside className="w-1/5 flex-shrink-0 px-4 pt-8">
      <div className="px-2 text-xs">{term}</div>
      <div className="py-4">
        <ul>
          {items.map((item) => (
            <li key={item.text}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  [
                    "block w-full hover:underline text-blue-800 p-2 border-l-4",
                    isActive ||
                    // start isChildActive
                    location.pathname
                      .split("/")
                      .slice(3)
                      .includes(item.path.split("/").slice(3).join(""))
                      ? // end isChildActive
                        "border-blue-800"
                      : "border-transparent",
                  ].join(" ")
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
