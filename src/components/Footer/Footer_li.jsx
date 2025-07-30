/* eslint-disable react/prop-types */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer_li = ({ path, name }) => {
  const currentPath = usePathname();

  const isActive = currentPath === path;
  // Debugging: Log the current path and the path being checked
  console.log("Checking path:", path);
  console.log("Current Path:", currentPath);
  return (
    <li>
      <Link
        href={path}
        onClick={() => window.scrollTo(0, 0)}
        className={`text-decoration-none footer-liii ${
          isActive ? "link-active-footer" : ""
        }`}
      >
        <span className="fs-3">{name}</span>
      </Link>
    </li>
  );
};

export default Footer_li;
