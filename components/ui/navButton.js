export default function NavButton({ name, extraClass }) {
  return (
    <a
      href="#"
      className={`font-header text-white py-4 px-6 hover:bg-primary-500 hover:transition hover:duration-300 font-xl ${extraClass}`}
    >
      {name}
    </a>
  );
}
