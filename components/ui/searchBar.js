export default function SearchBar({ classes }) {
  return (
    <form action="#" className={classes} role="search" method="get">
      <input
        type="search"
        className="min-h-full w-full lg:w-auto p-4 bg-ncDark placeholder:text-gray-400 placeholder:font-light placeholder:text-xs text-gray-300 font-light text-sm border border-gray-600 outline-none"
        placeholder="Search for"
        name="search for"
      />
      <button type="submit" className=" absolute bottom-0 right-0 top-0 mx-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          color="red"
          fill="currentColor"
          className="bi bi-search hover:text-white"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
        </svg>
      </button>
    </form>
  );
}
