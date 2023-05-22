import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../data/projectsData";
import { calculateReadTime } from "../../utils/calculateReadTime";

export default function ProjectPage({ project }) {
  const {
    projectName,
    shortDefinition,
    stack,
    live,
    image,
    objectives,
    technicalOverview,
    challengesAndSolutions,
    futureChanges,
    results,
  } = project;

  const content = `${projectName} ${shortDefinition} ${stack} ${objectives.title} ${objectives.description} ${technicalOverview.title} ${technicalOverview.description} ${challengesAndSolutions.title} ${challengesAndSolutions.description} ${futureChanges.title} ${futureChanges.description} ${results.title} ${results.description}`;

  const readTime = calculateReadTime(content);

  const responsiveDiv = `sm:w-1/3 mt-2`;

  return (
    <>
      <Head>
        <title>{projectName}&apos;s Case Study</title>
        <meta name="description" content={shortDefinition} />
      </Head>
      <section className="container max-md:mt-12">
        <h2>{projectName}</h2>
        <p>{readTime} minute read</p>
        <p>{shortDefinition}</p>
        <div className={responsiveDiv}>
          <h3>Tech Stack</h3>
          <p>{stack}</p>
        </div>
        {live && (
          <div className={responsiveDiv}>
            <h3>Live</h3>
            <Link href={live}>
              <button className="px-5 py-3">
                <Image
                  src="/assets/link-solid.svg"
                  alt="Link icon"
                  width={20}
                  height={20}
                  className="inline iconForBtn"
                />{" "}
                See live
              </button>
            </Link>
          </div>
        )}
        <Image
          src={image}
          alt={projectName}
          width={450}
          height={450}
          className="rounded"
        />
        <h2 className="pt-10 pb-4">{objectives.title}</h2>
        <p className="mb-10">{objectives.description}</p>
        <h2 className="pb-4">{challengesAndSolutions.title}</h2>
        <p className="mb-10">{challengesAndSolutions.description}</p>
        <h2 className="pb-4">{technicalOverview.title}</h2>
        <p className="mb-10">{technicalOverview.description}</p>
        <h2 className="pb-4">{futureChanges.title}</h2>
        <p className="mb-10">{futureChanges.description}</p>
        <h2 className="pb-4">{results.title}</h2>
        <p>{results.description}</p>{" "}
      </section>
    </>
  );
}

/* This function is executed at build time and fetches the data for a specific project
  based on the projectId received as a parameter. */
export async function getStaticProps({ params }) {
  const project = projectsData.find(
    (project) => project.projectId === params.projectId
  );

  /* The found project is returned as props, which will be passed to the component
  rendered by this page. */
  return { props: { project } };
}

/* This function is executed at build time and generates the paths for all the
  projects based on the 'projectsData' array. 
  - For each project in the 'projectsData' array, a path object is created with
  the 'projectId' as the parameter value.
  */
export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { projectId: project.projectId },
  }));

  /* The generated paths are returned along with 'fallback: false', which means
  any path not returned by this function will result in a 404 page. */
  return { paths, fallback: false };
}
