"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale, t } = useLanguage();

  const alternateLocale = locale === "zh-TW" ? "zh-CN" : "zh-TW";

  const navLinks = [
    { href: "#about", label: t.header.nav.about },
    { href: "#services", label: t.header.nav.services },
    { href: "#area", label: t.header.nav.area },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-semibold tracking-wide text-foreground">
              Home Massage HK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>{t.header.nav.bookNow}</a>
            </Button>
            {/* Language Toggle */}
            <Link
              href={`/${alternateLocale}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-3 py-1.5"
              aria-label="Toggle language"
            >
              {locale === "zh-TW" ? "繁" : "简"} / {locale === "zh-TW" ? "简" : "繁"}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2">
                <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                  {t.header.nav.bookNow}
                </a>
              </Button>
              {/* Mobile Language Toggle */}
              <Link
                href={`/${alternateLocale}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md px-3 py-2 mt-2 text-center"
                aria-label="Toggle language"
              >
                {locale === "zh-TW" ? "繁體中文" : "简体中文"} → {locale === "zh-TW" ? "简体中文" : "繁體中文"}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
