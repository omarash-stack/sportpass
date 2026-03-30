import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getSportById } from "@/data/sports";
import { getClubsBySport } from "@/data/clubs";
import { getCoursesBySport } from "@/data/courses";
import { getLicensesBySport } from "@/data/licenses";
import { ClubCard } from "@/components/ClubCard";
import { CourseCard } from "@/components/CourseCard";
import { LicenseCard } from "@/components/LicenseCard";

type Tab = "clubs" | "courses" | "licenses";

export default function SportDetail() {
  const { lang } = useLanguage();
  const { id = "" } = useParams<{ id: string }>();
  const sport = getSportById(id);
  const [activeTab, setActiveTab] = useState<Tab>("clubs");

  if (!sport) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            {lang === "en" ? "Sport not found." : "الرياضة غير موجودة."}
          </p>
          <Link to="/sports">
            <button className="px-4 py-2 bg-[#1a5c38] text-white rounded-lg text-sm">
              {lang === "en" ? "Back to Sports" : "العودة إلى الرياضات"}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const clubs = getClubsBySport(sport.id);
  const courses = getCoursesBySport(sport.id);
  const licenses = getLicensesBySport(sport.id);

  const tabs = [
    { id: "clubs" as Tab, labelEn: `Clubs (${clubs.length})`, labelAr: `الأندية (${clubs.length})` },
    { id: "courses" as Tab, labelEn: `Courses (${courses.length})`, labelAr: `الدورات (${courses.length})` },
    { id: "licenses" as Tab, labelEn: `Licenses (${licenses.length})`, labelAr: `التراخيص (${licenses.length})` },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div
        className="py-14"
        style={{ backgroundColor: sport.color }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/sports">
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={16} className={lang === "ar" ? "rotate-180" : ""} />
              {lang === "en" ? "All Sports" : "جميع الرياضات"}
            </button>
          </Link>
          <div className="flex items-center gap-6">
            <div className="text-7xl">{sport.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {lang === "en" ? sport.name.en : sport.name.ar}
              </h1>
              <p className="text-white/70 text-base mt-0.5">
                {lang === "en" ? sport.name.ar : sport.name.en}
              </p>
              <p className="text-white/80 mt-3 max-w-2xl text-sm leading-relaxed">
                {lang === "en" ? sport.description.en : sport.description.ar}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#1a5c38] text-[#1a5c38]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                data-testid={`tab-${tab.id}`}
              >
                {lang === "en" ? tab.labelEn : tab.labelAr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === "clubs" && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {lang === "en" ? `Clubs for ${sport.name.en}` : `أندية ${sport.name.ar}`}
            </h2>
            {clubs.length === 0 ? (
              <p className="text-gray-400">
                {lang === "en" ? "No clubs available yet." : "لا توجد أندية متاحة بعد."}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {clubs.map((club) => (
                  <ClubCard key={club.id} club={club} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "courses" && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {lang === "en"
                ? `Courses for ${sport.name.en}`
                : `دورات ${sport.name.ar}`}
            </h2>
            {courses.length === 0 ? (
              <p className="text-gray-400">
                {lang === "en" ? "No courses available yet." : "لا توجد دورات متاحة بعد."}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "licenses" && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {lang === "en"
                ? `Licenses for ${sport.name.en}`
                : `تراخيص ${sport.name.ar}`}
            </h2>
            {licenses.length === 0 ? (
              <p className="text-gray-400">
                {lang === "en" ? "No licenses available yet." : "لا توجد تراخيص متاحة بعد."}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {licenses.map((license) => (
                  <LicenseCard key={license.id} license={license} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
