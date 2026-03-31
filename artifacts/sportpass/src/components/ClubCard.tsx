import { Link } from "react-router-dom";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";

interface Club {
  id: string;
  sportIds: string[];
  name: { en: string; ar: string };
  city: { en: string; ar: string };
  region: { en: string; ar: string };
  memberCount: number;
  description: { en: string; ar: string };
  logo: string;
  founded: number;
}

interface ClubCardProps {
  club: Club;
}

export function ClubCard({ club }: ClubCardProps) {
  const { lang } = useLanguage();
  const clubSports = club.sportIds.map((id) => sports.find((s) => s.id === id)).filter(Boolean);

  return (
    <Link to={`/clubs/${club.id}`}>
      <div
        className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#1a5c38]/40 hover:shadow-md transition-all duration-200 cursor-pointer h-full flex flex-col"
        data-testid={`club-card-${club.id}`}
      >
        <div className="flex items-start gap-4">
          {/* Logo */}
          <img
            src={club.logo}
            alt={lang === "en" ? club.name.en : club.name.ar}
            className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            {/* Name */}
            <h3 className="font-bold text-gray-900 text-sm leading-tight">
              {lang === "en" ? club.name.en : club.name.ar}
            </h3>
            {/* Location */}
            <div className="flex items-center gap-1 mt-1.5 text-gray-400 text-xs">
              <MapPin size={11} />
              <span>
                {lang === "en" ? club.city.en : club.city.ar},{" "}
                {lang === "en" ? club.region.en : club.region.ar}
              </span>
            </div>
          </div>
        </div>

        {/* Sports */}
        <div className="flex items-center gap-1.5 flex-wrap mt-3">
          {clubSports.map((sport) => (
            <span
              key={sport!.id}
              className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: sport!.color }}
            >
              {sport!.icon} {lang === "en" ? sport!.name.en : sport!.name.ar}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <Users size={11} />
            <span>
              {club.memberCount} {lang === "en" ? "members" : "عضو"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#1a5c38] text-xs font-medium group-hover:gap-1.5 transition-all">
            <span>{lang === "en" ? "View Club" : "عرض النادي"}</span>
            <ArrowRight size={12} className={lang === "ar" ? "rotate-180" : ""} />
          </div>
        </div>
      </div>
    </Link>
  );
}
