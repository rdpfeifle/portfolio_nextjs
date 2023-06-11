import Image from "next/image";

export const WorkWithMe = () => {
  const cards = [
    {
      title: "E-COMMERCE",
      description:
        "I am dedicated to helping businesses thrive in the digital age through responsive and conversion-driven Shopify development. I strive to create impactful Shopify stores that drive results and contribute to your success.",
      imageSrc: "/assets/images/alloy-homepage.png",
    },
    {
      title: "WEB DESIGN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, metus id ornare euismod, nisi mauris commodo ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/assets/images/coming-soon.png",
    },
  ];

  return (
    <section id="workWithMe" className="bg-indigo-100">
      <div className="container bg-transparent text-center">
        <h2 className="capitalize mb-12 underlineEffect">How I can help you</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title}>
              <div className="relative h-90">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={1200}
                  height={800}
                  quality={100}
                  className="object-cover w-full h-full rounded-lg image-dim"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{card.title}</h3>
                <p className="pb-4">{card.description}</p>
                <button className="py-2 px-4 rounded">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
