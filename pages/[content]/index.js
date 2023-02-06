function articleDetails({ content, headline, imgUrl }) {
  return (
    <div class="min-h-screen">
      <section class="mx-auto container p-4 lg:p-0 my-8">
        <article>
          <h1 class="font-header text-4xl font-bold w-1/2">{headline}</h1>
          <div class="mt-8 space-y-4">
            <img src={imgUrl} class="w-1/3 h-auto" alt="" />
            <p class="text-lg opacity-80">{content}</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the parameter used to access the page
  let articleUrl = context.params.content;
  const { imgUrl, url } = context.query;
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
  console.log("article title", article.title);

  return {
    props: {
      content: article.textContent,
      imgUrl: imgUrl || "imgUrl",
      headline: article.title,
    },
  };
}

export default articleDetails;
