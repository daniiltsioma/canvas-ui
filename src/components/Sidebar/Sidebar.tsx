import { Link } from "react-router-dom";

interface Props {
  term: string;
}

const Sidebar = ({ term }: Props) => {
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
    <aside className="w-1/5 flex-shrink-0 px-4 pt-8">
      <div className="px-2 text-xs">{term}</div>
      <div className="py-4">
        <ul>
          {items.map((item) => (
            <li className="p-2">
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
