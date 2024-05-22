import {
  RiFacebookBoxFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitchFill,
  RiYoutubeFill,
} from "react-icons/ri";
import logo from "../assets/logo-blue.png";
export default function EndingComponent() {
  return (
    <div className=" py-8 flex flex-col gap-6 items-center justify-center">
      <img className=" h-4" src={logo} />
      <div className=" flex gap-8 ">
        <RiFacebookFill />
        <RiTwitchFill />
        <RiInstagramFill />
        <RiLinkedinFill />
        <RiYoutubeFill />
      </div>
      <h1 className=" text-xs">@copy right by developers</h1>
    </div>
  );
}
