import { useMatches } from "react-router-dom";

const Breadcrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match: any) => Boolean(match.handle?.crumb))
    .map((match: any) => match.handle.crumb(match.data));

  return (
    <ol className="inline-flex items-center">
      {crumbs.map((crumb, index) => (
        <li className="inline-flex items-center" key={index}>
          {index > 0 ? (
            <svg
              className="w-3 h-3 text-gray-400 mx-3 mt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          ) : null}
          {crumb}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
