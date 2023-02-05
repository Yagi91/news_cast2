import Image from "next/image";
import Link from "next/link";

function MinBlock({ headline, tagline, imgUrl }) {
  function urlPasser(str) {
    const regExp = /^http/gi;
    if (regExp.test(str)) {
      return str;
    } else {
      return "";
    }
  }

  return (
    <Link
      href={
        // `/${encodeURIComponent(tagline)}`
        {
          pathname: `[name]`,
          query: {
            name: tagline,
            imgUrl: imgUrl && "https",
            headline: headline && "headline",
          },
        }
      }
      as={`/${tagline}`}
      passHref
    >
      <div className="grid grid-cols-4 gap-2 group">
        <div
          className="col-span-1 bg-cover h-24 relative"
          // style={{ backgroundImage: `url('${imgUrl}')` }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6 ))`,
          }}
        >
          {urlPasser(imgUrl) && (
            <Image
              src={imgUrl}
              alt=""
              srcset=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>
        <div className="col-span-3">
          <p className="font-light text-xs">{tagline}</p>
          <h3 className="font-header text-xl my-2 group-hover:text-primary-600">
            {headline}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default MinBlock;
