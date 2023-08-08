import ListCard from "components/cards/Card/ListCard";
import { Link, useLoaderData } from "react-router-dom";
import { AnnouncementsData } from "utils/courses";

const Announcements = () => {
  const data = useLoaderData() as AnnouncementsData;

  return (
    <div className="block w-4/5">
      <div className="border-y border-slate-300 divide-y divide-slate-300 mt-16">
        {data.announcements.map((ann) => (
          <div key={ann.id}>
            <Link to={`/course/${ann.courseId}/announcements/${ann.id}`}>
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
