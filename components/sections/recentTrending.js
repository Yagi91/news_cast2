import MinBlock from "../ui/minBlock";
import RedText from "../ui/redText";

export default function RecentTrending({}) {
  let data1 = [
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "Now Is the Time to Think About Your Small Business Success",
    },
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "Things to Look For in a Financial Trading Platform",
    },
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "The only thing that overcomes hard luck is hard work",
    },
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "Success is not a good teacher failure makes you humble",
    },
    {
      caption: "Craig Bator - 27 Dec 2020",
      headline: "At Value-Focused Hotels, the Free Breakfast Gets Bigger",
    },
  ];

  return (
    <section className="p-4 lg:p-0 container mx-auto">
      <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-3 lg:gap-4">
        <div className="col-span-1 lg:col-span-2 divide-y divide-ncDark">
          <h2 className="text-primary-500 font-header text-2xl py-2">
            {"Don't Miss"}
          </h2>
          <div className="grid grid-cols-1 gap-4 space-y-4 lg:space-y-0 lg:grid-cols-2 py-4">
            <a href="#" className="block">
              <div
                // style={background-image: url('../assets/images/5.jpg')}
                className="bg-cover h-80 bg-[url('../public/images/5.jpg')]"
              ></div>
              <p className="font-light text-xs opacity-75 mt-4">
                Craig Bator - 27 Dec 2020
              </p>
              <h3 className="font-header text-2xl my-2">
                Now Is the Time to Think About Your Small Business Success
              </h3>
              <p className="font-light opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate....
              </p>
            </a>
            <div className="space-y-4">
              {data1.map((val) => {
                return (
                  <MinBlock
                    key={val.headline}
                    headline={val.headline}
                    tagline={val.caption}
                  />
                );
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
                {data1.map((val) => {
                  return (
                    <MinBlock
                      key={val.headline}
                      headline={val.headline}
                      tagline={val.caption}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
