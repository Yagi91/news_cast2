import RecentTrending from "../../components/sections/recentTrending";

export function articleDetails({
  content,
  headline,
  imgUrl,
  trendingArticles,
}) {
  return (
    <div class="min-h-screen">
      <section class="mx-auto container p-4 lg:p-0 my-8">
        <article>
          <h1 class="font-header text-4xl font-bold lg:w-1/2 ">{headline}</h1>
          <div class="mt-8 space-y-4">
            <img
              src={imgUrl}
              class="lg:w-2/3 h-auto block mx-auto w-full"
              alt=""
            />
            <p class="text-lg opacity-80">{content}</p>
          </div>
        </article>
      </section>
      <RecentTrending articles={trendingArticles} />
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the parameter used to access the page
  let articleUrl = context.params.content;
  const { imgUrl, url, tagline } = context.query;
  console.log("query", context.query, articleUrl);
  // fetch data from API
  // we need axios to make HTTP requests
  const axios = require("axios");

  // and we need jsdom and Readability to parse the article HTML
  const { JSDOM } = require("jsdom");
  const { Readability } = require("@mozilla/readability");

  // ...and download the HTML for it, again with axios

  let res2 = await axios.get(url);
  // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
  let dom = new JSDOM(res2.data, { url: url });

  // now pass the DOM document into readability to parse
  let article = new Readability(dom.window.document).parse();

  const trendingRes = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&category=general&pageSize=11`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_NEWS_API,
      },
    }
  );

  const trendingArticles = await trendingRes.json();

  return {
    props: {
      content: article.textContent,
      imgUrl: imgUrl || "imgUrl placeholder",
      headline: article.title || tagline,
      trendingArticles: trendingArticles.articles,
    },
  };
}

export default articleDetails;
