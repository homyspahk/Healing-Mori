"use client";

import { Award, Clock, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const featureIcons = [Award, Clock, Shield, Heart];

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t.about.features.experience.title,
      description: t.about.features.experience.description,
    },
    {
      icon: Clock,
      title: t.about.features.flexible.title,
      description: t.about.features.flexible.description,
    },
    {
      icon: Shield,
      title: t.about.features.privacy.title,
      description: t.about.features.privacy.description,
    },
    {
      icon: Heart,
      title: t.about.features.caring.title,
      description: t.about.features.caring.description,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-base tracking-[0.2em] text-muted-foreground uppercase mb-4">
            {t.about.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            {t.about.title}
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph2}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph3}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-secondary/50 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            {t.about.targetAudience.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.about.targetAudience.description}
            <br />
            {t.about.targetAudience.description2}
          </p>
        </div>
      </div>
    </section>
  );
}
