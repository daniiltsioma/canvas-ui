import ListCard from "components/cards/Card/ListCard";
import { announcements } from "./CourseHome";
import { Link } from "react-router-dom";

const Announcements = () => {
  return (
    <div className="block w-4/5">
      <div className="border-y border-slate-300 divide-y divide-slate-300 mt-16">
        {announcements.map((ann) => (
          <div>
            <Link to={`/course/announcements/${ann.id}`}>
              <ListCard
                title={ann.title}
                description={ann.description}
                name={ann.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
