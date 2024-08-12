/* eslint-disable react/jsx-key */
import useScroll from "@/hooks/use-scroll";
import { Github } from "@/utils/icons";
import Link from 'next/link';

const Navbar = () => {
  const scrolled = useScroll(50);
  return (
    <div
      className={`fixed top-0 w-full flex justify-center ${scrolled
        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
        : "bg-white/0"
        } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
        <Link href="/" className="flex items-center font-display text-2xl">
          {/* <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image> */}
          <p className="text-red-600 font-bold">Pokedex</p>
        </Link>
        <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          href="https://github.com/thegilangpratama/pokedex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>
            <span className="hidden sm:inline-block">Repository</span>
            {/* <span className="font-semibold">{nFormatter(stars)}</span> */}
          </p>
        </a>
      </div>
    </div>
  )
}

export default Navbar
