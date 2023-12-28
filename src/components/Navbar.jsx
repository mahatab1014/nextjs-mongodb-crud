import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4">
      <Link className="text-2xl text-white font-bold" href="/">
        Topics
      </Link>
      <Link
        href="/add-topic"
        className="bg-white text-black px-3 py-2 font-medium"
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
