export interface CourseData {
  id: number;
  imageUrl: string;
  title: string;
  term: string;
  color: string;
}

const courses: CourseData[] = [
  {
    id: 1,
    imageUrl: "/assets/images/class-1.jpeg",
    title: "Calculus III",
    term: "Spring 2023",
    color: "#EA580C",
  },
  {
    id: 2,
    imageUrl: "/assets/images/class-2.jpeg",
    title: "Physics III",
    term: "Spring 2023",
    color: "#DB2777",
  },
  {
    id: 3,
    imageUrl: "/assets/images/class-3.jpg",
    title: "Global Environmental Change",
    term: "Spring 2023",
    color: "#52525B",
  },
];

export const getAllCourses = () => {
  return courses;
};

export const getCourseTitleById = ({ params }: any) => {
  let course = courses.find((course) => course.id === Number(params.courseId));
  return course ? course.title : null;
};

export const getCurrentCourse = ({ params }: any) => {
  let course = courses.find((course) => course.id === Number(params.courseId));

  return course || null;
};
