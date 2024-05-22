import { DiAndroid, DiApple, DiWindows } from "react-icons/di";
import image from "../assets/landscape.png";
import { twMerge } from "tailwind-merge";
import InputBox from "../ui/input";
const data = [
  {
    count: 200,
    icon: <DiAndroid className="  w-7 h-7  fill-white" />,
    color: "bg-lime-500",
  },
  {
    count: 224,
    icon: <DiApple className="  w-7 h-7  fill-white" />,
    color: "bg-blue-500",
  },
  {
    count: 300,
    icon: <DiWindows className="  w-7 h-7  fill-white" />,
    color: "bg-orange-500",
  },
];
export default function DownloadAndUpdate() {
  return (
    <div className=" p-10 gap-16 flex flex-col justify-center items-center">
      <h1 className=" max-sm:text-center max-sm:text-lg text-4xl font-extralight tracking-wider">
        Download & Updates
      </h1>
      <div className=" flex gap-10 w-full  max-lg:flex-wrap justify-center  ">
        <div className=" flex-wrap max-lg:w-full max-lg:justify-center w-[50%] flex justify-end gap-5">
          {data.map((curr) => (
            <div
              className={twMerge(
                ` w-fit  text-white ${curr.color}  flex justify-center items-center flex-col p-6 rounded-full`
              )}
            >
              {curr.icon}
              <h1 className=" text-center">
                {curr.count} <br /> downloads
              </h1>
            </div>
          ))}
        </div>
        <div className=" max-lg:items-center  max-lg:w-full  w-[50%] flex  gap-10 flex-col">
          <h1 className=" text-sm italic ">we promise, we never spam mail</h1>
          <div className="max-lg:justify-center flex gap-5 w-full flex-wrap  ">
            <InputBox
              type={"email"}
              placeholder={"Enter your email"}
              boxstyle={" w-[60%] relative justify-centre  "}
            />
            <button className=" py-1 px-7 border-black  border">submit</button>
          </div>
        </div>
      </div>
      <img className=" max-sm:h-32 h-[30vh] w-fit" src={image} />
    </div>
  );
}
