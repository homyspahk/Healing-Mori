import { Award, Clock, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "六年經驗",
    description: "擁有超過六年按摩經驗，熟悉多種放鬆與調整手法",
  },
  {
    icon: Clock,
    title: "彈性時間",
    description: "配合您的時間安排，提供靈活的預約服務",
  },
  {
    icon: Shield,
    title: "私隱保密",
    description: "嚴格保護客人私隱，讓您安心享受服務",
  },
  {
    icon: Heart,
    title: "細心體貼",
    description: "以細緻手感結合純熟技術，帶來身心平衡",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-base tracking-[0.2em] text-muted-foreground uppercase mb-4">
            關於我
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            專注身心平衡的療癒之旅
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              您好，我是一位香港男按摩師，三十多歲，樣貌端正。我致力於為每位女士帶來專屬的放鬆體驗。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              擁有超過六年的按摩經驗，熟悉多種放鬆與調整手法，擅長以細緻手感結合純熟技術，為女士帶來深層放鬆與身心平衡，讓壓力隨觸感釋放。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我提供上門服務，可選正規推油按摩或密宗按摩。服務私隱保密，讓每位客人都能在安心自在的氣氛中享受個人專屬時光。
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
            服務對象
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            歡迎辦公室女士、主婦或旅客預約體驗（只限女賓）。
            <br />
            貼心可靠，為您重拾內在寧靜與魅力。
          </p>
        </div>
      </div>
    </section>
  );
}
