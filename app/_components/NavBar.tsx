"use client";

import * as React from "react";
import Link from "next/link";
import { navbarlinks, navbardownlinks, navmobilelinks } from "@/constants";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="flex justify-end md:flex-row md:justify-center">
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            {navbardownlinks.map((navLink) => (
              <NavigationMenuTrigger key={navLink.id}>
                {navLink.title}
              </NavigationMenuTrigger>
            ))}
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {navbardownlinks.map((navLink) =>
                  navLink.sub.map((subLink) => (
                    <li className="row-span-3" key={subLink.id}>
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
    </nav>
  );
};

export default NavBar;
