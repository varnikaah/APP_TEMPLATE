import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "@uidotdev/usehooks";
const link = [
  {
    name: "Feature",
    url: "feature",
  },
  {
    name: "Screenshot",
    url: "screenshot",
  },
  {
    name: "App",
    url: "app",
  },
  { name: "About", url: "about" },
  {
    name: "Contact",
    url: "contact",
  },
];
function NavItem({ name, url }) {
  return (
    <Link
      className=" cursor-pointer"
      smooth
      offset={-10}
      duration={500}
      to={url}
    >
      {url}
    </Link>
  );
}
export default function NavBar() {
  const isMobile = useMediaQuery("only screen  and (max-width : 1022px)");
  const [show, setState] = useState(!isMobile);
  useEffect(() => {
    if (isMobile) setState(false);
  }, [isMobile]);
  useEffect(() => {
    const clickHandler = () => {
      if (show && isMobile) setState((curr) => false);
    };
    const scroll = () => {
      if (show && isMobile) setState((curr) => false);
    };
    window.onclick = clickHandler;
    window.onscroll = scroll;
  }, [show]);
  const menuHandler = (e) => {
    e.stopPropagation();
    setState((curr) => true);
  };
  return (
    <nav className=" h-[8vh]   max-sm:gap-x-0 max-lg:justify-between  px-8 py-14 box-border flex justify-center gap-x-96 items-center ">
      <img className=" max-lg:flex-none flex-1 h-4 object-contain" src={logo} />

      <ul
        className={twMerge(
          ` lg:translate-x-0   z-20 max-lg:flex-col transition-all duration-300  max-lg:gap-5 max-lg:p-8 max-lg:justify-start max-lg:bg-sky-500 max-lg:fixed  max-lg:right-0 max-lg:top-0 max-lg:bottom-0 max-lg:h-full    text-xs font-semibold self-end   flex-1   uppercase text-white flex gap-x-8 justify-end
          ${!show && "translate-x-[100%]"} `
        )}
      >
        {link.map(({ name, url }) => (
          <NavItem name={name} url={url} />
        ))}
      </ul>
      <button
        className="max-lg:block hidden w-fit"
        id="menu"
        onClick={menuHandler}
      >
        <HiMenuAlt1 className="  fill-white h-5 w-5   " />
      </button>
    </nav>
  );
}
