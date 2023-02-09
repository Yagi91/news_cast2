import MinBlock from "../ui/minBlock";
import { MidBlock } from "../ui/midBlock";

export default function Lifestyle({ articles }) {
  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">
            Lifestyle
          </h2>
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:space-y-0 lg:grid-cols-2 py-4">
            {articles.map((val, i) => {
              if (i <= 1) {
                return (
                  <>
                    <MidBlock
                      key={val.url}
                      description={val.description}
                      url={val.url}
                      sourceName={val.source.name}
                      title={val.title}
                      imgUrl={val.urlToImage}
                    />
                  </>
                );
              } else {
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
        <div className="space-y-6">
          <div className="h-56 bg-[#DEDADA] flex justify-center items-center">
            <div className="space-y-4">
              <h5 className="font-header text-2xl text-center">
                Get latest updates
              </h5>
              <form action="#" className="mt-4 space-y-4">
                <input
                  type="email"
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
                  <img
                    src="/images/caret_right.svg"
                    alt=""
                    srcset=""
                    className="inline mr-2"
                  />
                  <span> Lifestyle </span>
                </div>
                <div className="bg-primary-500 h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">50</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="/images/caret_right.svg"
                    alt=""
                    srcset=""
                    className="inline mr-2"
                  />
                  <span> World </span>
                </div>
                <div className="bg-[#A56CBD] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">55</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="/images/caret_right.svg"
                    alt=""
                    srcset=""
                    className="inline mr-2"
                  />
                  <span> Foods </span>
                </div>
                <div className="bg-[#C23785] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">55</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="/images/caret_right.svg"
                    alt=""
                    srcset=""
                    className="inline mr-2"
                  />
                  <span> Technology </span>
                </div>
                <div className="bg-[#4C60F5] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">55</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="/images/caret_right.svg"
                    alt=""
                    srcset=""
                    className="inline mr-2"
                  />
                  <span> Sports </span>
                </div>
                <div className="bg-[#0088FF] h-10 w-10 text-center flex items-center justify-center">
                  <p className="text-white">42</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="/images/caret_right.svg"
                    alt=""
                    srcset=""
                    className="inline mr-2"
                  />
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
