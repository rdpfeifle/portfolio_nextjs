import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center mt-16 justify-center md:flex-row md:items-center md:justify-between py-16"
    >
      <div className="flex flex-col items-center text-center md:w-1/2">
        <h2 className="font-light mb-4">
          Hey, I'm <span className="text-indigo-700">Raquel Pfeifle</span>
        </h2>
        <h1 className="mb-8">
          {" "}
          <Typewriter
            options={{
              strings: ["Software Engineer", "Shopify Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        {/* <p className="pb-6 tracking-widest capitalize font-light text-2xl">
          Lorem ipsum
        </p> */}
        <Link href="#contact">
          <button className="rounded-full px-6 py-3">Get in touch</button>
        </Link>
        <div className="mt-6 flex gap-4">
          <Link
            href="https://www.linkedin.com/in/raqueldpfeifle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              width={34}
              height={34}
              className="transform hover:scale-110 transition-transform duration-300 social-icons"
            />
          </Link>
          <Link
            href="https://github.com/rdpfeifle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/github.svg"
              alt="Github"
              width={36}
              height={36}
              className="transform hover:scale-110 transition-transform duration-300 social-icons"
            />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 max-md:mt-6 lg:pl-12">
        <Image
          src="/assets/images/hero.png"
          alt="Your Image"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};
