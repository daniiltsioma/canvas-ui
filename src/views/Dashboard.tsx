import Header from "components/Header/Header";
import ImageCard from "components/cards/Card/ImageCard";
import { useLoaderData } from "react-router-dom";
import { CourseData } from "utils/courses";

const Dashboard = () => {
  const courses = useLoaderData() as CourseData[];

  return (
    <div className="container px-5">
      <Header size="lg">Dashboard</Header>
      <div className="flex space-x-6 pt-5">
        {courses.map((course) => (
          <ImageCard
            key={course.id}
            url={`course/${course.id}`}
            imageUrl={course.imageUrl}
            title={course.title}
            subtitle={course.term}
            color={course.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
