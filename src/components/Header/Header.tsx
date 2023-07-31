import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size: "md" | "lg";
}

const Header = ({ children, size }: Props) => {
  const classes = [
    "text-gray-900",
    "font-light",
    "text-slate",
    "pt-4",
    "pb-3",
    "border-b",
    "border-b-slate-300",
  ];

  switch (size) {
    case "md":
      classes.push("text-2xl");
      break;
    case "lg":
      classes.push("text-4xl");
      break;
  }

  return <div className={classes.join(" ")}>{children}</div>;
};

export default Header;
