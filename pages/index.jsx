import Head from "next/head";
import { Hero } from "../components/Hero.jsx";
import { AboutMe } from "../components/AboutMe.jsx";
import { Skills } from "../components/Skills.jsx";
import { ProjectCard } from "../components/portfolioSection/ProjectCard.jsx";
import { WorkWithMe } from "../components/WorkWithMe.jsx";
import { Contact } from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raquel Pfeifle | Software Engineer</title>
        <meta
          name="description"
          content="Welcome to my portfolio! I am a skilled developer proficient in HTML5, CSS3, JavaScript, React.js, and more. Explore my projects and experience in web development, including front-end frameworks, responsive design, and user experience optimization. Get in touch to discuss collaborations and exciting opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Ctext%20x%3D%220%22%20y%3D%2212%22%20font-size%3D%2215%22%3E%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB%3C%2Ftext%3E%3C%2Fsvg%3E
          "
        />
      </Head>
      <Hero />
      <AboutMe />
      <Skills />
      <section id="portfolio" className="container">
        <h2 className="underlineEffect pb-6">Projects</h2>
        <ProjectCard
          projectName="Tripaholics"
          technologies={[
            "Python",
            "JavaScript",
            "Bootstrap",
            "Jinja2",
            "Flask",
            "PostgreSQL",
            "SQLAlchemy",
            "Twilio's SendGrid Mail API",
            "Unsplash Images API",
            "Swiper API",
            "Google Maps API",
          ]}
          description="Tripaholics is a full-stack travel web application that was developed in just 4 weeks. It is built using Python, Flask, and JavaScript, providing a complete solution for managing trips. The application includes features such as user account management, creating, editing, and deleting trips."
          // caseStudyLink="/case-study/tripaholics"
          demoLink="https://www.youtube.com/watch?v=c5srainYwKA"
          codeLink="https://github.com/rdpfeifle/Travel-web-app"
          imageSrc="/assets/images/tripaholics-mockup.png"
          imageAlt="Tripaholics Mockup Image"
        />
        <ProjectCard
          projectName="Portfolio Website"
          technologies={[
            "Next.js",
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "AWS Amplify",
            "Route 53",
            "Twilio's SendGrid Mail API",
          ]}
          description="My personal portfolio is built using Next.js/React.js and Tailwind CSS, creating a visually appealing and responsive website. I incorporated the interactive Typewriter Effect library and integrated SendGrid Mail API to allow visitors to submit the contact form."
          // caseStudyLink="/case-study/portfolio-website"
          // demoLink="https://"
          codeLink="https://github.com/rdpfeifle/portfolio_nextjs"
          imageSrc="/assets/images/portfolio-mockup.png"
          imageAlt="Portfolio Mockup Image"
        />
        <ProjectCard
          projectName="Alloy Fashion"
          technologies={[
            "Shopify Store Setup",
            "Theme Customization",
            "Shopify Liquid",
            "CSS",
            "SSL Encrypted",
            "Google Analytics",
            "Facebook Pixel",
            "Inventory Management System",
          ]}
          description="Alloy Fashion, powered by Shopify, offers a complete e-commerce solution with a user-friendly product page, convenient cart functionality, and a newsletter feature. Additionally, it has an easy navigation and secure payment processing."
          caseStudyLink="/case-study/alloy-ecommerce"
          // demoLink="https://"
          // codeLink="https://github.com/rdpfeifle/portfolio_nextjs"
          imageSrc="/assets/images/alloyStore-mockup.png"
          imageAlt="Alloy Store Mockup Image"
        />
      </section>
      <WorkWithMe />
      <Contact />
    </>
  );
}
