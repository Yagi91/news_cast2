export default function Lifestyle({}) {
  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">
            Lifestyle
          </h2>
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:space-y-0 lg:grid-cols-2 py-4">
            <a href="#" className="block">
              <div
                //   style="background-image: url('../assets/images/27.jpg')"
                className="bg-cover h-80"
              ></div>
              <p className="font-light text-xs opacity-75 mt-4">
                Craig Bator - 27 Dec 2020
              </p>
              <h3 className="font-header text-2xl my-2">
                ‘Institutional delivery vital for reducing maternal and neonatal
                deaths’
              </h3>
              <p className="font-light opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate....
              </p>
            </a>
            <a href="#" className="block">
              <div
                //   style="background-image: url('../assets/images/28.jpg')"
                className="bg-cover h-80"
              ></div>
              <p className="font-light text-xs opacity-75 mt-4">
                Craig Bator - 27 Dec 2020
              </p>
              <h3 className="font-header text-2xl my-2">
                ‘Being self-controlled child may lead to healthier middle-age
              </h3>
              <p className="font-light opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate....
              </p>
            </a>
            <a href="#" className="grid grid-cols-4 gap-2">
              <div
                className="col-span-1 bg-cover h-24"
                //   style="background-image: url('../assets/images/29.jpg')"
              ></div>
              <div className="col-span-3">
                <p className="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                <h3 className="font-header text-xl my-2">
                  Best things you can do on a solo mountain climb
                </h3>
              </div>
            </a>
            <a href="#" className="grid grid-cols-4 gap-2">
              <div
                className="col-span-1 bg-cover h-24"
                //   style="background-image: url('../assets/images/30.jpg')"
              ></div>
              <div className="col-span-3">
                <p className="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                <h3 className="font-header text-xl my-2">
                  How to use basic design principles your home
                </h3>
              </div>
            </a>
            <a href="#" className="grid grid-cols-4 gap-2">
              <div
                className="col-span-1 bg-cover h-24"
                //   style="background-image: url('../assets/images/31.jpg')"
              ></div>
              <div className="col-span-3">
                <p className="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                <h3 className="font-header text-xl my-2">
                  Creative decorationg with houseplants
                </h3>
              </div>
            </a>
            <a href="#" className="grid grid-cols-4 gap-2">
              <div
                className="col-span-1 bg-cover h-24"
                //   style="background-image: url('../assets/images/32.jpg')"
              ></div>
              <div className="col-span-3">
                <p className="font-light text-xs">Craig Bator - 27 Dec 2020</p>
                <h3 className="font-header text-xl my-2">
                  How to burn calories with pleasant activites
                </h3>
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-56 bg-[#DEDADA] flex justify-center items-center">
            <div className="space-y-4">
              <h5 className="font-header text-2xl text-center">
                Get latest updates
              </h5>
              <form action="#" className="mt-4 space-y-4">
                <input
                  type="text"
                  className="p-4 h-10 placeholder:opacity-60 block text-center placeholder:text-center placeholder:text-sm outline-none"
                  placeholder="Your email id "
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-500 block w-full text-center` hover:bg-primary-600 duration-300 transition-colors text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
            <h2 className="text-primary-500 font-header text-xl py-2">
              Categories
            </h2>
            <div className="flex flex-col pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> Lifestyle </span>
                </div>
                <div className="bg-primary-500 h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">50</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> World </span>
                </div>
                <div className="bg-[#A56CBD] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">55</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> Foods </span>
                </div>
                <div className="bg-[#C23785] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">55</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> Technology </span>
                </div>
                <div className="bg-[#4C60F5] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">55</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> Sports </span>
                </div>
                <div className="bg-[#0088FF] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">42</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> Football </span>
                </div>
                <div className="bg-[#F7679D] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">5</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> Cricket </span>
                </div>
                <div className="bg-[#42C0F5] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">67</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {/* <img
                      src="../assets/images/caret_right.svg"
                      alt=""
                      srcset=""
                      className="inline mr-2"
                    /> */}
                  <span> COVID 19 </span>
                </div>
                <div className="bg-[#49CFE8] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
