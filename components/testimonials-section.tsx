import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "平時在中環返工壓力好大，試過好多 spa 都唔夠時間去。直接上門到我中環嘅住所，手法非常細膩，力度拿捏得恰到好處，整個過程私隱保密，非常安心。強烈推薦給同樣工作繁忙的女士！",
    name: "Wing C.",
    title: "金融業經理",
  },
  {
    quote:
      "上星期租咗尖沙咀區酒店渡假，想趁機放鬆一下，第一次嘗試上門按摩服務。好準時到達酒店，感覺非常專業和安全，按摩技術一流，肩頸痠痛明顯改善了很多。下次 staycation 一定會再預約！",
    name: "Michelle L.",
    title: "設計師",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-4">
            客戶回饋
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            真實客戶體驗分享
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 md:p-10 flex flex-col gap-6">
                <Quote className="w-10 h-10 text-primary/30" />
                <blockquote className="text-foreground leading-relaxed text-pretty">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-border pt-5">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
