import { useState, useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, MapPin, GraduationCap, Award, FileCheck, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { getSportById } from "@/data/sports";
import { getClubsBySport } from "@/data/clubs";
import { getCoursesBySport, getCourseById } from "@/data/courses";
import { getLicensesBySport, getLicenseById, getPathways } from "@/data/licenses";
import type { Pathway } from "@/data/licenses";
import { ClubCard } from "@/components/ClubCard";
import { CourseCard } from "@/components/CourseCard";
import { LicenseCard } from "@/components/LicenseCard";

type Section = "clubs" | "courses" | "licenses" | null;

export default function SportDetail() {
  const { lang } = useLanguage();
  const { id = "" } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const sport = getSportById(id);

  const tabParam = searchParams.get("tab") as Section;
  const activeSection: Section = tabParam === "clubs" || tabParam === "courses" || tabParam === "licenses" ? tabParam : null;
  const [cityFilter, setCityFilter] = useState("all");
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const allPathways = getPathways();

  const setActiveSection = (section: Section) => {
    if (section) {
      setSearchParams({ tab: section }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

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

  // Extract unique cities for each section
  const clubCities = useMemo(() => {
    const cities = new Map<string, string>();
    clubs.forEach((c) => cities.set(c.city.en, c.city.ar));
    return Array.from(cities.entries()).map(([en, ar]) => ({ en, ar }));
  }, [clubs]);

  const courseCities = useMemo(() => {
    const cities = new Map<string, string>();
    courses.forEach((c) => cities.set(c.location.en, c.location.ar));
    return Array.from(cities.entries()).map(([en, ar]) => ({ en, ar }));
  }, [courses]);

  // Filter items by city
  const filteredClubs = cityFilter === "all"
    ? clubs
    : clubs.filter((c) => c.city.en === cityFilter);

  const filteredCourses = cityFilter === "all"
    ? courses
    : cityFilter === "Online"
      ? courses.filter((c) => c.location.en.toLowerCase() === "online")
      : courses.filter((c) => c.location.en === cityFilter);

  // Reset city filter when switching sections
  const handleSectionClick = (section: Section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
      setCityFilter("all");
      setSelectedPathway(null);
    }
  };

  // Get cities for current active section
  const activeCities = activeSection === "clubs" ? clubCities
    : activeSection === "courses" ? courseCities
    : [];

  const showOnlineOption = activeSection === "courses";

  const cards = [
    {
      id: "clubs" as Section,
      icon: MapPin,
      count: clubs.length,
      label: { en: "Clubs", ar: "الأندية" },
      description: {
        en: "Join local clubs and train with a community",
        ar: "انضم إلى أندية محلية وتدرب مع مجتمع رياضي",
      },
    },
    {
      id: "courses" as Section,
      icon: GraduationCap,
      count: courses.length,
      label: { en: "Courses", ar: "الدورات" },
      description: {
        en: "Learn skills through guided training programs",
        ar: "تعلّم المهارات من خلال برامج تدريبية موجّهة",
      },
    },
    {
      id: "licenses" as Section,
      icon: Award,
      count: licenses.length,
      label: { en: "Licenses", ar: "التراخيص" },
      description: {
        en: "Earn official certifications to coach, referee, or compete",
        ar: "احصل على شهادات رسمية للتدريب أو التحكيم أو المنافسة",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-14" style={{ backgroundColor: sport.color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/sports">
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors cursor-pointer">
              <ArrowLeft size={16} className={lang === "ar" ? "rotate-180" : ""} />
              {lang === "en" ? "Back" : "رجوع"}
            </button>
          </Link>
          <div className="flex items-center gap-6">
            <div className="text-7xl">{sport.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {lang === "en" ? sport.name.en : sport.name.ar}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Three cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isActive = activeSection === card.id;
            return (
              <button
                key={card.id}
                onClick={() => handleSectionClick(card.id)}
                className={`text-left rounded-xl p-6 border-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-white shadow-md"
                    : "border-gray-100 bg-white hover:border-[#1a5c38]/30 hover:shadow-md shadow-sm"
                }`}
                style={isActive ? { backgroundColor: sport.color, borderColor: sport.color } : undefined}
                data-testid={`card-${card.id}`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isActive ? "bg-white/20" : ""
                  }`}
                  style={!isActive ? { backgroundColor: `${sport.color}15` } : undefined}
                >
                  <Icon size={24} className={isActive ? "text-white" : ""} style={!isActive ? { color: sport.color } : undefined} />
                </div>
                <h3 className={`text-lg font-bold ${isActive ? "text-white" : "text-gray-900"}`}>
                  {lang === "en" ? card.label.en : card.label.ar}
                </h3>
                <div className={`mt-3 text-2xl font-bold ${isActive ? "text-white" : ""}`} style={!isActive ? { color: sport.color } : undefined}>
                  {card.count}
                  <span className={`text-sm font-normal ml-1.5 ${isActive ? "text-white/70" : "text-gray-400"}`}>
                    {lang === "en" ? "available" : "متاح"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clubs / Courses content with city filter */}
        {(activeSection === "clubs" || activeSection === "courses") && (
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-6 flex-wrap">
                <button
                  onClick={() => setCityFilter("all")}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    cityFilter === "all"
                      ? "bg-[#1a5c38] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {lang === "en" ? "All" : "الكل"}
                </button>
                {activeCities
                  .filter((c) => c.en.toLowerCase() !== "online" && c.en !== "Multiple Cities")
                  .map((city) => (
                    <button
                      key={city.en}
                      onClick={() => setCityFilter(city.en)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        cityFilter === city.en
                          ? "bg-[#1a5c38] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {lang === "en" ? city.en : city.ar}
                    </button>
                  ))}
                {showOnlineOption && (
                  <button
                    onClick={() => setCityFilter("Online")}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      cityFilter === "Online"
                        ? "bg-[#1a5c38] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {lang === "en" ? "Online" : "عبر الإنترنت"}
                  </button>
                )}
            </div>

            {activeSection === "clubs" && (
              <div>
                {filteredClubs.length === 0 ? (
                  <p className="text-gray-400 text-center py-10">
                    {lang === "en" ? "No clubs found in this city." : "لا توجد أندية في هذه المدينة."}
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredClubs.map((club) => (
                      <ClubCard key={club.id} club={club} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeSection === "courses" && (
              <div>
                {filteredCourses.length === 0 ? (
                  <p className="text-gray-400 text-center py-10">
                    {lang === "en" ? "No courses found for this filter." : "لا توجد دورات لهذا الفلتر."}
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Licenses content — pathway cards */}
        {activeSection === "licenses" && (
          <div className="mt-10 space-y-4">
            {allPathways.map((pw) => {
              const isExpanded = selectedPathway === pw.id;
              return (
                <div key={pw.id} className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* Pathway card header */}
                  <button
                    onClick={() => setSelectedPathway(isExpanded ? null : pw.id)}
                    className="w-full text-left p-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#c8a84b]/10 flex items-center justify-center">
                        <FileCheck size={22} className="text-[#c8a84b]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base">
                          {lang === "en" ? pw.name.en : pw.name.ar}
                        </h3>
                        <p className="text-gray-400 text-sm mt-0.5">
                          {lang === "en" ? pw.description.en : pw.description.ar}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-medium text-[#c8a84b] bg-[#c8a84b]/10 px-2.5 py-1 rounded-full">
                        {pw.steps.length} {lang === "en" ? "steps" : "خطوات"}
                      </span>
                      <svg
                        width="20" height="20" viewBox="0 0 20 20"
                        className={`text-gray-400 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      >
                        <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>

                  {/* Expanded pathway steps */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 bg-[#fafafa] p-6 pathway-content">
                      <div className="space-y-0">
                        {pw.steps.map((step, i) => {
                          const isCourse = step.type === "course";
                          const item = isCourse ? getCourseById(step.id) : getLicenseById(step.id);
                          if (!item) return null;
                          return (
                            <div key={`${step.type}-${step.id}`} className="pathway-step" style={{ animationDelay: `${i * 150 + 100}ms` }}>
                              {i > 0 && (
                                <div className="flex items-center justify-center py-2">
                                  <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-6 bg-[#c8a84b]/40" />
                                    <div className="w-6 h-6 rounded-full bg-[#c8a84b]/10 flex items-center justify-center">
                                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#c8a84b]">
                                        <path d="M6 2v8M3 7l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </div>
                                    <div className="w-0.5 h-6 bg-[#c8a84b]/40" />
                                  </div>
                                </div>
                              )}
                              <div className="relative">
                                <div
                                  className={`absolute -left-2 top-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white z-10 ${isCourse ? "bg-blue-500" : ""}`}
                                  style={!isCourse ? { backgroundColor: sport.color } : undefined}
                                >
                                  {i + 1}
                                </div>
                                <div className="ml-10">
                                  {isCourse ? (
                                    <Link to={`/courses/${step.id}`} className="block">
                                      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 hover:border-blue-400 transition-colors">
                                        <div className="flex items-center gap-2 mb-1">
                                          <BookOpen size={14} className="text-blue-500" />
                                          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
                                            {lang === "en" ? "Course" : "دورة"}
                                          </span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-sm">
                                          {lang === "en" ? (item as any).name.en : (item as any).name.ar}
                                        </h4>
                                        <p className="text-gray-400 text-xs mt-1">
                                          {lang === "en" ? (item as any).duration.en : (item as any).duration.ar} · {(item as any).price} {(item as any).currency}
                                        </p>
                                      </div>
                                    </Link>
                                  ) : (
                                    <LicenseCard license={item as any} />
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        )}
      </div>
    </div>
  );
}
