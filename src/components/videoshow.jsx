import videoImg from "../assets/video.png";
export default function VideoShow() {
  return (
    <div className=" video-component h-[80vh] flex justify-center items-center flex-col gap-10  p-4  ">
      <h1 className=" text-center max-sm:text-xl text-white text-4xl font-extralight tracking-wider">
        App Video Showcase
      </h1>
      <img
        className=" max-sm:h-[20vh] min-h-40 min-w-48 bg-black h-[50vh] max-sm:w-full  w-[40vw]  "
        src={videoImg}
      />
    </div>
  );
}
