"use client";

import * as React from "react";
import Link from "next/link";
import { navbarlinks, navbardownlinks, navmobilelinks } from "@/constants";
import  logo  from "/public/logo.png"

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
  return (
    <>
    <div className="flex justify-center items-center ">
      <Link href="/">
    <Image 
      src={logo}
      alt=""
      width={150}
      height={150}
      style={{ borderRadius: '50%' }}
    />
    </Link>
  
    </div>
    <nav className="flex justify-end md:flex-row md:justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            {navbardownlinks.map((navLink) => (
              <NavigationMenuTrigger key={navLink.id}>
                {navLink.title}
              </NavigationMenuTrigger>
            ))}
            <NavigationMenuContent>
              <ul className="p-4">
                {navbardownlinks.map((navLink) =>
                  navLink.sub.map((subLink) => (
                    <li className="mt-2 mb-2" key={subLink.id}>
                      <NavigationMenuLink
                        className=""
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
    </nav>
    </>
  );
};

export default NavBar;
