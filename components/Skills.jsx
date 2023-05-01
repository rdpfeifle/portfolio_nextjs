import Image from "next/image";

export const Skills = () => {
  const technicalSkills = [
    {
      name: "HTML5",
      icon: "/assets/html5.svg",
    },
    {
      name: "CSS3",
      icon: "/assets/css3.svg",
    },
    {
      name: "JavaScript",
      icon: "/assets/js.svg",
    },
    {
      name: "TypeScript",
      icon: "/assets/typescript.svg",
    },
    {
      name: "Python",
      icon: "/assets/python.svg",
    },
    {
      name: "React.js",
      icon: "/assets/react.svg",
    },
    {
      name: "Next.js",
      icon: "/assets/next-js.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/assets/tailwind-css.svg",
    },
    {
      name: "Styled Components",
      icon: "/assets/styled-components.svg",
    },
    {
      name: "Flask",
      icon: "/assets/flask.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/postgresql.svg",
    },
    { name: "Jinja2", icon: "/assets/jinja.svg" },
    { name: "Shopify", icon: "/assets/shopify.svg" },
    { name: "Bootstrap 5", icon: "/assets/bootstrap.svg" },
    { name: "Git", icon: "/assets/git.svg" },
    { name: "Github", icon: "/assets/github.svg" },
    { name: "AWS", icon: "/assets/aws.svg" },
  ];

  return (
    <div>
      <div className="container">
        <h2 className="pb-10 underlineEffect">Technical Skills</h2>

        <ul className="flex flex-wrap items-center text-center gap-10 max-md:justify-center">
          {technicalSkills.map((language) => (
            <li key={language.name} className="flex flex-col items-center">
              <Image
                src={language.icon}
                alt={`${language.name} icon`}
                width={80}
                height={80}
                className="icon object-cover max-md:w-12 max-md:h-14"
              />
              <span className="mt-2">{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
