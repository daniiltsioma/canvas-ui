import ListCard from "components/cards/Card/ListCard";
import { announcements } from "./CourseHome";

const Announcements = () => {
  return (
    <div className="block w-4/5">
      <div className="border-y border-slate-300 divide-y divide-slate-300 mt-16">
        {announcements.map((ann) => (
          <div>
            <ListCard
              title={ann.title}
              description={ann.description}
              name={ann.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
