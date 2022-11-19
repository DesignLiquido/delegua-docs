// Import's
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

// Asset's
import logo from "../assets/images/dl_logo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImNpm } from "react-icons/im";
import { FiMenu } from "react-icons/fi";

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
          <Link className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]" href={""}>
            Docs
          </Link>
          <Link className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]" href={""}>
            Bibliotecas
          </Link>
          <Link className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]" href={""}>
            Experimente Online
          </Link>
          <Link
            className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]"
            href={"https://github.com/DesignLiquido"}
          >
            <BsGithub size={25} />
          </Link>
          <Link 
            className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]"
            href={"https://www.linkedin.com/company/design-liquido/"}
          >
            <BsLinkedin size={25} />
          </Link>
          <Link
            className="p-2 rounded-lg transition-all hover:bg-[#4e99c5]"
            href={"https://www.npmjs.com/package/delegua"}
          >
            <ImNpm size={25} />
          </Link>
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
