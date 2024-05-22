import phone from "../assets/phone_front.png";
const data = [
  {
    heading: "clean code and responsive ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit.Excepturipariatur et nihil delectus hic animi inciduntmaioresoptio officia!Nulla ipsam consequatur, officiis ut quodquamdoloribus molestiaslaborum quo.",
  },
  {
    heading: "clean code and responsive ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit.Excepturipariatur et nihil delectus hic animi inciduntmaioresoptio officia!Nulla ipsam consequatur, officiis ut quodquamdoloribus molestiaslaborum quo.",
  },
  {
    heading: "clean code and responsive ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit.Excepturipariatur et nihil delectus hic animi inciduntmaioresoptio officia!Nulla ipsam consequatur, officiis ut quodquamdoloribus molestiaslaborum quo.",
  },
];
function LeftTextView({ heading, content }) {
  return (
    <div>
      <h1 className=" font-semibold">{heading}</h1>
      <p className=" max-lg:text-center text-xs text-right mt-2 leading-loose">
        {content}
      </p>
    </div>
  );
}
function RightTextView({ heading, content }) {
  return (
    <div className=" text-start">
      <h1 className=" font-semibold">{heading}</h1>
      <p className=" max-lg:text-center text-xs  mt-2 leading-loose">
        {content}
      </p>
    </div>
  );
}
export default function ReasonForUsingAppBise() {
  return (
    <div
      id="about"
      className="   max-md:p-5 text-white font-extralight reason-section flex justify-center items-center flex-col gap-5 py-12 px-40 "
    >
      <h1 className=" max-sm:text-lg max-sm:font-semibold text-4xl">
        Why Choose AppBies
      </h1>
      <h1>
        chosse your native platform and download for{" "}
        <span className=" uppercase font-bold">free</span>
      </h1>
      <div className=" max-lg:flex-wrap flex gap-10 justify-center items-center">
        <div className=" max-lg:text-center text-right flex flex-col gap-10">
          {data.map(({ heading, content }) => (
            <LeftTextView heading={heading} content={content} />
          ))}
        </div>
        <img src={phone} className=" h-[60vh]   object-contain" />
        <div className=" max-lg:text-center text-right flex flex-col gap-10">
          {data.map(({ heading, content }) => (
            <RightTextView heading={heading} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}
