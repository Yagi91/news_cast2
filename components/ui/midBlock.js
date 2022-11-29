export default function MidBlock({ extraClass, title, headline, bgClass }) {
  // let url = `../public/images/promo_cover.jpg`;
  return (
    <a href="blog_detail.html" className={`block ${extraClass}`}>
      <div
        // style={{ backgroundImage: "url('../public/images/2.jpg')" }}
        className={`bg-cover flex items-end justify-start hover:scale-95 duration-300 hover:transition cursor-pointer ${bgClass}`}
      >
        <div className="p-2">
          <p className="text-xs font-light text-gray-300">{title}</p>
          <h3 className="font-header text-xl text-white font-light">
            {headline}
          </h3>
        </div>
      </div>
    </a>
  );
}
