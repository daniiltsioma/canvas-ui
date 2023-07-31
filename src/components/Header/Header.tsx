import { ReactNode } from "react";
import { ComponentProps } from "../../types";

const Header = ({ children }: ComponentProps) => {
  return (
    <div className="text-4xl text-gray-900 font-light text-slate pt-4 pb-3 border-b border-b-slate-300">
      {children}
    </div>
  );
};

export default Header;
