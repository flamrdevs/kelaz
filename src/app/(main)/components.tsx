"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { motion } from "framer-motion";

import { cxs } from "@klass/core";

const NavLink = (props: { href: string; label: string }) => {
  const pathname = usePathname();

  const active = props.href === "/" ? pathname === props.href : pathname.startsWith(props.href);

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          className="relative inline-flex items-center justify-center px-1.5 py-0.5 h-8 outline-none rounded-md focus-visible:ring-1 focus-visible:ring-neutral-7 z-0"
          href={props.href}
        >
          {active && (
            <motion.span className="absolute -bottom-1 left-0 w-full h-px bg-neutral-9 rounded-full z-10" layoutId="navlink-active" />
          )}
          <span className={cxs("z-20", active ? "text-neutral-12" : "text-neutral-10 hover:text-neutral-11")}>{props.label}</span>
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

const NavLinks = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex items-center justify-center gap-2">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/contact" label="Contact" />
        <NavLink href="/projects" label="Projects" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export { NavLinks };
