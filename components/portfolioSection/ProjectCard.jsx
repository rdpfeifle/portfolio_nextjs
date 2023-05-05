import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "./LinkButton";

export const ProjectCard = ({
  projectName,
  technologies,
  description,
  caseStudyLink,
  demoLink,
  codeLink,
  liveLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col items-center md:gap-14 md:flex-row md:pb-12">
      <div className="md:w-1/2">
        <h3 className="font-semibold mb-3 uppercase">{projectName}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-gray-700 text-white px-2 py-1 text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
        <p className="text-lg mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 max-md:justify-center">
          {/* In this case, the use of the && condition is necessary to ensure that the LinkButton is only rendered when the corresponding link exists. Without this condition, I would have to manually check the existence of each link, which can be difficult and may cause bugs. By using the && condition, I can avoid potential errors that may arise if a link is missing, and simplify my code. */}
          {caseStudyLink && (
            <LinkButton
              linkSrc={caseStudyLink}
              iconSrc="/assets/analysis.png"
              iconAlt="Case study icon"
              label="Case Study"
            />
          )}
          {demoLink && (
            <LinkButton
              linkSrc={demoLink}
              iconSrc="/assets/video-solid.svg"
              iconAlt="Demo video icon"
              label="Demo"
            />
          )}
          {codeLink && (
            <LinkButton
              linkSrc={codeLink}
              iconSrc="/assets/code-solid.svg"
              iconAlt="Code icon"
              label="Code"
            />
          )}
          {liveLink && (
            <LinkButton
              linkSrc={liveLink}
              iconSrc="/assets/link-solid.svg"
              alt="Link icon"
              label="Live"
            />
          )}
        </div>
      </div>
      <div className="md:w-1/2 pb-12 max-md:pt-8">
        <Link href={caseStudyLink}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={300}
            className="image-scale-up"
          />
        </Link>
      </div>
    </div>
  );
};
