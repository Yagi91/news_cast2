function articleDetails({ content }) {
  return (
    <div class="min-h-screen">
      <section class="mx-auto container p-4 lg:p-0 my-8">
        <h1 class="font-header text-4xl font-bold w-1/2">
          Now Is the Time to Think About Your Small Business Success
        </h1>
        <div class="mt-8 space-y-4">
          {/* <img src="../assets/images/1.jpg" class="w-1/3 h-auto" alt="" /> */}
          <p class="text-lg opacity-80">{content}</p>
          <p class="text-lg opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            adipisci nulla earum magni? Sint provident omnis voluptatibus,
            maiores autem quam reprehenderit, similique voluptates nulla
            voluptas harum corporis veniam maxime dolor facilis porro iure ullam
            alias ad facere! Asperiores assumenda reiciendis voluptatem nobis
            possimus aperiam adipisci tempore quibusdam earum, sit, et modi
            dicta sed magni debitis vel pariatur quas odio deserunt, ducimus
            laudantium. Tenetur optio repudiandae adipisci voluptatum incidunt
            rem, cupiditate illum voluptate eaque facilis dignissimos.
            Voluptatum fugiat magnam aperiam repellendus. Qui, fuga? Deleniti
            laudantium earum alias impedit ipsa ratione libero temporibus eius.
            Optio ullam sunt nostrum quae iste, voluptate aperiam.
          </p>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get the parameter used to access the page
  let articleUrl = context.params.content;
  console.log("query", context.query, articleUrl);
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
  };
}

export default articleDetails;
