import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";
import { SportCard } from "@/components/SportCard";
import { SearchFilter } from "@/components/SearchFilter";

export default function SportsPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");

  const filtered = sports.filter((s) => {
    const q = search.toLowerCase();
    return (
      s.name.en.toLowerCase().includes(q) ||
      s.name.ar.includes(q) ||
      s.description.en.toLowerCase().includes(q) ||
      s.description.ar.includes(q)
    );
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-[#1a5c38] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            {lang === "en" ? "All Sports" : "جميع الرياضات"}
          </h1>
          <p className="text-white/70">
            {lang === "en"
              ? "Discover the 5 sports available through SportPass"
              : "اكتشف الرياضات الـ 5 المتاحة عبر سبورت باس"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search */}
        <div className="mb-8">
          <SearchFilter
            searchValue={search}
            onSearchChange={setSearch}
            placeholderEn="Search sports..."
            placeholderAr="ابحث عن رياضة..."
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            {lang === "en" ? "No sports found." : "لم يتم العثور على رياضات."}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
