import { Announcement } from "types";

export interface CourseData {
  id: number;
  imageUrl: string;
  title: string;
  term: string;
  color: string;
  announcements: Announcement[];
  syllabus: string;
}

export interface AnnouncementsData {
  courseId: number;
  title: string;
  announcements: Announcement[];
}

export interface AnnouncementData {
  announcementId: number;
  title: string;
  courseId: number;
}

const courses: CourseData[] = [
  {
    id: 1,
    imageUrl: "/assets/images/class-1.jpeg",
    title: "Calculus III",
    term: "Spring 2023",
    color: "#EA580C",
    announcements: [
      {
        id: 1,
        courseId: 1,
        title: "Final exam coming! (111)",
        description:
          "Hey Everyone, quick reminder: you can bring one index card with any notes you want",
        postedOn: Date.parse("2023-06-07T18:21:00-07:00"),
        name: "John Doe",
      },
      {
        id: 2,
        courseId: 1,
        title: "Case Study: Part 2 (111)",
        description:
          "I have attached the case study part 2 template with some additional notes.  I have also attached a notes worksheet with example sentences that could be used in case study part 2.  These are additional notes to help frame your case study.",
        postedOn: Date.parse("2022-10-24T23:59:00-07:00"),
        name: "Brian Chesky",
      },
      {
        id: 3,
        courseId: 1,
        title: "Timeline for project completion (111)",
        description: `
Hi all, a brief timeline for your projects:
Week 8: By next wednesday, 11:59pm:  submit your rough draft for peer review.
Week 9: By your mentor session:  review your peer's submission and return it, discuss briefly in mentor session.
Week 10:  Make revisions on your report.  Website logistics/layout will be discussed in mentor session.
By Monday, Finals week:  Post your report to the class website.`,
        postedOn: Date.parse("2021-10-24T23:59:00-07:00"),
        name: "Paul Graham",
      },
    ],
    syllabus: `
  ## First Steps (111)
  Start with your course syllabus. Everything you need for your course is listed in the syllabus, and it should always be your first reference for information about your course.
  ## Course Info
  * Course content is located in modules.
  ## Help
  * Use the inbox to reach out to your instructor.
    `,
  },
  {
    id: 2,
    imageUrl: "/assets/images/class-2.jpeg",
    title: "Physics III",
    term: "Spring 2023",
    color: "#DB2777",
    announcements: [
      {
        id: 4,
        courseId: 2,
        title: "Final exam coming! (222)",
        description:
          "Hey Everyone, quick reminder: you can bring one index card with any notes you want",
        postedOn: Date.parse("2023-06-07T18:21:00-07:00"),
        name: "John Doe",
      },
      {
        id: 5,
        courseId: 2,
        title: "Case Study: Part 2 (222)",
        description:
          "I have attached the case study part 2 template with some additional notes.  I have also attached a notes worksheet with example sentences that could be used in case study part 2.  These are additional notes to help frame your case study.",
        postedOn: Date.parse("2022-10-24T23:59:00-07:00"),
        name: "Brian Chesky",
      },
      {
        id: 6,
        courseId: 2,
        title: "Timeline for project completion (222)",
        description: `
Hi all, a brief timeline for your projects:
Week 8: By next wednesday, 11:59pm:  submit your rough draft for peer review.
Week 9: By your mentor session:  review your peer's submission and return it, discuss briefly in mentor session.
Week 10:  Make revisions on your report.  Website logistics/layout will be discussed in mentor session.
By Monday, Finals week:  Post your report to the class website.`,
        postedOn: Date.parse("2021-10-24T23:59:00-07:00"),
        name: "Paul Graham",
      },
    ],
    syllabus: `
  ## First Steps (222)
  Start with your course syllabus. Everything you need for your course is listed in the syllabus, and it should always be your first reference for information about your course.
  ## Course Info
  * Course content is located in modules.
  ## Help
  * Use the inbox to reach out to your instructor.
    `,
  },

  {
    id: 3,
    imageUrl: "/assets/images/class-3.jpg",
    title: "Global Environmental Change",
    term: "Spring 2023",
    color: "#52525B",
    announcements: [
      {
        id: 7,
        courseId: 3,
        title: "Final exam coming! (333)",
        description:
          "Hey Everyone, quick reminder: you can bring one index card with any notes you want",
        postedOn: Date.parse("2023-06-07T18:21:00-07:00"),
        name: "John Doe",
      },
      {
        id: 8,
        courseId: 3,
        title: "Case Study: Part 2 (333)",
        description:
          "I have attached the case study part 2 template with some additional notes.  I have also attached a notes worksheet with example sentences that could be used in case study part 2.  These are additional notes to help frame your case study.",
        postedOn: Date.parse("2022-10-24T23:59:00-07:00"),
        name: "Brian Chesky",
      },
      {
        id: 9,
        courseId: 3,
        title: "Timeline for project completion (333)",
        description: `
Hi all, a brief timeline for your projects:
Week 8: By next wednesday, 11:59pm:  submit your rough draft for peer review.
Week 9: By your mentor session:  review your peer's submission and return it, discuss briefly in mentor session.
Week 10:  Make revisions on your report.  Website logistics/layout will be discussed in mentor session.
By Monday, Finals week:  Post your report to the class website.`,
        postedOn: Date.parse("2021-10-24T23:59:00-07:00"),
        name: "Paul Graham",
      },
    ],
    syllabus: `
  ## First Steps (333)
  Start with your course syllabus. Everything you need for your course is listed in the syllabus, and it should always be your first reference for information about your course.
  ## Course Info
  * Course content is located in modules.
  ## Help
  * Use the inbox to reach out to your instructor.
    `,
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

export const getCourseAnnouncements = (courseId: number) => {
  const course = courses.find((course) => course.id === courseId);

  return course ? course.announcements : null;
};

export const getPrimaryAnnouncement = ({ params }: any) => {
  const course = courses.find(
    (course) => course.id === Number(params.courseId)
  );

  return course ? course.announcements[0] : null;
};

export const announcementsLoader = ({ params }: any) => {
  const announcements = getCourseAnnouncements(Number(params.courseId));

  return {
    courseId: params.courseId,
    title: "Announcements",
    announcements,
  };
};

export const announcementLoader = ({ params }: any) => {
  const course = courses.find(
    (course) => course.id === Number(params.courseId)
  ) as CourseData;
  const announcement = course.announcements.find(
    (ann) => ann.id === Number(params.announcementId)
  ) as Announcement;

  return {
    announcementId: announcement.id,
    title: announcement.title,
    courseId: announcement.courseId,
  };
};
