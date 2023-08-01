import { Link } from "react-router-dom";

const Sidebar = () => {
  const items = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/announcements",
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
    <aside className="w-60">
      <div className="py-4">
        <ul>
          {items.map((item) => (
            <li className="p-2 w-full">
              <Link
                to={item.path}
                className="block w-full hover:underline text-blue-800"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
