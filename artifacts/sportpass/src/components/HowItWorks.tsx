import { useLanguage } from "@/hooks/useLanguage";

const steps = {
  en: [
    {
      step: "01",
      icon: "🏅",
      title: "Find a Sport",
      description:
        "Browse our curated selection of 5 sports available across Saudi Arabia. Read about each sport and find the one that excites you.",
    },
    {
      step: "02",
      icon: "🏟️",
      title: "Join a Club",
      description:
        "Discover clubs near you in your city or region. View contact details, facilities, and how to sign up as a member.",
    },
    {
      step: "03",
      icon: "📋",
      title: "Get Licensed",
      description:
        "Register for coaching courses to develop your skills, or purchase your official sport license to compete and play officially.",
    },
  ],
  ar: [
    {
      step: "01",
      icon: "🏅",
      title: "ابحث عن رياضة",
      description:
        "تصفح مجموعتنا المنتقاة من 5 رياضات متاحة في جميع أنحاء المملكة العربية السعودية. اقرأ عن كل رياضة وابحث عن الرياضة التي تثير حماسك.",
    },
    {
      step: "02",
      icon: "🏟️",
      title: "انضم إلى نادٍ",
      description:
        "اكتشف الأندية القريبة منك في مدينتك أو منطقتك. اطلع على تفاصيل الاتصال والمرافق وكيفية التسجيل كعضو.",
    },
    {
      step: "03",
      icon: "📋",
      title: "احصل على الترخيص",
      description:
        "سجل في دورات التدريب لتطوير مهاراتك، أو احصل على رخصتك الرياضية الرسمية للمنافسة واللعب رسميًا.",
    },
  ],
};

export function HowItWorks() {
  const { lang } = useLanguage();
  const stepsData = steps[lang];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {lang === "en" ? "How SportPass Works" : "كيف يعمل سبورت باس"}
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {lang === "en"
              ? "Three simple steps to start your sports journey in Saudi Arabia"
              : "ثلاث خطوات بسيطة لبدء رحلتك الرياضية في المملكة العربية السعودية"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-[#1a5c38]/20 z-0" />

          {stepsData.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:border-[#1a5c38]/30 hover:shadow-md transition-all duration-200"
              data-testid={`how-step-${index + 1}`}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1a5c38] text-white text-xs font-bold flex items-center justify-center">
                {step.step}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-5 mt-2">{step.icon}</div>

              {/* Connector arrow */}
              {index < stepsData.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#c8a84b] text-xl z-10">
                  {lang === "ar" ? "←" : "→"}
                </div>
              )}

              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
