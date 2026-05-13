"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-1">{t.footer.brand}</h3>
            <p className="text-primary-foreground/70 text-base">{t.footer.tagline}</p>
            <p className="text-primary-foreground/70 leading-relaxed">
              {t.footer.description}
              <br />
              {t.footer.description2}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.footer.aboutMe}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.footer.servicesLink}
                </Link>
              </li>
              <li>
                <Link
                  href="#area"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.footer.serviceAreaLink}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {t.footer.bookingMethod}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <span className="block text-sm">WeChat ID</span>
                <span className="text-primary-foreground">healingmori</span>
              </li>
              <li>
                <span className="block text-sm">Line ID</span>
                <span className="text-primary-foreground">healingmori</span>
              </li>
              <li className="text-sm pt-2">{t.footer.ladiesOnly}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
