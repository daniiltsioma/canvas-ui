import Header from "components/Header/Header";
import ListCard from "components/cards/Card/ListCard";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link, useLoaderData } from "react-router-dom";
import { CourseData } from "utils/courses";

const CourseHome = () => {
  const course = useLoaderData() as CourseData;

  const ann = course.announcements[0];

  return (
    <div className="w-4/5 pt-4">
      <Header size="md">
        <strong>Recent Announcements</strong>
      </Header>
      <div className="border-b border-b-slate-300">
        <Link to={`/course/${course.id}/announcements/${ann.id}`}>
          <ListCard
            title={ann.title}
            description={ann.description}
            name={ann.name}
          />
        </Link>
      </div>
      <div className="mt-4"></div>
      <Header size="lg">Calculus III Spring 2023</Header>
      <article className="prose pt-8">
        <ReactMarkdown>{course.syllabus}</ReactMarkdown>
      </article>
    </div>
  );
};

export default CourseHome;
