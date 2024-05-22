import { useEffect, useRef } from "react";
import { BiUpArrow } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function ScrollToTop() {
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 400) {
        ref.current.className =
          " z-20 fill-white text-white  transition-all duration-200 bg-sky-500  fixed bottom-10 right-10 p-3 border border-sky-60 translate-x-0";
      } else {
        ref.current.className =
          "z-20 fill-white text-white  transition-all duration-200 bg-sky-500  fixed bottom-10 right-10 p-3 border border-sky-60  translate-x-[100vw]";
      }
    });
  }, []);
  return (
    <button ref={ref}>
      <Link
        smooth
        duration={400}
        className="flex justify-center items-center gap-3"
        to="top"
      >
        <FaArrowUp />
        Scroll To Top
      </Link>
    </button>
  );
}
