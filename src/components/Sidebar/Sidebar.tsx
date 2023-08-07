import { Link, NavLink } from "react-router-dom";

interface Props {
  term: string;
}

const Sidebar = ({ term }: Props) => {
  const items = [
    {
      path: "/course",
      text: "Home",
    },
    {
      path: "/course/announcements",
      text: "Announcements",
    },
    {
      path: "/grades",
      text: "Grades",
    },
    {
      path: "/people",
      text: "People",
    },
  ];

  return (
    <aside className="w-1/5 flex-shrink-0 px-4 pt-8">
      <div className="px-2 text-xs">{term}</div>
      <div className="py-4">
        <ul>
          {items.map((item) => (
            <li>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  [
                    "block w-full hover:underline text-blue-800 p-2 border-l-4",
                    isActive ? "border-blue-800" : "border-transparent",
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