import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { courses } from "@/data/courses";
import { sports } from "@/data/sports";
import { CourseCard } from "@/components/CourseCard";
import { SearchFilter } from "@/components/SearchFilter";

export default function CoursesPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  const filtered = courses.filter((c) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      c.name.en.toLowerCase().includes(q) ||
      c.name.ar.includes(q) ||
      c.provider.en.toLowerCase().includes(q) ||
      c.provider.ar.includes(q);
    const matchesSport = !sportFilter || c.sportId === sportFilter;
    const matchesLevel = !levelFilter || c.level === levelFilter;
    return matchesSearch && matchesSport && matchesLevel;
  });

  const sportOptions = sports.map((s) => ({
    value: s.id,
    labelEn: s.name.en,
    labelAr: s.name.ar,
  }));

  const levelOptions = [
    { value: "beginner", labelEn: "Beginner", labelAr: "مبتدئ" },
    { value: "intermediate", labelEn: "Intermediate", labelAr: "متوسط" },
    { value: "advanced", labelEn: "Advanced", labelAr: "متقدم" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-[#1a5c38] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            {lang === "en" ? "Coaching Courses" : "الدورات التدريبية"}
          </h1>
          <p className="text-white/70">
            {lang === "en"
              ? "Develop your skills with certified coaching programs"
              : "طور مهاراتك مع برامج التدريب المعتمدة"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="mb-8">
          <SearchFilter
            searchValue={search}
            onSearchChange={setSearch}
            placeholderEn="Search courses..."
            placeholderAr="ابحث عن دورة..."
            filters={[
              {
                id: "sport",
                labelEn: "Sports",
                labelAr: "الرياضة",
                options: sportOptions,
                value: sportFilter,
                onChange: setSportFilter,
              },
              {
                id: "level",
                labelEn: "Levels",
                labelAr: "المستوى",
                options: levelOptions,
                value: levelFilter,
                onChange: setLevelFilter,
              },
            ]}
          />
        </div>

        {/* Results count */}
        <p className="text-gray-400 text-sm mb-6">
          {lang === "en"
            ? `${filtered.length} course${filtered.length !== 1 ? "s" : ""} found`
            : `تم العثور على ${filtered.length} دورة`}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            {lang === "en" ? "No courses found." : "لم يتم العثور على دورات."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} showSport />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
