import Image from "next/image";
import SearchBar from "../ui/searchBar";
import { useState } from "react";
import NavButton from "../ui/navButton";

export default function MainNav({}) {
  const [hamburger, setHamburger] = useState(false);

  let tabs = [
    "Home",
    "International",
    "Sports",
    "Opinion",
    "Business",
    "Youth",
    "Entertainment",
    "Lifestyle",
  ];

  const handleMenu = () => {
    setHamburger((state) => !state);
  };

  return (
    <section className="lg:mx-auto lg:container lg:my-6 static z-50 top-0 sticky z-50">
      {/* Contains the proper navigation bar*/}
      <div className="bg-ncDark flex container mx-auto justify-between lg:hidden p-3">
        {/* Navbar for mobile */}
        <div className="col-span-4 flex justify-start items-center z-50">
          <div className="flex gap-4 items-center">
            <img src="/images/logo.png" alt="" />
            <h1 className="font-header font-bold text-white text-2xl cursor-pointer">
              News<span className="text-primary-500 font-header">cast</span>
            </h1>
          </div>
        </div>
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={handleMenu}
        >
          <Image
            src="/images/menu_icon.svg"
            id="menu_toggle"
            width="24"
            height="24"
            alt=""
          />
        </div>
      </div>
      <div
        className={`lg:flex container mx-auto items-center origin-top delay-300 ${
          !hamburger && "scale-y-0"
        } absolute inset-x-0 lg:static lg:scale-100 transition-transform justify-between bg-ncDark lg:pr-6 z-50`}
        id="menu_container"
      >
        <div className="flex flex-col lg:flex-row">
          {tabs.map((tab) => (
            <NavButton
              key={tab}
              name={tab}
              extraClass={tab === "Home" ? "active" : null}
            />
          ))}
        </div>
        <div className="pb-4 lg:pb-0">
          {/* Search form */}
          <SearchBar classes="px-7 relative border border-gray-600" />
        </div>
      </div>
    </section>
  );
}
