import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface AnnouncementData {
  title: string;
  imageUrl?: string;
  description: string;
  postedOn: number;
  name: string;
  content: string;
}

const Announcement = () => {
  const data: AnnouncementData = {
    title: "Final exam coming!",
    description:
      "Hey Everyone, quick reminder: you can bring one index card with any notes you want",
    postedOn: Date.parse("2023-06-07T18:21:00-07:00"),
    name: "John Doe",
    content: `
### Hi all, a brief timeline for your projects: 
#### Week 8: 
By next wednesday, 11:59pm: submit your rough draft for peer review. 
#### Week 9: 
By your mentor session: review your peer's submission and
return it, discuss briefly in mentor session. 
#### Week 10: 
Make revisions on your report. Website logistics/layout will be discussed
in mentor session. By Monday, Finals week: Post your report to the
class website.
`,
  };

  return (
    <div className="w-4/5">
      <div className="flex items-center space-x-4 py-6">
        <div className="shrink-0">
          <img
            src={data.imageUrl || "/assets/images/user.jpeg"}
            alt={data.title}
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-md font-medium truncate text-gray-900">
            {data.title}
          </p>
          <p className="w-2/3 text-md truncate text-gray-500 mt-1">
            {data.name}
          </p>
        </div>
      </div>
      <div className="flex">
        <article className="prose pt-8">
          <ReactMarkdown children={data.content}></ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default Announcement;
