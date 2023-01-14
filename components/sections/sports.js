import MinBlock from "../ui/minBlock";

export default function Sports({ articles }) {
  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">Sports</h2>
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:space-y-0 lg:grid-cols-2 py-4">
            <div>
              <a href="#" className="block group h-fit">
                <div
                  //   style="background-image: url('../assets/images/20.jpg')"
                  style={{
                    backgroundImage: `url('${articles[0].urlToImage}')`,
                  }}
                  className="bg-cover h-80"
                ></div>
                <p className="font-light text-xs opacity-75 mt-4">
                  {articles[0].source.name}
                </p>
                <h3 className="font-header text-2xl my-2 group-hover:text-primary-600">
                  {articles[0].title}
                </h3>
                <p className="font-light opacity-75">
                  {articles[0].description}
                </p>
              </a>
            </div>
            <div className="space-y-4">
              {articles.map((val, i) => {
                if (i > 0) {
                  return (
                    <MinBlock
                      key={val.url}
                      headline={val.title}
                      tagline={val.source.name}
                      imgUrl={val.urlToImage}
                    />
                  );
                }
              })}
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
                  <img src="/images/facebook.svg" />
                  <p className="text-sm text-white">1M Followers</p>
                </div>
              </button>
              <button className="bg-[#C23785] hover:bg-[#AF3278] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  <img src="/images/instagram.svg" />
                  <p className="text-sm text-white">500K Followers</p>
                </div>
              </button>
              <button className="bg-[#EF5043] hover:bg-[#ED3A2C] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  <img src="/images/youtube.svg" />
                  <p className="text-sm text-white">100k Subscribers</p>
                </div>
              </button>
              <button className="bg-[#42C0F5] hover:bg-[#2AB8F4] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  <img src="/images/twitter.svg" />
                  <p className="text-sm text-white">200k Followers</p>
                </div>
              </button>
              <button className="bg-[#1B7BFD] hover:bg-[#026DFD] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  <img src="/images/Behance.svg" />
                  <p className="text-sm text-white">2000 Followers</p>
                </div>
              </button>
              <button className="bg-[#F7679D] hover:bg-[#F6518F] hover:duration-300 py-4 px-2 text-center">
                <div className="flex item-center justify-center gap-4">
                  <img src="/images/dribbble.svg" />
                  <p className="text-sm text-white">5000 Followers</p>
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
