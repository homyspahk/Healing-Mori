"use client";

import { Home, Building2, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export default function ServiceAreaSection() {
  const { t } = useLanguage();

  const locations = [
    {
      icon: Home,
      title: t.serviceArea.locations.home.title,
      description: t.serviceArea.locations.home.description,
    },
    {
      icon: Building2,
      title: t.serviceArea.locations.hotel.title,
      description: t.serviceArea.locations.hotel.description,
    },
    {
      icon: Clock,
      title: t.serviceArea.locations.hourlyRoom.title,
      description: t.serviceArea.locations.hourlyRoom.description,
    },
  ];

  return (
    <section id="area" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xl tracking-[0.2em] text-muted-foreground uppercase mb-4">
            {t.serviceArea.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            {t.serviceArea.title}
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.serviceArea.description}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="text-center p-8 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <location.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {location.title}
              </h3>
              <p className="text-muted-foreground">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-secondary/50 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t.serviceArea.areaInfo.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.serviceArea.areaInfo.description}
            </p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t.serviceArea.timeInfo.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.serviceArea.timeInfo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
