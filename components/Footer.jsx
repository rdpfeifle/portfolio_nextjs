import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-yellow py-12">
      <div className="container py-0 flex flex-col items-center justify-center">
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/raqueldpfeifle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                width={34}
                height={34}
                className="transform hover:scale-110 transition-transform duration-300 social-icons"
              />
            </span>
          </Link>
          <Link
            href="https://github.com/rdpfeifle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Image
                src="/assets/github.svg"
                alt="Github"
                width={36}
                height={36}
                className="transform hover:scale-110 transition-transform duration-300 social-icons"
              />
            </span>
          </Link>
        </div>
        <p className="text-sm pt-4">
          © 2023 Developed by Raquel Pfeifle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
