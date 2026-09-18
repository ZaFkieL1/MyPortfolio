"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    const background = document.querySelectorAll<HTMLElement>(
      ".navbar, main, .site-footer",
    );
    background.forEach((element) => {
      if (open) {
        element.setAttribute("inert", "");
        element.setAttribute("aria-hidden", "true");
      } else {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      }
    });

    if (open) closeRef.current?.focus();
    if (!open && wasOpen.current) triggerRef.current?.focus();
    wasOpen.current = open;

    return () => {
      delete document.body.dataset.menuOpen;
      background.forEach((element) => {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      });
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && open) {
        const focusable = Array.from(
          document.querySelectorAll<HTMLElement>(
            "#mobile-menu button, #mobile-menu a[href]",
          ),
        );
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" aria-label={`${portfolioContent.person.name}, home`}>
          {portfolioContent.person.mark}
        </Link>

        <div className="navbar__links" aria-label="Main links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.label === "Work" && pathname?.startsWith("/work") ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="navbar__cta" href="/#contact">
          Start a project
          <ArrowUpRightIcon />
        </Link>

        <button
          ref={triggerRef}
          className="navbar__menu-button"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="mobile-menu__top">
            <span className="brand-mark" aria-hidden="true">
              {portfolioContent.person.mark}
            </span>
            <button
              ref={closeRef}
              className="navbar__menu-button"
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="mobile-menu__links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link className="mobile-menu__cta" href="/#contact" onClick={() => setOpen(false)}>
            Start a project
            <ArrowUpRightIcon />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
