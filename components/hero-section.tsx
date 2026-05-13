"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/massage-hero.jpg"
          alt="按摩服務"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-base md:text-lg tracking-[0.3em] text-muted-foreground uppercase mb-6">
          {t.hero.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-8 text-balance">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
          <br className="hidden md:block" />
          {t.hero.descriptionLine2}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
          >
            <Link href="#contact">{t.hero.bookService}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-base"
          >
            <Link href="#services">{t.hero.learnMore}</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
