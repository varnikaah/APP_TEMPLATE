import React from "react";
import multi_image from "../assets/app_screen.png";
import { IoSettings } from "react-icons/io5";
import { GiGearStickPattern, GiSandsOfTime } from "react-icons/gi";
import { IoMdAppstore } from "react-icons/io";
const component_name = [
  {
    title: "easy to customize",
    icon: <IoSettings className=" w-10 h-10 fill-gray-800" />,
  },
  {
    title: "responsice desgin",
    icon: <GiGearStickPattern className=" w-10 h-10  fill-gray-800" />,
  },
  {
    title: "prefect show",
    icon: <GiSandsOfTime className=" w-10 h-10  fill-gray-800" />,
  },
  {
    title: "app store support",
    icon: <IoMdAppstore className=" w-10 h-10  fill-gray-800" />,
  },
];
function Desgin({ name, children }) {
  return (
    <div className="  flex flex-col justify-center items-center gap-3">
      <div className=" rounded-full flex justify-center items-center border border-blue-600 h-32 w-32 ">
        {children}
      </div>
      <h1 className=" uppercase">{name}</h1>
    </div>
  );
}
export default function FeactureSection() {
  return (
    <section
      id="feature"
      className=" flex flex-wrap max-xl:justify-center  justify-between items-center py-10 max-sm:px-0 px-36 "
    >
      <div>
        <h1 className=" max-sm:text-lg max-sm:font-semibold text-4xl font-extralight text-center">
          Some Amazing Features
        </h1>
        <div className=" justify-center  max-sm:grid-cols-[200px] max-sm:grid-rows-[repeate(4,200px)] grid grid-cols-[200px_200px] grid-rows-[200px_200px] gap-x-16 gap-y-10 p-8">
          {component_name.map(({ title, icon }) => (
            <Desgin name={title}>{icon}</Desgin>
          ))}
        </div>
      </div>
      <img className=" min-h-96  h-[60vh] object-contain" src={multi_image} />
    </section>
  );
}
