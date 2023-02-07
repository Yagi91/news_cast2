import Image from "next/image";
import { useState, useEffect } from "react";

export default function TimeBar(props) {
  // function to get the date in locale format
  const [weather, setWeather] = useState("");
  const [date, setDate] = useState("");
  const [timeZone, setTimeZone] = useState("");

  //get the date and time and weather
  useEffect(() => {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(timeZone);
    function dateLocale() {
      let date = new Date();
      let day = date.toLocaleString(navigator.language, {
        weekday: "long",
      });
      let month = date.toLocaleString(navigator.language, {
        month: "long",
      });
      let dayNum = date.getDate();
      let year = date.getFullYear();

      return `${day}, ${dayNum} ${month} ${year}`;
    }

    function getWeather() {
      //get weather data
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=` +
          process.env.NEXT_PUBLIC_WEATHER_API +
          `&q=${timeZone}&aqi=no`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let temp = data.current.temp_c;
          setWeather(temp);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    getWeather();

    setDate(dateLocale());
  }, []);

  return (
    <section className="hidden container mx-auto lg:flex py-0 max-h-11 my-4 justify-between items-center text-xs">
      <div className="space-x-3 flex items-center">
        <div className="inline-flex items-center gap-2 relative">
          <Image src="/weather.svg" alt="" height={16} width={16} />
          <span>
            {weather}&deg;C {timeZone}
          </span>
        </div>
        <div className="inline-flex items-center gap-2">
          <Image src="/images/clock.svg" alt="" height={14} width={14} />
          <span>{date}</span>
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
