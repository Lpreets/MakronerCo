"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navbarlinks, navbardownlinks, navmobilelinks } from "@/constants";
import hamburger from "/public/nav/hamburger.svg";
import logo from "/public/nav/logo.svg";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

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
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b-2 border-gray-900 dark:border-gray-600">
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
      <div className="flex flex-row justify-between md:hidden">
        <Image
          src={logo}
          alt=""
          width={150}
          height={150}
          onClick={() => router.push("/")}
       
        />
        <div className="flex items-center mr-10">
          {theme === "light" ? (
            <Button variant="outline" size="icon" className="h-[3rem] w-[3rem]">
              <Sun
                onClick={() => setTheme("dark")}
                className="h-[3rem] w-[3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
            </Button>
          ) : (
            <Button variant="outline" size="icon" className="h-[3rem] w-[3rem]">
              <Moon
                onClick={() => setTheme("light")}
                className="absolute h-[3rem] w-[3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              />
            </Button>
          )}
        </div>
        <Image
          src={hamburger}
          alt=""
          width={70}
          onClick={() => setIsOpen(!isOpen)}
          className="dark:invert mr-10"
        />
        {isOpen && (
          <div className="absolute right-0 bg-popover/70 rounded-md overflow-hidden z-20">
            <ul className="p-4">
              {navmobilelinks.map((navLink) => (
                <li
                  className="mt-2 mb-2 flex flex-row justify-center"
                  key={navLink.id}
                >
                  <Link
                    href={navLink.href}
                    className={navigationMenuTriggerStyle()}
                    onClick={() => setIsOpen(false)}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
