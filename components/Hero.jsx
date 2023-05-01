import Image from "next/image";

export const Hero = () => {
  return (
    <div className="container flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between px-8 p-16">
      <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
        <h2 className="text-2xl font-light mb-4">Hey, I'm Raquel Pfeifle</h2>
        <h1 className="mb-2 text-center">
          A Software Engineer & Shopify Expert
        </h1>
        <button>Get in touch</button>
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
    </div>
  );
};
