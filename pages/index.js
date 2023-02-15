// import Head from "next/head";
// import Image from "next/image";
import MidBlock from "../components/ui/cardBlock";
import RecentTrending from "../components/sections/recentTrending";
import Entertainment from "../components/sections/entertainment";
import Sports from "../components/sections/sports";
import Lifestyle from "../components/sections/lifestyle";
import Videos from "../components/sections/videos";
import { HomeBanners } from "../components/sections/homeBanners";

function Home({ headData, entertainment, sports, lifestyle, tech, doNotMiss }) {
  return (
    <>
      <HomeBanners articles={headData} />
      <RecentTrending articles={doNotMiss} />
      <Entertainment articles={entertainment} />
      <Sports articles={sports} />
      {/* <Lifestyle articles={lifestyle} /> */}
      <Videos articles={tech} />
    </>
  );
}

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
  // console.log("most entertainment", entertainment);

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
