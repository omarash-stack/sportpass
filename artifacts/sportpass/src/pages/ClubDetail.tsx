import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Globe, Users, Calendar, Newspaper } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { getClubById } from "@/data/clubs";
import { sports } from "@/data/sports";

const newsItems = [
  {
    date: "2026-03-28",
    en: "New training schedule starts next week — evening sessions added on Sundays and Tuesdays.",
    ar: "يبدأ جدول التدريب الجديد الأسبوع القادم — تمت إضافة جلسات مسائية يومي الأحد والثلاثاء.",
  },
  {
    date: "2026-03-20",
    en: "Registration is now open for the upcoming regional tournament in April.",
    ar: "التسجيل مفتوح الآن لبطولة المنطقة القادمة في أبريل.",
  },
  {
    date: "2026-03-10",
    en: "Welcome to our 15 new members who joined this month!",
    ar: "نرحب بأعضائنا الـ 15 الجدد الذين انضموا هذا الشهر!",
  },
];

export default function ClubDetail() {
  const { lang } = useLanguage();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id: string }>();
  const club = getClubById(id);
  const clubSports = club ? club.sportIds.map((sid) => sports.find((s) => s.id === sid)).filter(Boolean) : [];
  const primarySport = clubSports[0] || null;

  if (!club) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            {lang === "en" ? "Club not found." : "النادي غير موجود."}
          </p>
          <Link to="/sports">
            <button className="px-4 py-2 bg-[#1a5c38] text-white rounded-lg text-sm">
              {lang === "en" ? "Browse Sports" : "تصفح الرياضات"}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRequestJoin = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-12" style={{ backgroundColor: primarySport?.color || "#1a5c38" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/sports/${club.sportIds[0]}?tab=clubs`}>
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors cursor-pointer">
              <ArrowLeft size={16} className={lang === "ar" ? "rotate-180" : ""} />
              {lang === "en" ? "Back" : "رجوع"}
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <img
              src={club.logo}
              alt={lang === "en" ? club.name.en : club.name.ar}
              className="w-20 h-20 rounded-xl object-cover flex-shrink-0 ring-2 ring-white/30"
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
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                {clubSports.map((s) => (
                  <span
                    key={s!.id}
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full text-white border border-white/30"
                  >
                    {s!.icon} {lang === "en" ? s!.name.en : s!.name.ar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main info */}
          <div className="md:col-span-2 space-y-6">
            {/* About + Request to Join */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-bold text-gray-900">
                  {lang === "en" ? "About the Club" : "عن النادي"}
                </h2>
                <button
                  onClick={handleRequestJoin}
                  className="shrink-0 px-5 py-2 bg-[#1a5c38] text-white rounded-lg text-sm font-semibold hover:bg-[#15492c] transition-colors cursor-pointer"
                  data-testid="club-join-btn"
                >
                  {lang === "en" ? "Request to Join" : "طلب الانضمام"}
                </button>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {lang === "en" ? club.description.en : club.description.ar}
              </p>
            </div>

            {/* Latest News */}
            <div className="bg-[#f5f5f5] rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Newspaper size={18} className="text-[#1a5c38]" />
                <h2 className="font-bold text-gray-900">
                  {lang === "en" ? "Latest News" : "آخر الأخبار"}
                </h2>
              </div>
              <div className="space-y-4">
                {newsItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1a5c38] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {lang === "en" ? item.en : item.ar}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
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

                {/* Google Maps */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(club.address.en + ", Saudi Arabia")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-3 rounded-lg overflow-hidden border border-gray-200 hover:border-[#1a5c38]/40 transition-colors"
                >
                  <iframe
                    title={`Map — ${club.name.en}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(club.address.en + ", Saudi Arabia")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-36 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
