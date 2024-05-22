import React from "react";
import NavBar from "./NavBar";

export default function LandingSection() {
  return (
    <section
      id="top"
      className="  bg-no-repeat overflow-hidden  grid grid-rows-[auto_92vh]  section-1 h-screen bg-contain bg-black  "
    >
      <NavBar />
      <div className=" min-h-fit  overflow-hidden flex    box-border    ">
        <div className="    max-lg:w-full flex flex-col w-[70%] text-white font-extralight text-3xl justify-center gap-y-7 items-center max-sm:px-5 px-56">
          <div className=" max-lg:text-lg">
            <h1>Showcase your App</h1>
            <h1>
              with <span className=" font-bold">FreeBies.com</span>
            </h1>
          </div>

          <p className=" max-lg:text-xs text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            expedita alias quae dignissimos quos quisquam sunt eveniet illum
            suscipit voluptatem, delectus quas recusandae nisi dicta nemo
          </p>
          <button className=" border border-white text-lg px-9 py-2">
            Download
          </button>
        </div>
        <div className=" max-lg:hidden   flex-1  flex items-end         ">
          <div className="image w-64 h-[80vh]  " />
        </div>
      </div>
    </section>
  );
}
