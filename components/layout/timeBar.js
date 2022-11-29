import Image from "next/image";
// import weather from "../../public/images/weather.svg";
// import weather from "../../public/vercel.svg";

export default function TimeBar(props) {
  // console.log(weather);
  return (
    <section className="hidden container mx-auto lg:flex py-0 max-h-11 my-4 justify-between items-center text-xs">
      <div className="space-x-3 flex items-center">
        <div className="inline-flex items-center gap-2">
          {/* <img src={"/news_cast/public/images/weather.svg"} alt="" /> */}
          <p>15&deg;C New York</p>
        </div>
        <div className="inline-flex items-center gap-2">
          {/* <Image
            src="/news_cast/public/images/clock.svg"
            alt=""
            height={15}
            width={20}
          /> */}
          <p>Wednesday, 10 Jan 2022</p>
        </div>
        <div className="h-full bg-primary-500 text-white p-2">
          Breaking news
        </div>
        <div className="inline-flex whitespace-nowrap items-center">
          <span>
            Indonesia says located black box recorders from crashed plane
          </span>
        </div>
      </div>
      <div className="space-x-3">
        <span className="h-3 w-3 rounded-xl"></span>
        <span className="h-3 w-3 rounded-xl"></span>
        <span className="h-3 w-3 rounded-xl"></span>
        <span className="h-3 w-3 rounded-xl"></span>
      </div>
      {/* <!-- Contains the top which displays time, hidden with width < 768px --> */}
    </section>
  );
}
