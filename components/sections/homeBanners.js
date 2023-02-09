import CardBlock from "../ui/cardBlock";

export function HomeBanners({ articles }) {
  return (
    <section className="container mx-auto mb-4 lg:mb-8">
      <div className="grid lg:grid-cols-2 gap-4">
        <div>
          <div
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${articles[0].urlToImage}')`,
            }}
            className="bg-cover flex items-end justify-start h-120 h-96 bg-bottom"
          >
            <div className="p-3">
              <p className="text-xs font-light text-gray-300">
                {articles[0].author} - {articles[0].title}
              </p>
              <h3 className="font-header text-xl lg:text-2xl text-white font-bold">
                {articles[0].description}
              </h3>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid gap-4 grid-cols-2">
          {articles.map((card, i) => {
            if (i >= 1) {
              let extraClass = i >= 3 ? "col-span-2" : "";
              let height = i < 3 ? "h-48" : "h-44";
              return (
                <CardBlock
                  key={card.urlNum}
                  bgClass={height}
                  title={card.title}
                  imgUrl={card.urlToImage}
                  headline={card.description}
                  extraClass={extraClass}
                  url={card.url}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
