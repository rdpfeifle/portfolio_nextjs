import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between px-8 p-16"
    >
      <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
        <h2 className="font-light mb-4">
          Hey, I'm <span className="text-indigo-700">Raquel Pfeifle</span>
        </h2>
        <h1 className="pb-6 text-center">
          A Software Engineer & Shopify Expert
        </h1>
        <button className="rounded-full px-6 py-3">Get in touch</button>
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
