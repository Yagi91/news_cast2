// import Head from "next/head";
// import Image from "next/image";
import MidBlock from "../components/ui/midBlock";
import RecentTrending from "../components/sections/recentTrending";
import Entertainment from "../components/sections/entertainment";
import Sports from "../components/sections/sports";
import Lifestyle from "../components/sections/lifestyle";
import Videos from "../components/sections/videos";

let cardInfo = [
  {
    title: "Craig Braton - Jan 2020",
    headline: "They&apos;re back ! Kennedy Darling named to return to",
    urlNum: "5",
  },
  {
    title: "Craig Braton - Jan 2020",
    headline: "Swiss authorities say Uber drivers should",
    urlNum: "1",
  },
  {
    title: "Craig Braton - Jan 2020",
    headline: "Swiss authorities say Uber drivers should",
    urlNum: "1",
  },
];

function Home({ card, headData }) {
  console.log(headData);
  return (
    <>
      <section className="container mx-auto mb-4 lg:mb-8">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <div
              // style={{ backgroundImage: "url('./public/images/1.jpg')" }}
              className="bg-cover flex items-end justify-start h-120 h-96 bg-[url('../public/images/1.jpg')]"
            >
              <div className="p-3">
                <p className="text-xs font-light text-gray-300">
                  Craig Braton - Jan 2020
                </p>
                <h3 className="font-header text-xl lg:text-2xl text-white font-bold">
                  After all is said and done, more is done
                </h3>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid gap-4 grid-cols-2">
            {card.map((card, i) => {
              let bgClass =
                `bg-[url('../public/images/` + card.urlNum + `.jpg')]`;
              let extraClass = i >= 2 ? "col-span-2" : "";
              let height = i < 2 ? "h-48" : "h-44";
              return (
                <MidBlock
                  key={card.urlNum}
                  bgClass={bgClass + " " + height}
                  title={card.title}
                  headline={card.headline}
                  extraClass={extraClass}
                />
              );
            })}
          </div>
        </div>
      </section>
      <RecentTrending />
      <Entertainment />
      <Sports />
      <Lifestyle />
      <Videos />
    </>
  );
}

// export async function getStaticProps() {
//   //fetch data from API

//   return {
//     props: {
//       card: cardInfo,
//     },
//     revalidate: 60,
//   };
// }

export async function getServerSideProps(context) {
  //fetch data from API
  let pageSize = 4;
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=" +
      pageSize,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  const headData = await response.json();

  console.log(headData);
  console.log("hello you");

  return {
    props: {
      card: cardInfo,
      headData: headData,
    },
  };
}

export default Home;
