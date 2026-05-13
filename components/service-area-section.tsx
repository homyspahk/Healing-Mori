import { Home, Building2, Clock } from "lucide-react";

const locations = [
  {
    icon: Home,
    title: "家中",
    description: "在熟悉舒適的家中環境享受按摩服務",
  },
  {
    icon: Building2,
    title: "酒店",
    description: "為旅客提供酒店上門服務，讓旅途更輕鬆",
  },
  {
    icon: Clock,
    title: "時租房",
    description: "靈活選擇時租房作為服務地點，保護私隱",
  },
];

export default function ServiceAreaSection() {
  return (
    <section id="area" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xl tracking-[0.2em] text-muted-foreground uppercase mb-4">
            服務範圍
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            香港全區上門服務
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            提供上門服務，覆蓋香港各區，為您提供最方便的預約體驗
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
              服務區域
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              香港島、九龍、新界各區均可上門服務。
              偏遠地區可能需要額外交通費用，詳情請預約時查詢。
            </p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              服務時間
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              彈性服務時間，配合您的日程安排。
              建議提前一至兩天預約，以確保最佳服務時段。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
