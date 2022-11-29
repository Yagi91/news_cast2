export default function SearchBar({ classes }) {
  return (
    <form action="#" className={classes}>
      <input
        type="text"
        class="min-h-full w-full lg:w-auto p-4 bg-ncDark placeholder:text-gray-400 placeholder:font-light placeholder:text-xs text-gray-300 font-light text-sm border border-gray-600 outline-none"
        placeholder="Search for"
      />
    </form>
  );
}
