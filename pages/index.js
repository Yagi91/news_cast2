// import Head from "next/head";
// import Image from "next/image";
import MidBlock from "../components/ui/midBlock";
import RecentTrending from "../components/sections/recentTrending";
import Entertainment from "../components/sections/entertainment";
import Sports from "../components/sections/sports";
import Lifestyle from "../components/sections/lifestyle";
import Videos from "../components/sections/videos";

function Home({
  card,
  headData,
  entertainment,
  sports,
  lifestyle,
  tech,
  doNotMiss,
}) {
  return (
    <>
      <section className="container mx-auto mb-4 lg:mb-8">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${headData[0].urlToImage}')`,
              }}
              className="bg-cover flex items-end justify-start h-120 h-96 bg-bottom"
            >
              <div className="p-3">
                <p className="text-xs font-light text-gray-300">
                  {headData[0].author} - {headData[0].title}
                </p>
                <h3 className="font-header text-xl lg:text-2xl text-white font-bold">
                  {headData[0].description}
                </h3>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid gap-4 grid-cols-2">
            {headData.map((card, i) => {
              if (i >= 1) {
                let extraClass = i >= 3 ? "col-span-2" : "";
                let height = i < 3 ? "h-48" : "h-44";
                console.log(card.urlToImage);
                return (
                  <MidBlock
                    key={card.urlNum}
                    bgClass={height}
                    title={card.title}
                    imgUrl={card.urlToImage}
                    headline={card.description}
                    extraClass={extraClass}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
      <RecentTrending articles={doNotMiss} />
      <Entertainment articles={entertainment} />
      <Sports articles={sports} />
      <Lifestyle articles={lifestyle} />
      <Videos articles={tech} />
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
  let headData = [];
  let entertainment = [];
  let doNotMiss = [];
  try {
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
    let data = await response.json();
    headData = data.articles;
  } catch (err) {
    console.error(err);
  }

  const resEnt = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&pageSize=4`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  entertainment = await resEnt.json();
  entertainment = entertainment.articles;
  console.log("most entertainment", entertainment);

  const resSports = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&category=sports&pageSize=6`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  const sports = await resSports.json();

  const resLifestyle = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&category=health&pageSize=6`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  const lifestyle = await resLifestyle.json();

  const resTech = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&category=technology&pageSize=4`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  const resDoNotMiss = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&category=general&pageSize=11`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  const tech = await resTech.json();
  doNotMiss = await resDoNotMiss.json();

  return {
    props: {
      headData: headData,
      doNotMiss: doNotMiss.articles,
      entertainment: entertainment,
      sports: sports.articles,
      lifestyle: lifestyle.articles,
      tech: tech.articles,
    },
  };
}

export default Home;
