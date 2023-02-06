export function urlPasser(str) {
  const regExp = /^http/gi;
  if (regExp.test(str)) {
    return str;
  } else {
    return "";
  }
}

export function sendProps() {
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

// export const uiUtils = {
//   urlPasser,
//   sendProps,
// };
