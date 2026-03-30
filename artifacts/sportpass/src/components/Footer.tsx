import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#1a5c38] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-none">SportPass</div>
                <div className="text-[#c8a84b] text-xs">سبورت باس</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {lang === "en"
                ? "Your pass to sport in Saudi Arabia"
                : "بطاقتك للرياضة في المملكة"}
            </p>
            {/* Vision 2030 badge */}
            <div className="mt-4 inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <span className="text-[#c8a84b] text-xs font-semibold">
                {lang === "en" ? "Vision 2030" : "رؤية 2030"}
              </span>
              <span className="text-white/60 text-xs">🇸🇦</span>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {lang === "en" ? "Sports" : "الرياضات"}
            </h4>
            <ul className="space-y-2">
              {[
                { id: "football", en: "Football", ar: "كرة القدم" },
                { id: "basketball", en: "Basketball", ar: "كرة السلة" },
                { id: "swimming", en: "Swimming", ar: "السباحة" },
                { id: "rock-climbing", en: "Rock Climbing", ar: "تسلق الصخور" },
                { id: "volleyball", en: "Volleyball", ar: "الكرة الطائرة" },
              ].map((s) => (
                <li key={s.id}>
                  <Link href={`/sports/${s.id}`}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer">
                      {lang === "en" ? s.en : s.ar}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {lang === "en" ? "Quick Links" : "روابط سريعة"}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/courses", en: "Coaching Courses", ar: "الدورات التدريبية" },
                { href: "/licenses", en: "Sport Licenses", ar: "التراخيص الرياضية" },
                { href: "/sports", en: "Browse Sports", ar: "تصفح الرياضات" },
                { href: "/register", en: "Register", ar: "إنشاء حساب" },
                { href: "/dashboard", en: "My Dashboard", ar: "لوحة التحكم" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer">
                      {lang === "en" ? link.en : link.ar}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              {lang === "en" ? "Contact" : "تواصل معنا"}
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>📧 info@sportpass.sa</li>
              <li>📞 +966 11 000 0000</li>
              <li>📍 {lang === "en" ? "Riyadh, Saudi Arabia" : "الرياض، المملكة العربية السعودية"}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              {["𝕏", "in", "f", "▶"].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            © 2026 SportPass. {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span>{lang === "en" ? "Proud supporter of" : "داعم فخور لـ"}</span>
            <span className="text-[#c8a84b] font-semibold">
              {lang === "en" ? "Vision 2030" : "رؤية 2030"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
