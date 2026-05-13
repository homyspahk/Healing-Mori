import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-1">Home Massage HK</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">Outcall Spa Hong Kong</p>
            <p className="text-primary-foreground/70 leading-relaxed">
              上門按摩服務
              <br />
              為您帶來深層放鬆與身心平衡
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">快速連結</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  關於我
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  服務項目
                </Link>
              </li>
              <li>
                <Link
                  href="#area"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  服務範圍
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  預約方法
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">聯繫方式</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <span className="block text-sm">WeChat ID</span>
                <span className="text-primary-foreground">healingmori</span>
              </li>
              <li>
                <span className="block text-sm">Line ID</span>
                <span className="text-primary-foreground">healingmori</span>
              </li>
              <li className="text-sm pt-2">只限女賓</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} 版權所有。
          </p>
        </div>
      </div>
    </footer>
  );
}
