"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navbarlinks, navbardownlinks, navmobilelinks } from "@/constants";
import hamburger from "/public/ui/hamburger.png";
import logo from "/public/logo.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image
            src={logo}
            alt=""
            width={150}
            height={150}
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>
      <nav className="flex justify-end md:flex-row md:justify-center mt-2">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Desktop */}
            <NavigationMenuItem className="hidden md:block">
              {navbardownlinks.map((navLink) => (
                <NavigationMenuTrigger key={navLink.id}>
                  {navLink.title}
                </NavigationMenuTrigger>
              ))}
              <NavigationMenuContent>
                <ul className="p-4">
                  {navbardownlinks.map((navLink) =>
                    navLink.sub.map((subLink) => (
                      <li
                        className="mt-2 mb-2 flex flex-row justify-center"
                        key={subLink.id}
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                          href={subLink.href}
                        >
                          {subLink.title}
                        </NavigationMenuLink>
                      </li>
                    ))
                  )}
                </ul>
              </NavigationMenuContent>
              {navbarlinks.map((navLink) => (
                <Link
                  key={navLink.id}
                  href={navLink.href}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {navLink.title}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
  

        {/* Mobile */}
        <div className=" relative block md:hidden mr-7">
        <Image
              src={hamburger}
              alt=""
              width={60}
              height={60}
              onClick={() => setIsOpen(!isOpen)}
            />
          {isOpen && (
            <div className="absolute right-0 bg-popover/70 rounded-md overflow-hidden z-20">
            <ul className="p-4">
              {navmobilelinks.map((navLink) => (
                <li
                  className="mt-2 mb-2 flex flex-row justify-center"
                  key={navLink.id}
                >
                  <Link href={navLink.href} className={navigationMenuTriggerStyle()} onClick={() => setIsOpen(false)}>
                  {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          )}
          </div>
      </nav>
    </>
  );
};

export default NavBar;
