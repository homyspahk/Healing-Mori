"use client";

import { Droplets, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/context";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      title: t.services.oilMassage.title,
      description: t.services.oilMassage.description,
      features: t.services.oilMassage.features,
      pricing: [
        { duration: t.services.pricing.duration90, price: "HKD 400" },
        { duration: t.services.pricing.duration120, price: "HKD 500" },
      ],
    },
    {
      icon: Sparkles,
      title: t.services.tantricMassage.title,
      description: t.services.tantricMassage.description,
      features: t.services.tantricMassage.features,
      pricing: [
        { duration: t.services.pricing.duration90, price: "HKD 400" },
        { duration: t.services.pricing.duration120, price: "HKD 500" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xl tracking-[0.2em] text-muted-foreground uppercase mb-4">
            {t.services.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            {t.services.title}
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-4 mb-3">
                    {service.pricing.map((item, priceIndex) => (
                      <div key={priceIndex} className="flex items-baseline gap-2">
                        <span className="text-2xl font-semibold text-primary">{item.price}</span>
                        <span className="text-muted-foreground">/ {item.duration}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{t.services.noHiddenFees}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-2xl">
            {t.services.privacyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
