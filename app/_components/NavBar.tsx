"use client";

import * as React from "react";
import Link from "next/link";
import { navbarlinks, navbardownlinks, navmobilelinks } from "@/constants";
import { useState } from "react";

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
  const [active, setActive] = useState(false);

  return (
    <nav className="flex justify-end md:flex-row md:justify-center">
      {/* Desktop */}
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
              <Link key={navLink.id} href={navLink.href}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navLink.title}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile */}
      <Image
        src="/ui/hamburger.png"
        alt=""
        width={64}
        height={64}
        onClick={() => setActive(!active)}
        className="md:hidden"
      />
      {active && (
        <NavigationMenu className="md:hidden">
          <NavigationMenuList className="text-center absolute right-0 top-6">
            <NavigationMenuItem className="flex flex-col">
              {navmobilelinks.map((navMobLink) => (
                <Link key={navMobLink.id} href={navMobLink.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {navMobLink.title}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </nav>
  );
};

export default NavBar;
