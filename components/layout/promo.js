function Promo({}) {
  return (
    <section className="mx-auto container">
      {/* <!-- Contains the main logo and promo section. hidden on devices with width < 768px --> */}
      <div className="grid h-20 grid-cols-12">
        <div className="hidden lg:col-span-4 lg:flex justify-start items-center">
          <a href="index.html" className="gap-4 items-center flex">
            <img src="/news_cast/public/images/logo.png" alt="" />
            <h1 className="font-header font-bold text-4xl cursor-pointer">
              News<span className="text-primary-500 font-header">cast</span>
            </h1>
          </a>
        </div>
        <div className="col-span-12 lg:col-span-8 px-6 flex items-center justify-between bg-cover bg-[url('../public/images/promo_cover.jpg')]">
          <div className="text-white font-light text-xs lg:text-base py-2">
            <p>Best selling book and magazine</p>
            <p>Theme of all time</p>
            <p className="font-header italic text-primary-600 my-1">
              Experience the change
            </p>
          </div>
          <div>
            <button className="bg-primary-500 hover:bg-primary-600 hover:transition-all text-white px-2 lg:px-6 lg:py-4 py-2">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
