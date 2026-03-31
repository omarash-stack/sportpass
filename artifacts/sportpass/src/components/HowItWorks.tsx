import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const branches = [
  {
    accent: "#0D9488", // teal
    Icon: MapPin,
    heading: { en: "Join a Club", ar: "انضم إلى نادٍ" },
    description: {
      en: "Join local clubs and train with a community.",
      ar: "انضم إلى أندية محلية وتدرب مع مجتمع رياضي.",
    },
    cta: { en: "Find clubs", ar: "ابحث عن أندية" },
    ctaLink: "/sports",
  },
  {
    accent: "#7C3AED", // purple
    Icon: GraduationCap,
    heading: { en: "Sign Up for a Course", ar: "سجّل في دورة" },
    description: {
      en: "Learn skills through guided training programs.",
      ar: "تعلّم المهارات من خلال برامج تدريبية موجّهة.",
    },
    cta: { en: "See courses", ar: "عرض الدورات" },
    ctaLink: "/courses",
  },
  {
    accent: "#D97706", // amber
    Icon: Award,
    heading: { en: "Get a License", ar: "احصل على ترخيص" },
    description: {
      en: "Earn official certifications to coach, referee, or compete.",
      ar: "احصل على شهادات رسمية للتدريب أو التحكيم أو المنافسة.",
    },
    cta: { en: "Get license", ar: "احصل على ترخيصك" },
    ctaLink: "/licenses",
  },
];

export function HowItWorks() {
  const { lang } = useLanguage();
  const isRTL = lang === "ar";

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20" data-testid="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Entry card ── */}
        <div className="flex justify-center">
          <div className="bg-[#1B5E3A] rounded-2xl px-8 py-8 md:px-12 md:py-10 text-center max-w-xl w-full shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {lang === "en" ? "Find Your Sport" : "اعثر على رياضتك"}
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5 max-w-md mx-auto">
              {lang === "en"
                ? "Browse our curated selection of sports available across Saudi Arabia and pick the one that excites you."
                : "تصفح مجموعتنا المنتقاة من الرياضات المتاحة في أنحاء المملكة واختر الرياضة التي تثير حماسك."}
            </p>
            <Link
              to="/sports"
              className="inline-flex items-center gap-2 bg-white text-[#1B5E3A] font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {lang === "en" ? "Browse Sports" : "تصفح الرياضات"}
              <span className={isRTL ? "rotate-180 inline-block" : ""}>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ── Branching connector (desktop) ── */}
        <div className="hidden md:flex justify-center">
          <svg
            viewBox="0 0 1024 80"
            className="w-full max-w-5xl h-20"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Vertical stem from top card */}
            <line x1="512" y1="0" x2="512" y2="30" stroke="#1B5E3A" strokeWidth="2" strokeOpacity="0.3" />
            {/* Branch dot */}
            <circle cx="512" cy="30" r="5" fill="#1B5E3A" fillOpacity="0.25" />
            {/* Left branch — card center at 164px */}
            <path d="M512 30 Q512 55 164 55 L164 80" fill="none" stroke="#1B5E3A" strokeWidth="2" strokeOpacity="0.3" />
            <circle cx="164" cy="80" r="4" fill="#0D9488" fillOpacity="0.5" />
            {/* Center branch — card center at 512px */}
            <line x1="512" y1="30" x2="512" y2="80" stroke="#1B5E3A" strokeWidth="2" strokeOpacity="0.3" />
            <circle cx="512" cy="80" r="4" fill="#7C3AED" fillOpacity="0.5" />
            {/* Right branch — card center at 860px */}
            <path d="M512 30 Q512 55 860 55 L860 80" fill="none" stroke="#1B5E3A" strokeWidth="2" strokeOpacity="0.3" />
            <circle cx="860" cy="80" r="4" fill="#D97706" fillOpacity="0.5" />
          </svg>
        </div>

        {/* ── Branching connector (mobile) ── */}
        <div className="flex md:hidden justify-center">
          <div className="w-0.5 h-10 bg-[#1B5E3A]/30 relative">
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#1B5E3A]/25" />
          </div>
        </div>

        {/* ── Branch cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {branches.map((b, i) => (
            <div key={i}>
              {/* Mobile connector line between cards */}
              {i > 0 && (
                <div className="flex md:hidden justify-center mb-5">
                  <div className="w-0.5 h-6 bg-[#1B5E3A]/20" />
                </div>
              )}
              <div
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col"
                style={{ borderTopWidth: 3, borderTopColor: b.accent }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <b.Icon size={28} style={{ color: b.accent }} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {lang === "en" ? b.heading.en : b.heading.ar}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {lang === "en" ? b.description.en : b.description.ar}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
