function MinBlock({ headline, tagline, imgUrl }) {
  return (
    <a href="#" className="grid grid-cols-4 gap-2">
      <div
        className="col-span-1 bg-cover h-24"
        style={{ backgroundImage: `url('${imgUrl}')` }}
      ></div>
      <div className="col-span-3">
        <p className="font-light text-xs">{tagline}</p>
        <h3 className="font-header text-xl my-2">{headline}</h3>
      </div>
    </a>
  );
}

export default MinBlock;
