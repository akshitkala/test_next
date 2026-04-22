"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Research", href: "/research" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 glass-morphism">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary transition-transform group-hover:scale-110 flex items-center justify-center">
             <span className="text-[10px] font-black text-white">LPU</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Lovely Professional University</span>
        </Link>
        
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground transition-colors md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-foreground transition-colors ${
                pathname === link.href ? "text-foreground" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,130,32,0.3)]">
          Apply Now
        </button>
      </div>
    </nav>
  );
}