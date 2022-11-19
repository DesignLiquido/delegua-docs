// Import's
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import React from 'react'

// Asset's
import logo from "../assets/images/dl_logo.png";
import { FiMenu } from "react-icons/fi";
import { data } from "../data/dataHeader";

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <>
      <header
        className="w-screen flex justify-around items-center h-20
        shadow-2xl backdrop-blur-md">
        <div>
          <Image src={logo} width={250} alt="" priority={true} />
        </div>

        <nav
          className="flex items-center justify-center gap-2 text-white
          text-xl max-[900px]:hidden">
          {data.social.map((data) => {
            return(
              <Link key={data.id} className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]" href={data.link}>
                {typeof data.title === 'string' ? data.title : React.createElement(data.title, {
                  size: 25
                })}
              </Link>
            )
          })}
          <Link
            className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]"
            href={""}
            onClick={handleToggleSidebar}
          >
            <FiMenu size={25}  />
          </Link>
        </nav>
      </header>
      
      <Sidebar isOpen={sidebarIsOpen} />
    </>
  );
};

export default Header;
