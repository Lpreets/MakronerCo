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
      {/* Desktop */}
      <NavigationMenu>
        <NavigationMenuList>
          {navbarlinks.map((navLink) => (
            <NavigationMenuItem key={navLink.id}>
              <Link href={navLink.href} passHref>
                <NavigationMenuLink>{navLink.title}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          {navbardownlinks.map((navDownLinks) => (
            <NavigationMenuItem key={navDownLinks.id}>
              <NavigationMenuTrigger>{navDownLinks.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {navDownLinks.sub.map((subLink) => (
                    <li key={subLink.id}>
                      <Link href={subLink.href} passHref>
                        <NavigationMenuLink>{subLink.title}</NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
