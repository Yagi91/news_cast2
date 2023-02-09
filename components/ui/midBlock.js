import Image from "next/image";
import { sendProps } from "../../utils/uiUtils";

//Medium size news articles with content outside the image
export function MidBlock({ imgUrl, description, sourceName, title, url }) {
  return (
    <div
      className="block h-fit group cursor-pointer"
      onClick={() => sendProps(sourceName, imgUrl, url)}
    >
      <div
        className="bg-cover h-80 relative"
        style={{
          //add a gradient to the image
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6 ))`,
        }}
      >
        <Image
          src={imgUrl}
          alt={sourceName}
          srcSet=""
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <p className="font-light text-xs opacity-75 mt-4">{sourceName}</p>
      <h3 className="font-header text-2xl my-2 group-hover:text-primary-600">
        {title}
      </h3>
      <p className="font-light opacity-75">{description}</p>
    </div>
  );
}
