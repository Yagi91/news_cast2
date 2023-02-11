import Image from "next/image";
import { AdBlock } from "../ui/adBlock";

export default function Videos({ articles }) {
  return (
    <section className="lg:p-0 container mx-auto lg:grid lg:grid-cols-4 my-6">
      <div className="lg:col-span-3">
        <div className="px-6 flex items-center justify-between bg-[url('../public/images/promo_cover.jpg')] bg-cover">
          <AdBlock />
        </div>
        <div className="p-4 lg:0 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">Videos</h2>
          <div className="grid grid-cols-3 gap-4 py-4">
            {articles.map((article, i) => {
              if (i > 0) {
                return (
                  <>
                    <div className="col-span-3 lg:col-span-1" key={article.url}>
                      <a href="#" className="block">
                        <div className="bg-cover flex items-center h-48 justify-center relative">
                          <Image
                            src={article.urlToImage}
                            alt=""
                            srcset=""
                            fill
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="mt-4">
                          <p className="font-light text-xs">{article.author}</p>
                          <h3 className="font-header text-xl my-2 hover:text-primary-600">
                            {article.title}
                          </h3>
                        </div>
                      </a>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <a
                      href=""
                      className="block col-span-3 group cursor-pointer"
                      key={article.url}
                    >
                      <div
                        className="bg-cover h-96 p-4"
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url('${article.urlToImage}')`,
                        }}
                      >
                        <div className="flex items-end justify-center h-1/2"></div>
                        <div className="flex flex-col justify-end h-1/2">
                          <p className="text-white font-light opacity-75">
                            {article.author} - {article.source.name}
                          </p>
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary-600">
                            {article.title}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
