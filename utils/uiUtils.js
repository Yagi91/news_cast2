import Router from "next/router";

// check if the url is valid
export function urlPasser(str) {
  const regExp = /^http/gi;
  if (regExp.test(str)) {
    return str;
  } else {
    return null;
  }
}

// route to the page with the tagline as the pathname and the url data as query
export function sendProps(tagline, imgUrl, url) {
  if (url) {
    Router.push(
      {
        pathname: `/${encodeURIComponent(tagline)}`,
        query: {
          imgUrl: imgUrl || "https",
          url: url,
        },
      },
      `/${tagline}`
    );
  }
}
