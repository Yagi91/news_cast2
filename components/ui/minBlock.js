import Image from "next/image";
import { urlPasser, sendProps } from "/utils/uiUtils";

function MinBlock({ headline, tagline, imgUrl, url }) {
  return (
    // <Link href={`/${encodeURIComponent(tagline)}`}> and pass url data as props
    <div
      className="grid grid-cols-4 gap-2 group cursor-pointer"
      onClick={() => sendProps(tagline, imgUrl, url)}
    >
      <div
        className="col-span-1 bg-cover h-24 relative"
        style={{
          //add a gradient to the image
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6 ))`,
        }}
      >
        {
          //check if the image url is valid
          urlPasser(imgUrl) && (
            <Image
              src={imgUrl}
              alt=""
              srcset=""
              fill
              style={{
                objectFit: "cover",
              }}
            />
          )
        }
      </div>
      <div className="col-span-3">
        <p className="font-light text-xs">{tagline}</p>
        <h3 className="font-header text-xl my-2 group-hover:text-primary-600">
          {headline}
        </h3>
      </div>
    </div>
  );
}

export default MinBlock;
