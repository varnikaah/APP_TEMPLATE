import React from "react";
import InputBox from "../ui/input";
import { DiAndroid } from "react-icons/di";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import userPorfile from "../assets/user.png";
import { IoLocation } from "react-icons/io5";
const input_boxs = [
  {
    type: "text",
    style: "text-white border-white",
    placeholder: "FullName",
  },
  {
    type: "email",
    style: "text-white border-white",
    placeholder: "Email",
  },
  {
    type: "phonenumber",
    style: "text-white border-white",
    placeholder: "Phone Number border-white",
  },
];
export default function Support() {
  return (
    <div id="contact" className="support-section py-12 px-20 space-y-10">
      <h1 className=" text-white m-4 n text-4xl font-extralight text-center ">
        App Support
      </h1>
      <div className=" max-lg:gap-10 justify-center max-lg:grid-row-2  max-lg:grid-cols-2  md:grid grid-cols-3 ">
        <div className=" flex flex-col gap-7">
          {input_boxs.map((curr) => (
            <InputBox
              boxstyle={curr.style}
              type={curr.type}
              placeholder={curr.placeholder}
            />
          ))}
          <textarea
            className=" resize-none placeholder-white placeholder-sm  text-white outline-none bg-transparent  border-b border-white"
            rows={5}
            placeholder="Message"
          />
          <button className=" text-white w-fit py-1 px-7 border-white  border">
            submit
          </button>
        </div>

        <div className=" justify-center flex flex-col gap-7 text-white p-4">
          <div className=" flex justify-center items-center flex-col gap-3">
            <FaMobile className=" size-7 fill-white" />
            <h1>+91 8360719593</h1>
          </div>
          <div className=" text-center flex justify-center items-center flex-col gap-3">
            <MdEmail className=" size-7 fill-white" />
            <h1>
              support.io@gmail.com <br /> help@gmail.com
            </h1>
          </div>
          <div className=" text-center flex justify-center items-center flex-col gap-3">
            <IoLocation className="  size-7 fill-white" />
            <h1>
              Chitkara University <br /> Rajpura
            </h1>
          </div>
        </div>

        <div className=" w-full justify-center  flex flex-col gap-5  items-center">
          <h1 className=" font-semibold text-white text-2xl  ">Online Chat</h1>
          <div className=" size-32 overflow-hidden rounded-full">
            <img
              className=" origin-top scale-150  size-32 "
              src={userPorfile}
            />
          </div>
          <div className=" flex flex-col items-center text-white">
            <h1>Jhon Thomus</h1>
            <button className="  text-xs bg-green-500  rounded-full px-4 py-1">
              Online
            </button>
          </div>

          <button className=" uppercase text-white w-fit py-1 px-7 border-white  border">
            start chat
          </button>
        </div>
      </div>
    </div>
  );
}
