import { getServerSideProps } from "..";

function articleDetails({ content }) {
  return <h1>The Detail Page{content}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          content: "article",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  //fetch data from API
  let p = "hhu";
  // we need axios to make HTTP requests
  const axios = require("axios");

  // and we need jsdom and Readability to parse the article HTML
  const { JSDOM } = require("jsdom");
  const { Readability } = require("@mozilla/readability");

  // First lets get some search data from News API

  // Build the URL we are going request. This will get articles related to Apple and sort them newest first
  let url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "sortBy=publishedAt&" +
    "apiKey=0ca31323152d4e7cad939abb086584e3";

  // Make the request with axios' get() function

  // axios.get(url).then(function (r1) {
  //   // At this point we will have some search results from the API. Take the first search result...
  //   let firstResult = r1.data.articles[0];

  //   // ...and download the HTML for it, again with axios
  //   axios.get(firstResult.url).then(function (r2) {
  //     // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
  //     let dom = new JSDOM(r2.data, {
  //       url: firstResult.url,
  //     });

  //     // now pass the DOM document into readability to parse
  //     let article = new Readability(dom.window.document).parse();

  //     // Done! The article content is in the textContent property
  //     console.log(article.textContent);
  //   });
  // });

  // Make the request with axios' get() function
  let res1 = await axios.get(url);
  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = res1.data.articles[0];

  // ...and download the HTML for it, again with axios
  let res2 = await axios.get(firstResult.url);
  // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
  let dom = new JSDOM(res2.data, { url: firstResult.url });

  // now pass the DOM document into readability to parse
  let article = new Readability(dom.window.document).parse();

  return {
    props: {
      content: article.textContent,
    },
    revalidate: 60,
  };
}

export default articleDetails;
