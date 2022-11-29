export default function Sports({}) {
  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">Sports</h2>
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:space-y-0 lg:grid-cols-2 py-4">
            <div>
              <a href="#" className="block">
                <div
                  //   style="background-image: url('../assets/images/20.jpg')"
                  className="bg-cover h-80"
                ></div>
                <p className="font-light text-xs opacity-75 mt-4">
                  Craig Bator - 27 Dec 2020
                </p>
                <h3 className="font-header text-2xl my-2">
                  Solskjaer dismisses Klopp comments on Man Utd penalty record
                </h3>
                <p className="font-light opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus lobortis augue condimentum maecenas. Metus at in
                  fames vitae posuere ut vel vulputate....
                </p>
              </a>
            </div>
            <div className="space-y-4">
              <a href="#" className="grid grid-cols-4 gap-2">
                <div
                  className="col-span-1 bg-cover h-24"
                  // style="background-image: url('../assets/images/21.jpg')"
                ></div>
                <div className="col-span-3">
                  <p className="font-light text-xs">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <h3 className="font-header text-xl my-2">
                    South Africa hammer injury-hit Sri Lanka Player
                  </h3>
                </div>
              </a>
              <a href="#" className="grid grid-cols-4 gap-2">
                <div
                  className="col-span-1 bg-cover h-24"
                  // style="background-image: url('../assets/images/22.jpg')"
                ></div>
                <div className="col-span-3">
                  <p className="font-light text-xs">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <h3 className="font-header text-xl my-2">
                    Southee-lead New Zealand have Pakistan on the ropes
                  </h3>
                </div>
              </a>
              <a href="#" className="grid grid-cols-4 gap-2">
                <div
                  className="col-span-1 bg-cover h-24"
                  // style="background-image: url('../assets/images/23.jpg')"
                ></div>
                <div className="col-span-3">
                  <p className="font-light text-xs">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <h3 className="font-header text-xl my-2">
                    The only thing that overcomes hard luck is hard work
                  </h3>
                </div>
              </a>
              <a href="#" className="grid grid-cols-4 gap-2">
                <div
                  className="col-span-1 bg-cover h-24"
                  // style="background-image: url('../assets/images/24.jpg')"
                ></div>
                <div className="col-span-3">
                  <p className="font-light text-xs">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <h3 className="font-header text-xl my-2">
                    Success is not a good teacher failure makes you humble
                  </h3>
                </div>
              </a>
              <a href="#" className="grid grid-cols-4 gap-2">
                <div
                  className="col-span-1 bg-cover h-24"
                  // style="background-image: url('../assets/images/25.jpg')"
                ></div>
                <div className="col-span-3">
                  <p className="font-light text-xs">
                    Craig Bator - 27 Dec 2020
                  </p>
                  <h3 className="font-header text-xl my-2">
                    Rahane-led India bury ghosts of Adelaide at Melbourne
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="divide-y divide-ncDark">
          <h2 className="font-header text-primary-500 py-2 text-2xl">
            Stay Connected
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-2 py-4 gap-y-4">
              <button className="bg-[#4281FF] hover:bg-[#1A66FF] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  {/* <img src="../assets/images/facebook.svg" /> */}
                  <p className="text-sm text-white">20000 Followers</p>
                </div>
              </button>
              <button className="bg-[#C23785] hover:bg-[#AF3278] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  {/* <img src="../assets/images/instagram.svg" /> */}
                  <p className="text-sm text-white">20000 Followers</p>
                </div>
              </button>
              <button className="bg-[#EF5043] hover:bg-[#ED3A2C] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  {/* <img src="../assets/images/youtube.svg" /> */}
                  <p className="text-sm text-white">20000 Followers</p>
                </div>
              </button>
              <button className="bg-[#42C0F5] hover:bg-[#2AB8F4] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  {/* <img src="../assets/images/twitter.svg" /> */}
                  <p className="text-sm text-white">20000 Followers</p>
                </div>
              </button>
              <button className="bg-[#1B7BFD] hover:bg-[#026DFD] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  {/* <img src="../assets/images/Behance.svg" /> */}
                  <p className="text-sm text-white">20000 Followers</p>
                </div>
              </button>
              <button className="bg-[#F7679D] hover:bg-[#F6518F] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  {/* <img src="../assets/images/dribbble.svg" /> */}
                  <p className="text-sm text-white">20000 Followers</p>
                </div>
              </button>
            </div>
            <div
              // style="background-image: url('../assets/images/26.jpg')"
              className="bg-cover h-60 flex items-center justify-center"
            >
              <h4 className="font-header text-2xl text-white">Ad</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
