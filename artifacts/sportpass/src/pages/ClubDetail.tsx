import { Link, useParams } from "wouter";
import { ArrowLeft, MapPin, Phone, Mail, Globe, Users, Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getClubById } from "@/data/clubs";
import { getSportById } from "@/data/sports";

export default function ClubDetail() {
  const { lang } = useLanguage();
  const params = useParams<{ id: string }>();
  const club = getClubById(params.id);
  const sport = club ? getSportById(club.sportId) : null;

  if (!club) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            {lang === "en" ? "Club not found." : "النادي غير موجود."}
          </p>
          <Link href="/sports">
            <button className="px-4 py-2 bg-[#1a5c38] text-white rounded-lg text-sm">
              {lang === "en" ? "Browse Sports" : "تصفح الرياضات"}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#1a5c38] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/sports/${club.sportId}`}>
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={16} className={lang === "ar" ? "rotate-180" : ""} />
              {lang === "en"
                ? `${sport?.name.en || ""} Clubs`
                : `أندية ${sport?.name.ar || ""}`}
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <img
              src={club.logo}
              alt={lang === "en" ? club.name.en : club.name.ar}
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">
                {lang === "en" ? club.name.en : club.name.ar}
              </h1>
              <div className="flex items-center gap-1.5 text-white/70 text-sm mt-1.5">
                <MapPin size={13} />
                <span>
                  {lang === "en" ? club.city.en : club.city.ar},{" "}
                  {lang === "en" ? club.region.en : club.region.ar}
                </span>
              </div>
              {sport && (
                <span
                  className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full text-white border border-white/30"
                >
                  {sport.icon} {lang === "en" ? sport.name.en : sport.name.ar}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main info */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">
                {lang === "en" ? "About the Club" : "عن النادي"}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {lang === "en" ? club.description.en : club.description.ar}
              </p>
            </div>

            {/* How to Join */}
            <div className="bg-[#f5f5f5] rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-4">
                {lang === "en" ? "How to Join" : "كيفية الانضمام"}
              </h2>
              <ol className="space-y-3">
                {[
                  {
                    en: "Contact the club via phone or email to express your interest",
                    ar: "تواصل مع النادي عبر الهاتف أو البريد الإلكتروني للتعبير عن اهتمامك",
                  },
                  {
                    en: "Attend a free trial session to meet the team",
                    ar: "احضر جلسة تجريبية مجانية للالتقاء بالفريق",
                  },
                  {
                    en: "Complete the membership registration form",
                    ar: "أكمل استمارة تسجيل العضوية",
                  },
                  {
                    en: "Submit your official Sport License (if required)",
                    ar: "قدّم رخصتك الرياضية الرسمية (إذا لزم)",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1a5c38] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {lang === "en" ? step.en : step.ar}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Stats */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Users size={16} className="text-[#1a5c38]" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{club.memberCount}</div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Members" : "أعضاء"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-[#1a5c38]" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{club.founded}</div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Founded" : "تأسس"}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-4">
                {lang === "en" ? "Contact" : "تواصل"}
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${club.phone}`}
                  className="flex items-center gap-2.5 text-gray-500 text-xs hover:text-[#1a5c38] transition-colors"
                >
                  <Phone size={13} className="text-[#1a5c38]" />
                  {club.phone}
                </a>
                <a
                  href={`mailto:${club.email}`}
                  className="flex items-center gap-2.5 text-gray-500 text-xs hover:text-[#1a5c38] transition-colors"
                >
                  <Mail size={13} className="text-[#1a5c38]" />
                  {club.email}
                </a>
                <a
                  href={`https://${club.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-500 text-xs hover:text-[#1a5c38] transition-colors"
                >
                  <Globe size={13} className="text-[#1a5c38]" />
                  {club.website}
                </a>
                <div className="flex items-start gap-2.5 text-gray-500 text-xs">
                  <MapPin size={13} className="text-[#1a5c38] mt-0.5 flex-shrink-0" />
                  {lang === "en" ? club.address.en : club.address.ar}
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              className="w-full py-3 bg-[#1a5c38] text-white rounded-lg text-sm font-semibold hover:bg-[#15492c] transition-colors"
              data-testid="club-join-btn"
            >
              {lang === "en" ? "Contact to Join" : "تواصل للانضمام"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
