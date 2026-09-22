"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localePath, stripLocale, type Locale } from "@/content/i18n";
import { getPortfolioContent } from "@/content/portfolio";
import { getUi } from "@/content/ui";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const ui = getUi(locale);
  const { person } = getPortfolioContent(locale);
  const links = ui.nav.links;
  // In-page anchors have to keep the language, or every menu item leaves the translation.
  const home = localePath(locale, "/");
  const contact = localePath(locale, "/#contact");
  // `/es/work/credora` is still the work section, whatever the prefix.
  const onWork = stripLocale(pathname ?? "/").startsWith("/work");

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
      <nav className="navbar" aria-label={ui.nav.primaryLabel}>
        <Link className="brand-mark" href={home} aria-label={ui.nav.home(person.name)}>
          {person.mark}
        </Link>

        <div className="navbar__links" aria-label={ui.nav.mainLinksLabel}>
          {links.map((link) => (
            <Link
              key={link.key}
              href={localePath(locale, link.href)}
              aria-current={link.key === "work" && onWork ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* The switcher stays visible at every width — it is how you leave a language you cannot read. */}
        <div className="navbar__actions">
          <LanguageSwitcher
            locale={locale}
            label={ui.language.label}
            switchTo={ui.language.switchTo}
          />

          <Link className="navbar__cta" href={contact}>
            {ui.nav.cta}
            <ArrowUpRightIcon />
          </Link>

          <button
            ref={triggerRef}
            className="navbar__menu-button"
            type="button"
            aria-label={ui.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={ui.nav.menuLabel}
        >
          <div className="mobile-menu__top">
            <span className="brand-mark" aria-hidden="true">
              {person.mark}
            </span>
            <button
              ref={closeRef}
              className="navbar__menu-button"
              type="button"
              aria-label={ui.nav.closeMenu}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="mobile-menu__links">
            {links.map((link) => (
              <Link
                key={link.key}
                href={localePath(locale, link.href)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link className="mobile-menu__cta" href={contact} onClick={() => setOpen(false)}>
            {ui.nav.cta}
            <ArrowUpRightIcon />
          </Link>
        </div>
      ) : null}
    </header>
  );
}
