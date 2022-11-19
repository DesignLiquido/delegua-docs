// Import's
import Link from "next/link";
import React from "react";

import { data } from "../data/dataHeader";

interface Props {
  isOpen: Boolean;
}

const Sidebar = ({ isOpen }: Props) => {
  const sidebarStyle = `${
    isOpen ? "w-screen" : "w-0"
  } h-[calc(100vh-100px)] absolute backdrop-blur-md z-10 text-white flex
  flex-col items-center justify-center gap-3 transition-all duration-700 md:w-0`;

  const sidebarItemsStyle = `${
    isOpen
      ? "hover:bg-[#4e99c5] p-2 rounded-lg transition-all text-xl w-full text-center md:hidden"
      : "hidden"
  }`;

  const sidebarItemsIconStyle = `${
    isOpen
      ? "hover:bg-[#4e99c5] p-2 rounded-lg transition-all text-xl w-full flex items-center justify-center gap-3 md:hidden"
      : "hidden"
  }`;

  return (
    <aside className={sidebarStyle}>
      {data.social.map((data) => (
        <Link
          key={data.id}
          className={
            typeof data.title === "string"
              ? sidebarItemsStyle
              : sidebarItemsIconStyle
          }
          href={data.link}
        >
          {typeof data.title === "string"
            ? data.title
            : React.createElement(data.title, {
                size: 25,
              })}
          {typeof data.title === "string" ? null : data.label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
