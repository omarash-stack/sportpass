import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { licenses } from "@/data/licenses";
import { sports } from "@/data/sports";
import { LicenseCard } from "@/components/LicenseCard";
import { SearchFilter } from "@/components/SearchFilter";

export default function LicensesPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [sportFilter, setSportFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filtered = licenses.filter((l) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      l.name.en.toLowerCase().includes(q) ||
      l.name.ar.includes(q) ||
      l.description.en.toLowerCase().includes(q);
    const matchesSport = !sportFilter || l.sportId === sportFilter;
    const matchesType = !typeFilter || l.type === typeFilter;
    return matchesSearch && matchesSport && matchesType;
  });

  const sportOptions = sports.map((s) => ({
    value: s.id,
    labelEn: s.name.en,
    labelAr: s.name.ar,
  }));

  const typeOptions = [
    { value: "player", labelEn: "Player", labelAr: "لاعب" },
    { value: "coach", labelEn: "Coach", labelAr: "مدرب" },
    { value: "referee", labelEn: "Referee", labelAr: "حكم" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="py-12" style={{ backgroundColor: "#c8a84b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            {lang === "en" ? "Sport Licenses" : "التراخيص الرياضية"}
          </h1>
          <p className="text-white/80">
            {lang === "en"
              ? "Get your official license to compete, coach, or referee"
              : "احصل على رخصتك الرسمية للمنافسة أو التدريب أو التحكيم"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="mb-8">
          <SearchFilter
            searchValue={search}
            onSearchChange={setSearch}
            placeholderEn="Search licenses..."
            placeholderAr="ابحث عن رخصة..."
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
                id: "type",
                labelEn: "Types",
                labelAr: "النوع",
                options: typeOptions,
                value: typeFilter,
                onChange: setTypeFilter,
              },
            ]}
          />
        </div>

        {/* Results count */}
        <p className="text-gray-400 text-sm mb-6">
          {lang === "en"
            ? `${filtered.length} license${filtered.length !== 1 ? "s" : ""} available`
            : `${filtered.length} رخصة متاحة`}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            {lang === "en" ? "No licenses found." : "لم يتم العثور على تراخيص."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((license) => (
              <LicenseCard key={license.id} license={license} showSport />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
