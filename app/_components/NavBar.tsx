"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarlinks, mobilenavlinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <header
        className="flex flex-row justify-center"
        style={{ maxHeight: "300px" }}
      >
        <Image src="/banner.png" alt="" width={6912} height={3456} />
      </header>
      {/* Desktop */}
      <nav className="items-center sm:flex flex-row justify-center hidden">
        <ul className="flex flex-row">
          {navbarlinks.map((nav) => (
            <li
              key={nav.id}
              className="mx-2 relative group"
              onMouseEnter={() => setOpenDropdown(nav.id)}
              onMouseLeave={() => setOpenDropdown("")}
            >
              <Button
                className={`my-1 ${
                  pathname === nav.url
                    ? "bg-red-900 hover:bg-red-900 ring-2 ring-red-400 ring-opacity-100 ring-offset-2"
                    : "hover:ring-2 hover:ring-red-400 hover:ring-opacity-100 ring-offset-2"
                }`}
              >
                <Link href={nav.url}>{nav.title}</Link>
              </Button>

              {/* Dropdown Menu */}
              {openDropdown === nav.id && nav.sub && (
                <div className="absolute w-32">
                  <div className="rounded bg-white border border-black">
                    {nav.sub.map((subOption) => (
                      <Link
                        key={subOption.id}
                        href={subOption.url}
                        className="block px-4 py-2 hover:bg-rose-100"
                      >
                        {subOption.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex justify-end gap-6 sm:hidden mx-10 mt-10 ">
        <Button>Handlekurv</Button>
        <Button>Login</Button>
        <div className="relative inline-block">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
            <Image src="/hamburger.png" alt="" width={64} height={64} style={{ maxHeight: "40px", maxWidth: "50px"}} />
          </button>
          {isMenuOpen && (
            <ul className="border border-black bg-white w-40 flex flex-col text-center absolute right-0">
              {mobilenavlinks.map((nav) => (
                <li key={nav.id} className="border border-black ">
                  <Link
                    href={nav.url}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 block"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
