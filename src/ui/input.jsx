import { twMerge } from "tailwind-merge";

export default function InputBox({ boxstyle, placeholder, type }) {
  return (
    <div
      className={twMerge(
        " h-fit border-b border-black relative text-gray-400 flex  " + boxstyle
      )}
    >
      <input
        className=" w-full  outline-none peer relative z-10 bg-transparent"
        type={type}
      />
      <h1 className=" text-sm  peer-focus:scale-75 origin-left  transition-all duration-300 peer-focus:-translate-y-[100%] absolute top-0 ">
        {placeholder}
      </h1>
    </div>
  );
}
