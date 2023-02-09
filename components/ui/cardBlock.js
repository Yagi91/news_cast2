import { urlPasser, sendProps } from "../../utils/uiUtils";

export default function CardBlock({
  extraClass,
  title,
  headline,
  bgClass,
  imgUrl,
  url,
}) {
  return (
    <div
      className={`block ${extraClass}`}
      onClick={() => sendProps(title, imgUrl, url)}
    >
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${imgUrl}')`,
        }}
        className={`bg-cover flex items-end justify-start hover:scale-95 duration-300 hover:transition cursor-pointer ${bgClass}`}
      >
        <div className="p-2 ">
          <p className="text-xs font-light text-gray-300 text-ellipsis">
            {title}
          </p>
          <h3 className="font-header text-xl text-white font-light block">
            {headline}
          </h3>
        </div>
      </div>
    </div>
  );
}
