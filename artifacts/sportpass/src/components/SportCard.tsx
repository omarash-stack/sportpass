import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface Sport {
  id: string;
  icon: string;
  color: string;
  name: { en: string; ar: string };
  shortDescription: { en: string; ar: string };
}

interface SportCardProps {
  sport: Sport;
}

export function SportCard({ sport }: SportCardProps) {
  const { lang } = useLanguage();

  return (
    <Link href={`/sports/${sport.id}`}>
      <div
        className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#1a5c38]/40 hover:shadow-md transition-all duration-200 cursor-pointer"
        data-testid={`sport-card-${sport.id}`}
      >
        {/* Color accent bar */}
        <div
          className="w-full h-1.5 rounded-full mb-5 opacity-80"
          style={{ backgroundColor: sport.color }}
        />

        {/* Icon */}
        <div className="text-4xl mb-4">{sport.icon}</div>

        {/* Name */}
        <h3 className="font-bold text-gray-900 text-base mb-1.5">
          {lang === "en" ? sport.name.en : sport.name.ar}
        </h3>
        {lang === "en" && (
          <p className="text-xs text-gray-400 mb-2 font-medium">{sport.name.ar}</p>
        )}
        {lang === "ar" && (
          <p className="text-xs text-gray-400 mb-2 font-medium">{sport.name.en}</p>
        )}

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {lang === "en" ? sport.shortDescription.en : sport.shortDescription.ar}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-1 text-sm font-medium transition-colors"
          style={{ color: sport.color }}
        >
          <span>{lang === "en" ? "Explore" : "استكشف"}</span>
          <ArrowRight
            size={14}
            className={`transition-transform group-hover:translate-x-1 ${lang === "ar" ? "rotate-180" : ""}`}
          />
        </div>
      </div>
    </Link>
  );
}
