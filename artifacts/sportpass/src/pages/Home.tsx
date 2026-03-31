import { useLanguage } from "@/hooks/useLanguage";
import { HowItWorks } from "@/components/HowItWorks";

const sportIcons = [
  // 0 Football
  `<circle cx="20" cy="20" r="18" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 2a18 18 0 0 1 0 36M20 2a18 18 0 0 0 0 36M2 20h36M8 6l6 14-10 8h32l-10-8 6-14" fill="none" stroke="white" stroke-width="1"/>`,
  // 1 Basketball
  `<circle cx="20" cy="20" r="18" fill="none" stroke="white" stroke-width="1.5"/><path d="M2 20h36M20 2v36M5 7c8 4 12 10 13 18M35 7c-8 4-12 10-13 18" fill="none" stroke="white" stroke-width="1"/>`,
  // 2 Swimming
  `<path d="M4 22c3-3 6-3 9 0s6 3 9 0 6-3 9 0 6 3 9 0" fill="none" stroke="white" stroke-width="1.5"/><circle cx="14" cy="14" r="3" fill="none" stroke="white" stroke-width="1.5"/><path d="M17 14l6 4-3 4" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 3 Volleyball
  `<circle cx="20" cy="20" r="18" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 2c-6 10 0 18 0 18M20 2c6 10 0 18 0 18M2 14c10 2 16 10 18 18M38 14c-10 2-16 10-18 18" fill="none" stroke="white" stroke-width="1"/>`,
  // 4 Trophy
  `<path d="M14 4h12v10c0 4-3 7-6 7s-6-3-6-7V4zM14 7H8c0 4 3 7 6 7M26 7h6c0 4-3 7-6 7M17 21v4M23 21v4M13 25h14" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 5 Whistle
  `<circle cx="28" cy="24" r="10" fill="none" stroke="white" stroke-width="1.5"/><path d="M8 14l12 6M8 14v6l12 4" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 6 Stopwatch
  `<circle cx="20" cy="22" r="14" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 8v-5M16 3h8M20 12v10h7" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 7 Medal
  `<circle cx="20" cy="26" r="10" fill="none" stroke="white" stroke-width="1.5"/><path d="M14 4l6 12 6-12M14 4h12" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 22v-2M17 24l2-1M23 24l-2-1" fill="none" stroke="white" stroke-width="1"/>`,
  // 8 Tennis racket
  `<ellipse cx="16" cy="14" rx="12" ry="13" fill="none" stroke="white" stroke-width="1.5"/><path d="M25 23l10 12M8 8h16M8 14h16M8 20h10M16 4v22" fill="none" stroke="white" stroke-width="1"/>`,
  // 9 Running figure
  `<circle cx="24" cy="6" r="4" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 12l-8 10 4 2-4 12M20 12l6 6 8-2M26 18l-2 10 6 8" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 10 Dumbbell
  `<path d="M8 16v8M32 16v8M4 18v4h4v-4zM32 18v4h4v-4zM12 19h16M12 21h16M10 17v6M30 17v6" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 11 Boxing glove
  `<path d="M10 14c0-6 4-10 10-10s10 4 10 10v6c0 4-2 6-5 7l-1 8H16l-1-8c-3-1-5-3-5-7v-6z" fill="none" stroke="white" stroke-width="1.5"/><path d="M14 16h12M10 20c4 2 12 2 16 0" fill="none" stroke="white" stroke-width="1"/>`,
  // 12 Climbing wall
  `<rect x="6" y="2" width="28" height="36" rx="2" fill="none" stroke="white" stroke-width="1.5"/><circle cx="14" cy="10" r="2.5" fill="none" stroke="white" stroke-width="1.2"/><circle cx="26" cy="16" r="2.5" fill="none" stroke="white" stroke-width="1.2"/><circle cx="16" cy="24" r="2.5" fill="none" stroke="white" stroke-width="1.2"/><circle cx="24" cy="32" r="2.5" fill="none" stroke="white" stroke-width="1.2"/>`,
  // 13 Water polo
  `<circle cx="20" cy="16" r="12" fill="none" stroke="white" stroke-width="1.5"/><path d="M8 16c4-4 8-4 12 0s8 4 12 0" fill="none" stroke="white" stroke-width="1"/><path d="M4 32c4-3 8-3 12 0s8 3 12 0s8-3 12 0" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 14 Goal net
  `<path d="M4 8h32v24H4z" fill="none" stroke="white" stroke-width="1.5"/><path d="M4 8l16 12L36 8M4 20h32M4 14h32M20 8v24M12 8v24M28 8v24" fill="none" stroke="white" stroke-width="0.8"/>`,
  // 15 Shoe/cleat
  `<path d="M6 24l2-10c1-3 4-5 8-5h4c2 0 4 1 5 3l4 6h5c2 0 3 2 3 4v2H6v0z" fill="none" stroke="white" stroke-width="1.5"/><path d="M12 14v4M16 12v6M20 13v5" fill="none" stroke="white" stroke-width="1"/>`,
  // 16 Scoreboard
  `<rect x="4" y="6" width="32" height="22" rx="2" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 6v22M4 17h32" fill="none" stroke="white" stroke-width="1"/><path d="M10 12h4M26 12h4M12 22v6M28 22v6" fill="none" stroke="white" stroke-width="1.2"/>`,
  // 17 Cycling
  `<circle cx="11" cy="26" r="8" fill="none" stroke="white" stroke-width="1.5"/><circle cx="29" cy="26" r="8" fill="none" stroke="white" stroke-width="1.5"/><path d="M11 26l7-14h6l5 14M18 12l-3 8" fill="none" stroke="white" stroke-width="1.2"/>`,
  // 18 Podium
  `<path d="M4 36h32M6 36v-10h8v10M16 36v-16h8v16M26 36v-12h8v12" fill="none" stroke="white" stroke-width="1.5"/><path d="M18 14l2-4 2 4" fill="none" stroke="white" stroke-width="1"/>`,
  // 19 Archery target
  `<circle cx="20" cy="20" r="16" fill="none" stroke="white" stroke-width="1.5"/><circle cx="20" cy="20" r="10" fill="none" stroke="white" stroke-width="1.2"/><circle cx="20" cy="20" r="4" fill="none" stroke="white" stroke-width="1"/><path d="M34 6l-14 14M34 6h-8M34 6v8" fill="none" stroke="white" stroke-width="1.2"/>`,
  // 20 Flag
  `<path d="M8 4v32M8 4h20l-5 8 5 8H8" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 21 Heart rate
  `<path d="M2 20h8l3-10 4 20 4-14 3 4h14" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 22 Racket & shuttlecock
  `<ellipse cx="14" cy="16" rx="9" ry="12" fill="none" stroke="white" stroke-width="1.5"/><path d="M21 25l8 10" fill="none" stroke="white" stroke-width="1.5"/><circle cx="32" cy="8" r="3" fill="none" stroke="white" stroke-width="1.2"/><path d="M32 11v4l-2 1M32 11v4l2 1" fill="none" stroke="white" stroke-width="1"/>`,
  // 23 Karate
  `<circle cx="20" cy="6" r="4" fill="none" stroke="white" stroke-width="1.5"/><path d="M20 10v12M20 14l-10 6M20 14l10 4M20 22l-6 14M20 22l6 14" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 24 Water drop
  `<path d="M20 4c-6 10-12 16-12 22a12 12 0 0 0 24 0c0-6-6-12-12-22z" fill="none" stroke="white" stroke-width="1.5"/><path d="M14 28c2 3 8 3 10 0" fill="none" stroke="white" stroke-width="1"/>`,
  // 25 Fencing
  `<path d="M6 20h22M28 16v8M28 20l6-4M28 20l6 4M6 18v4" fill="none" stroke="white" stroke-width="1.5"/><circle cx="10" cy="10" r="4" fill="none" stroke="white" stroke-width="1.5"/><path d="M10 14v6" fill="none" stroke="white" stroke-width="1.5"/>`,
  // 26 Ping pong
  `<ellipse cx="14" cy="18" rx="10" ry="14" fill="none" stroke="white" stroke-width="1.5"/><path d="M22 28l8 8" fill="none" stroke="white" stroke-width="2"/><circle cx="32" cy="10" r="4" fill="none" stroke="white" stroke-width="1.2"/>`,
];

/** Pre-randomised icon placements so they don't shift between renders */
const floatingItems = [
  // Top row
  { icon: 0,  x: 2,  y: 5,  size: 38, dur: 6,   delay: 0 },
  { icon: 1,  x: 16, y: 8,  size: 34, dur: 7,   delay: 1 },
  { icon: 2,  x: 32, y: 3,  size: 40, dur: 5,   delay: 0.5 },
  { icon: 3,  x: 50, y: 6,  size: 36, dur: 8,   delay: 2 },
  { icon: 4,  x: 68, y: 4,  size: 32, dur: 6,   delay: 1.5 },
  { icon: 5,  x: 82, y: 9,  size: 36, dur: 7,   delay: 0 },
  { icon: 11, x: 93, y: 6,  size: 34, dur: 6,   delay: 1 },
  // Upper-mid
  { icon: 6,  x: 4,  y: 25, size: 36, dur: 5,   delay: 2 },
  { icon: 7,  x: 22, y: 22, size: 42, dur: 8,   delay: 0 },
  { icon: 8,  x: 40, y: 28, size: 30, dur: 6,   delay: 1 },
  { icon: 9,  x: 58, y: 20, size: 38, dur: 7,   delay: 3 },
  { icon: 10, x: 74, y: 26, size: 34, dur: 5,   delay: 0.5 },
  { icon: 23, x: 90, y: 23, size: 36, dur: 7,   delay: 1.5 },
  // Middle
  { icon: 12, x: 1,  y: 45, size: 40, dur: 7,   delay: 1 },
  { icon: 13, x: 15, y: 48, size: 32, dur: 6,   delay: 0 },
  { icon: 14, x: 30, y: 42, size: 38, dur: 8,   delay: 2 },
  { icon: 15, x: 48, y: 50, size: 36, dur: 5,   delay: 1.5 },
  { icon: 16, x: 66, y: 44, size: 42, dur: 7,   delay: 0 },
  { icon: 17, x: 82, y: 48, size: 34, dur: 6,   delay: 2.5 },
  { icon: 25, x: 94, y: 44, size: 32, dur: 5,   delay: 0.5 },
  // Lower-mid
  { icon: 18, x: 3,  y: 65, size: 36, dur: 5,   delay: 0.5 },
  { icon: 19, x: 20, y: 68, size: 38, dur: 7,   delay: 1 },
  { icon: 20, x: 38, y: 62, size: 34, dur: 6,   delay: 0 },
  { icon: 21, x: 56, y: 70, size: 40, dur: 8,   delay: 2 },
  { icon: 22, x: 74, y: 64, size: 32, dur: 5,   delay: 1 },
  { icon: 26, x: 91, y: 67, size: 36, dur: 7,   delay: 0 },
  // Bottom
  { icon: 24, x: 6,  y: 85, size: 38, dur: 7,   delay: 0 },
  { icon: 0,  x: 24, y: 82, size: 34, dur: 6,   delay: 2 },
  { icon: 1,  x: 42, y: 88, size: 36, dur: 5,   delay: 1 },
  { icon: 2,  x: 60, y: 84, size: 40, dur: 8,   delay: 0.5 },
  { icon: 3,  x: 78, y: 86, size: 32, dur: 6,   delay: 1.5 },
  { icon: 4,  x: 93, y: 83, size: 34, dur: 5,   delay: 2 },
];

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Keyframes for floating animation */}
      <style>{`
        @keyframes sp-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-18px) rotate(8deg); }
          50% { transform: translateY(-8px) rotate(-5deg); }
          75% { transform: translateY(-22px) rotate(6deg); }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section
        className="relative pt-20 pb-10 overflow-hidden"
        style={{ backgroundColor: "#1a5c38" }}
        data-testid="hero-section"
      >
        {/* Animated sport icons background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingItems.map((item, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className="absolute opacity-[0.15]"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: item.size,
                height: item.size,
                animation: `sp-float ${item.dur}s ease-in-out ${item.delay}s infinite`,
              }}
              dangerouslySetInnerHTML={{ __html: sportIcons[item.icon] }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
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
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            {lang === "en"
              ? "Discover sports, find clubs near you, join coaching courses, and get your official sport license — all in one place."
              : "اكتشف الرياضات وابحث عن الأندية القريبة منك والتحق بدورات التدريب واحصل على رخصتك الرياضية الرسمية — كل ذلك في مكان واحد."}
          </p>

        </div>
      </section>

      {/* ─── 2. HOW IT WORKS ─── */}
      <HowItWorks />

    </div>
  );
}
