import Header from "components/Header/Header";
import ListCard from "components/cards/Card/ListCard";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { Announcement } from "types";

export const announcements: Announcement[] = [
  {
    id: 1,
    courseId: 2,
    title: "Final exam coming!",
    description:
      "Hey Everyone, quick reminder: you can bring one index card with any notes you want",
    postedOn: Date.parse("2023-06-07T18:21:00-07:00"),
    name: "John Doe",
  },
  {
    id: 2,
    courseId: 2,
    title: "Case Study: Part 2",
    description:
      "I have attached the case study part 2 template with some additional notes.  I have also attached a notes worksheet with example sentences that could be used in case study part 2.  These are additional notes to help frame your case study.",
    postedOn: Date.parse("2022-10-24T23:59:00-07:00"),
    name: "Brian Chesky",
  },
  {
    id: 3,
    courseId: 2,
    title: "Timeline for project completion",
    description: `
    Hi all, a brief timeline for your projects:
      Week 8: By next wednesday, 11:59pm:  submit your rough draft for peer review.
      Week 9: By your mentor session:  review your peer's submission and return it, discuss briefly in mentor session.
      Week 10:  Make revisions on your report.  Website logistics/layout will be discussed in mentor session.
      By Monday, Finals week:  Post your report to the class website.`,
    postedOn: Date.parse("2021-10-24T23:59:00-07:00"),
    name: "Paul Graham",
  },
];

const CourseHome = () => {
  const syllabus = `
  ## First Steps
  Start with your course syllabus. Everything you need for your course is listed in the syllabus, and it should always be your first reference for information about your course. 
  ## Course Info
  * Course content is located in modules.
  ## Help
  * Use the inbox to reach out to your instructor.
`;

  const ann = announcements[1];

  return (
    <div className="w-4/5 pt-4">
      <Header size="md">
        <strong>Recent Announcements</strong>
      </Header>
      <div className="border-b border-b-slate-300">
        <Link to={`/course/announcements/${ann.id}`}>
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
        <ReactMarkdown>{syllabus}</ReactMarkdown>
      </article>
    </div>
  );
};

export default CourseHome;
