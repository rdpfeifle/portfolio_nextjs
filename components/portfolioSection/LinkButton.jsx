import Link from "next/link";
import Image from "next/image";

export const LinkButton = ({ linkSrc, iconSrc, iconAlt, label }) => {
  return (
    <Link href={linkSrc}>
      <button className="px-6 py-2">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={20}
          height={20}
          className="inline iconForBtn"
        />{" "}
        {label}
      </button>
    </Link>
  );
};
