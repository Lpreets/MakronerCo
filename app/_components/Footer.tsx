import React from "react";
import { footerlinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-center justify-evenly md:flex-row border-t-2 items-center border-gray-200">
      <ul className="flex flex-col md:flex-row my-5">
        {footerlinks.map((footer) => (
          <li key={footer.id} className="mx-10 px-10">
            <Link href={footer.url}>{footer.title}</Link>
          </li>
        ))}
      </ul>
      <small>
        Copyright &#169; 2023 Lovepreet Zelenkov Singh
      </small>
    </footer>
  );
};

export default Footer;
