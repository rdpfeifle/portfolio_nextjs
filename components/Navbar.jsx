import Link from "next/link";

const { default: Image } = require("next/image");

export default function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets" alt="/" width="100" height="100" />
      </div>
      <div>
        <ul>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
