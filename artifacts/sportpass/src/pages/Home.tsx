import { Link } from "wouter";
import { ArrowRight, Award, Shield, TrendingUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";
import { getFeaturedClubs } from "@/data/clubs";
import { getUpcomingCourses } from "@/data/courses";
import { SportCard } from "@/components/SportCard";
import { ClubCard } from "@/components/ClubCard";
import { CourseCard } from "@/components/CourseCard";
import { HowItWorks } from "@/components/HowItWorks";

const heroBgSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><g fill="none" stroke="white" stroke-width="0.5" opacity="0.6"><polygon points="40,5 74,25 74,65 40,85 6,65 6,25"/><polygon points="40,15 64,27 64,57 40,73 16,57 16,27"/><polygon points="40,25 54,33 54,49 40,61 26,49 26,33"/></g></svg>';
const heroBgUrl = "url(\"data:image/svg+xml," + encodeURIComponent(heroBgSvg) + "\")";

export default function Home() {
  const { lang } = useLanguage();
  const featuredClubs = getFeaturedClubs().slice(0, 3);
  const upcomingCourses = getUpcomingCourses(3);

  return (
    <div className="min-h-screen">
      {/* ─── 1. HERO ─── */}
      <section
        className="relative pt-24 pb-20 overflow-hidden"
        style={{ backgroundColor: "#1a5c38" }}
        data-testid="hero-section"
      >
        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: heroBgUrl,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Palm/crescent motif */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline label */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#c8a84b] text-xs font-semibold">🇸🇦</span>
            <span className="text-white/80 text-xs font-medium">
              {lang === "en" ? "Saudi Arabia's Sports Platform" : "منصة الرياضة في المملكة"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            {lang === "en" ? (
              <>
                Your Pass to Sport
                <br />
                <span className="text-[#c8a84b]">in Saudi Arabia</span>
              </>
            ) : (
              <>
                بطاقتك للرياضة
                <br />
                <span className="text-[#c8a84b]">في المملكة العربية السعودية</span>
              </>
            )}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {lang === "en"
              ? "Discover sports, find clubs near you, join coaching courses, and get your official sport license — all in one place."
              : "اكتشف الرياضات وابحث عن الأندية القريبة منك والتحق بدورات التدريب واحصل على رخصتك الرياضية الرسمية — كل ذلك في مكان واحد."}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sports">
              <button
                className="flex items-center gap-2 px-8 py-3.5 bg-white text-[#1a5c38] font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm shadow-lg"
                data-testid="hero-cta-explore"
              >
                {lang === "en" ? "Explore Sports" : "استكشف الرياضات"}
                <ArrowRight size={16} className={lang === "ar" ? "rotate-180" : ""} />
              </button>
            </Link>
            <Link href="/licenses">
              <button
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-[#c8a84b] text-[#c8a84b] font-semibold rounded-lg hover:bg-[#c8a84b] hover:text-white transition-colors text-sm"
                data-testid="hero-cta-license"
              >
                {lang === "en" ? "Get Your License" : "احصل على رخصتك"}
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { num: "5", label: { en: "Sports", ar: "رياضات" } },
              { num: "15+", label: { en: "Clubs", ar: "نادٍ" } },
              { num: "10+", label: { en: "Courses", ar: "دورة" } },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-extrabold text-white">{stat.num}</div>
                <div className="text-white/60 text-xs mt-0.5">
                  {lang === "en" ? stat.label.en : stat.label.ar}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. BROWSE BY SPORT ─── */}
      <section className="py-16 bg-white" data-testid="sports-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {lang === "en" ? "Browse by Sport" : "تصفح حسب الرياضة"}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {lang === "en"
                  ? "5 sports available across Saudi Arabia"
                  : "5 رياضات متاحة في جميع أنحاء المملكة"}
              </p>
            </div>
            <Link href="/sports">
              <span className="text-[#1a5c38] text-sm font-medium hover:underline cursor-pointer flex items-center gap-1">
                {lang === "en" ? "View All" : "عرض الكل"}
                <ArrowRight size={14} className={lang === "ar" ? "rotate-180" : ""} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sports.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS ─── */}
      <HowItWorks />

      {/* ─── 4. FEATURED CLUBS ─── */}
      <section className="py-16 bg-white" data-testid="featured-clubs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {lang === "en" ? "Featured Clubs" : "أندية مميزة"}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {lang === "en" ? "Top clubs across the Kingdom" : "أفضل الأندية في أنحاء المملكة"}
              </p>
            </div>
            <Link href="/sports">
              <span className="text-[#1a5c38] text-sm font-medium hover:underline cursor-pointer flex items-center gap-1">
                {lang === "en" ? "All Clubs" : "جميع الأندية"}
                <ArrowRight size={14} className={lang === "ar" ? "rotate-180" : ""} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredClubs.map((club) => (
              <ClubCard key={club.id} club={club} showSport />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. UPCOMING COURSES ─── */}
      <section className="py-16 bg-[#f5f5f5]" data-testid="upcoming-courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {lang === "en" ? "Upcoming Courses" : "الدورات القادمة"}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {lang === "en"
                  ? "Coaching certifications and skill development"
                  : "شهادات التدريب وتطوير المهارات"}
              </p>
            </div>
            <Link href="/courses">
              <span className="text-[#1a5c38] text-sm font-medium hover:underline cursor-pointer flex items-center gap-1">
                {lang === "en" ? "All Courses" : "جميع الدورات"}
                <ArrowRight size={14} className={lang === "ar" ? "rotate-180" : ""} />
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} showSport />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. VISION 2030 BANNER ─── */}
      <section
        className="py-14"
        style={{
          background: "linear-gradient(135deg, #1a5c38 0%, #0f3d25 100%)",
        }}
        data-testid="vision2030-banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="text-5xl">🇸🇦</div>
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {lang === "en"
                    ? "Supporting Saudi Vision 2030"
                    : "دعم رؤية المملكة 2030"}
                </h2>
                <p className="text-white/70 text-sm max-w-md">
                  {lang === "en"
                    ? "SportPass is proud to support Saudi Arabia's Vision 2030 goals — promoting an active, healthy society and making sport accessible to all."
                    : "يفخر سبورت باس بدعم أهداف رؤية المملكة 2030 — تعزيز مجتمع نشط وصحي وجعل الرياضة متاحة للجميع."}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { icon: <Award size={16} />, en: "Active Lifestyle", ar: "نمط حياة نشط" },
                { icon: <Shield size={16} />, en: "Official Licensing", ar: "ترخيص رسمي" },
                { icon: <TrendingUp size={16} />, en: "Sports Growth", ar: "نمو رياضي" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5">
                  <span className="text-[#c8a84b]">{item.icon}</span>
                  <span className="text-white text-xs font-medium">
                    {lang === "en" ? item.en : item.ar}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
