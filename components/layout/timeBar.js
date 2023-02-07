import Image from "next/image";
import { useState, useEffect } from "react";

export default function TimeBar(props) {
  // function to get the date in locale format
  // const [weather, setWeather] = useState({''});

  function dateLocale() {
    let date = new Date();
    let day = date.toLocaleString("en-us", { weekday: "long" });
    let month = date.toLocaleString("en-us", { month: "long" });
    let dayNum = date.getDate();
    let year = date.getFullYear();

    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return `${day}, ${dayNum} ${month} ${year} ${timeZone}`;
  }

  function getWeather() {
    //get weather data
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&appid=" +
        process.env.NEXT_PUBLIC_WEATHER_API,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setWeather(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section className="hidden container mx-auto lg:flex py-0 max-h-11 my-4 justify-between items-center text-xs">
      <div className="space-x-3 flex items-center">
        <div className="inline-flex items-center gap-2 relative">
          <Image src="/weather.svg" alt="" height={16} width={16} />
          <p>15&deg;C New York</p>
        </div>
        <div className="inline-flex items-center gap-2">
          <Image src="/images/clock.svg" alt="" height={14} width={14} />
          <span>{dateLocale()}</span>
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
