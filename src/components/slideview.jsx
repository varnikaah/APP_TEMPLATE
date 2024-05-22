import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../assets/page_1.png";
import image2 from "../assets/phone1.png";

const divStyle = {
  display: "flex",
  alignItems: "center",
  backgroundSize: "contain",
};
const arr = [image1, image2];
function SlideView() {
  return (
    <div
      id="screenshot"
      className=" p-10 text-center text-gray-600 flex gap-16 flex-col  overflow-hidden "
    >
      <p className=" text-4xl font-extralight tracking-wider ">
        App Screesshots
      </p>
      <Slide
        autoplay={false}
        responsive={true}
        transitionDuration={600}
        cssClass=" max-sm:p-0  p-4"
      >
        {arr.map((image) => (
          <div
            className=" bg-contain h-[50vh] bg-no-repeat bg-center"
            style={{ ...divStyle, backgroundImage: `url(${image})` }}
          />
        ))}
      </Slide>
    </div>
  );
}
export default SlideView;
