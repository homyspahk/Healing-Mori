import { Droplets, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "正規推油按摩",
    description:
      "運用純熟手法配合精油，深層放鬆肌肉，舒緩疲勞與壓力，促進血液循環，讓身體恢復活力。",
    features: ["深層肌肉放鬆", "精油芳療", "促進血液循環", "緩解肩頸痠痛"],
  },
  {
    icon: Sparkles,
    title: "密宗按摩",
    description:
      "結合古老智慧與現代技術，透過特殊手法喚醒身體能量，達到身心靈的和諧統一，體驗深層的療癒與放鬆。",
    features: ["身心靈療癒", "能量平衡", "深層放鬆", "內在和諧"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            服務項目
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            專屬您的放鬆體驗
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Privacy Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            所有服務均嚴格保密，讓您安心享受專屬時光
          </p>
        </div>
      </div>
    </section>
  );
}
