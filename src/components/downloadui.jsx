import React from "react";

export default function DownloadUi({ style }) {
  return (
    <section
      id="app"
      className=" h-96 tilted-container  relative flex  items-center flex-col gap-10  justify-center "
    >
      <div className=" relative z-10 flex justify-center items-center flex-col text-white gap-2">
        <h1 className=" text-3xl text-white font-[10]">Get it for free</h1>
        <h1 className=" text-xs">
          Chosse your native platform and download for{" "}
          <span className=" uppercase font-bold ">free</span>
        </h1>
      </div>
      <div className=" flex-wrap justify-center items-center relative z-10 flex gap-5 text-white  text-xl font-extralight">
        <button className=" px-14 py-1 border">Android</button>
        <button className=" px-14 py-1 border">Apple</button>
      </div>
    </section>
  );
}
