import MinBlock from "../ui/minBlock";
import RedText from "../ui/redText";
import { MidBlock } from "../ui/midBlock";

export default function RecentTrending({ articles }) {
  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">
            {"Don't Miss"}
          </h2>
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:space-y-0 lg:grid-cols-2 py-4">
            <MidBlock
              url={articles[0].url}
              imgUrl={articles[0].urlToImage}
              title={articles[0].title}
              sourceName={articles[0].source.name}
              description={articles[0].description}
            />
            <div className="space-y-4">
              {articles.map((val, i) => {
                if (i > 0 && i < 6) {
                  return (
                    <MinBlock
                      key={val.url}
                      headline={val.title}
                      tagline={val.source.name}
                      imgUrl={val.urlToImage}
                      url={val.url}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="divide-y divide-ncDark">
            <div className="flex justify-between items-end py-2 mt-1">
              <RedText text="Recent" />
              <RedText text="Trending" />
              <RedText text="Most views" />
            </div>
            <div>
              <div className="space-y-4 my-4">
                {articles.map((val, i) => {
                  if (i > 5) {
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
        </div>
      </div>
    </section>
  );
}
