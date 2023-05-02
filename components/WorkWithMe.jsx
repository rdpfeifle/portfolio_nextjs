import Image from "next/image";

export const WorkWithMe = () => {
  const cards = [
    {
      title: "Service 1",
      description:
        "This is the first card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, metus id ornare euismod, nisi mauris commodo ex, sit amet semper sapien quam in dolor.",
      imageSrc: "/assets/images/coming-soon.png",
    },
    {
      title: "Service 2",
      description:
        "This is the second card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, metus id ornare euismod, nisi mauris commodo ex, sit amet semper sapien quam in dolor.",
      imageSrc: "/assets/images/coming-soon.png",
    },
  ];

  return (
    <section id="workWithMe" className="bg-indigo-100">
      <div className="container bg-transparent py-16 text-center">
        <h2 className="capitalize mb-12 underlineEffect">How I can help you</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title}>
              <div className="relative h-90">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  width={332}
                  height={310}
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
