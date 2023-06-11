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
    { name: "Wordpress", icon: "/assets/wordpress.svg" },
  ];

  return (
    <section id="skills">
      <div className="container pb-16">
        <h2 className="py-10 underlineEffect">Technical Skills</h2>
        <ul className="flex flex-wrap items-center justify-start gap-10 max-md:justify-center">
          {technicalSkills.map((language) => (
            <li key={language.name} className="flex flex-col items-center">
              <Image
                src={language.icon}
                alt={`${language.name} icon`}
                width={100}
                height={100}
                className="icon object-contain w-16 h-16 max-md:w-12 max-md:h-12"
              />
              <span className="mt-2">{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
