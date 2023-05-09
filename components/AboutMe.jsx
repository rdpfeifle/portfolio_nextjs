import Link from "next/link";

export const AboutMe = () => {
  return (
    <section id="about" className="bg-effect">
      <div className="container">
        <h2 className="pb-8 px-0 underlineEffect">About Me</h2>
        <p className="leading-relaxed pb-4">
          Hello, I&apos;m Raquel, a dedicated Software Engineer with a strong
          focus on frontend development. I specialize in{" "}
          <span className="font-semibold">UI design</span> and{" "}
          <span className="font-semibold">responsive web development</span>,
          delivering high-quality results with a practical approach.
        </p>
        <p className="pb-4">
          I have a passion for creating visually appealing interfaces that
          engage users and enhance their overall experience. Whether it&apos;s
          starting from scratch or improving existing designs, I prioritize{" "}
          <span className="font-semibold">
            simplicity, functionality, and aesthetics
          </span>
          .
        </p>
        <p>
          If you&apos;re looking for a frontend engineer who values{" "}
          <span className="font-semibold">
            user experience, design, and performance optimization
          </span>
          , I&apos;m here to collaborate with you. Let&apos;s work together to
          bring your digital vision to life, using practical solutions to create{" "}
          <span className="font-semibold">outstanding web experiences</span>.
        </p>
      </div>
    </section>
  );
};
