import { Link } from "react-router-dom";

interface Props {
  term: string;
}

const Sidebar = ({ term }: Props) => {
  const items = [
    {
      path: "/",
      text: "Home",
      active: true,
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
              <Link
                to={item.path}
                className={[
                  "block w-full hover:underline text-blue-800 p-2",
                  item.active && "border-l-4 border-blue-800",
                ].join(" ")}
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
