function MinBlock({ headline, tagline }) {
  return (
    <a href="#" className="grid grid-cols-4 gap-2">
      <div
        className="col-span-1 bg-cover h-24 bg-[url('../public/images/6.jpg')]"
        // style="background-image: url('../assets/images/7=6-15.jpg')"
      ></div>
      <div className="col-span-3">
        <p className="font-light text-xs">{tagline}</p>
        <h3 className="font-header text-xl my-2">{headline}</h3>
      </div>
    </a>
  );
}

export default MinBlock;
