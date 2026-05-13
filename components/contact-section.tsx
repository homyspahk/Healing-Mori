"use client";

import { useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    quote: "平時在中環返工壓力好大，試過好多spa都唔夠時間去。Jerry 直接上門到我中環嘅住所，手法非常細膩，力度拿捏得恰到好處，整個過程私隱保密，非常安心。強烈推薦給同樣工作繁忙的女士！",
    name: "Wing C.",
    role: "金融業經理",
    date: "2025年12月",
  },
  {
    id: 2,
    rating: 5.0,
    quote: "上星期租咗尖沙咀區酒店渡假，想趁機放鬆一下，第一次嘗試上門按摩服務。Jerry 好準時到達酒店，感覺非常專業和安全，按摩技術一流，肩頸痠痛明顯改善了很多。下次 staycation 一定會再預約！",
    name: "Ka Man L.",
    role: "設計師",
    date: "2025年11月",
  },
  {
    id: 3,
    rating: 5.0,
    quote: "作為一位媽媽，真係好難抽時間出去做spa。Home Massage HK 的上門服務真的太方便了！Jerry 好專業，讓我在家就能享受高質素的按摩服務，終於可以好好放鬆一下。",
    name: "Mandy T.",
    role: "全職媽媽",
    date: "2025年10月",
  },
];

const contactMethods = [
  {
    platform: "WeChat",
    id: "healingmori",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.001-.272-.027-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
      </svg>
    ),
  },
  {
    platform: "Line",
    id: "healingmori",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xl tracking-[0.2em] text-muted-foreground uppercase mb-4">
            預約方法
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            開始您的療癒旅程
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            透過以下方式聯繫預約，我會盡快回覆您的查詢
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {method.platform} ID
                </h3>
                <p className="text-2xl font-medium text-primary mb-4">
                  {method.id}
                </p>
                <p className="text-lg text-muted-foreground">(只限女賓)</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-secondary/50 rounded-lg p-8 text-center">
          <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-4">
            預約須知
          </h3>
          <ul className="text-muted-foreground space-y-2 max-w-lg mx-auto text-left">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>本服務只限女賓，敬請見諒</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>需最少早半天預約, 建議提前一至兩天預約，以確保最佳服務時段</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>預約時請告知服務地點、時間及所需服務類型</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>所有對話內容絕對保密</span>
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="mt-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
          客戶回饋
        </h3>
      </div>

      {/* Testimonial Card */}
      <Card className="bg-card border-border">
        <CardContent className="p-8 md:p-10">
          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {current.rating.toFixed(1)}
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author & Navigation */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-foreground">{current.name}</p>
              <p className="text-sm text-muted-foreground">
                {current.role} · {current.date}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-foreground" : "bg-border"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
