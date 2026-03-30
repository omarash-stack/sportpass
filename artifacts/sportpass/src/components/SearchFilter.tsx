import { Search, Filter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface FilterOption {
  value: string;
  labelEn: string;
  labelAr: string;
}

interface SearchFilterProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters?: Array<{
    id: string;
    labelEn: string;
    labelAr: string;
    options: FilterOption[];
    value: string;
    onChange: (value: string) => void;
  }>;
  placeholderEn?: string;
  placeholderAr?: string;
}

export function SearchFilter({
  searchValue,
  onSearchChange,
  filters = [],
  placeholderEn = "Search...",
  placeholderAr = "بحث...",
}: SearchFilterProps) {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search input */}
      <div className="relative flex-1">
        <Search
          size={16}
          className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
            lang === "ar" ? "right-3" : "left-3"
          }`}
        />
        <input
          type="search"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={lang === "en" ? placeholderEn : placeholderAr}
          className={`w-full h-10 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors ${
            lang === "ar" ? "pr-9 pl-4" : "pl-9 pr-4"
          }`}
          data-testid="search-input"
        />
      </div>

      {/* Filter dropdowns */}
      {filters.map((filter) => (
        <div key={filter.id} className="relative">
          <Filter
            size={14}
            className={`absolute top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none ${
              lang === "ar" ? "right-3" : "left-3"
            }`}
          />
          <select
            value={filter.value}
            onChange={(e) => filter.onChange(e.target.value)}
            className={`h-10 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors appearance-none ${
              lang === "ar" ? "pr-9 pl-8" : "pl-9 pr-8"
            }`}
            data-testid={`filter-${filter.id}`}
          >
            <option value="">
              {lang === "en" ? `All ${filter.labelEn}` : `الكل (${filter.labelAr})`}
            </option>
            {filter.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {lang === "en" ? opt.labelEn : opt.labelAr}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
