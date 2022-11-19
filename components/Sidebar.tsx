// Import's
import Link from "next/link";

// Asset's
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImNpm } from "react-icons/im";

interface Props {
  isOpen: Boolean;
}

const Sidebar = ({ isOpen }: Props) => {
  const sidebarStyle = `${
    isOpen ? "w-72" : "w-0"
  } h-[calc(100vh-80px)] absolute backdrop-blur-md z-10 text-white flex
  flex-col items-center justify-center gap-3 p-5 transition-all duration-700`;

  const sidebarItemsStyle = `${
    isOpen
      ? "hover:bg-[#4e99c5] p-2 rounded-lg transition-all text-xl w-full text-center"
      : "hidden"
  }`;

  const sidebarItemsIconStyle = `${
    isOpen
      ? "hover:bg-[#4e99c5] p-2 rounded-lg transition-all text-xl w-full flex items-center justify-center gap-3"
      : "hidden"
  }`;

  return (
    <aside className={sidebarStyle}>
      <Link className={sidebarItemsStyle} href={""}>
        Docs
      </Link>
      <Link className={sidebarItemsStyle} href={""}>
        Bibliotecas
      </Link>
      <Link className={sidebarItemsStyle} href={""}>
        Experimente Online
      </Link>
      <Link className={sidebarItemsIconStyle} href={""}>
        <BsGithub size={25} /> Github
      </Link>
      <Link className={sidebarItemsIconStyle} href={""}>
        <BsLinkedin size={25} /> Linkedin
      </Link>
      <Link className={sidebarItemsIconStyle} href={""}>
        <ImNpm size={25} /> Npm
      </Link>
    </aside>
  );
};

export default Sidebar;
