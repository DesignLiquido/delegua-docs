// Import's
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImNpm } from "react-icons/im";

// Asset's
import logo from "../assets/images/dl_logo.png";

const Header = () => {
  return (
    <header
      className="w-screen flex justify-around items-center h-20
      shadow-2xl backdrop-blur-md">
      <div>
        <Image src={logo} width={250} alt="" priority={true} />
      </div>

      <nav
        className="flex items-center justify-center gap-2 text-white
        text-xl">
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
      </nav>
    </header>
  );
};

export default Header;
