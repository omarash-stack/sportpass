import { useNavigate } from "react-router-dom";
import { CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";

interface License {
  id: string;
  sportId: string;
  name: { en: string; ar: string };
  type: string;
  typeLabel: { en: string; ar: string };
  price: number;
  currency: string;
  validityLabel: { en: string; ar: string };
  description: { en: string; ar: string };
  requirements: { en: string[]; ar: string[] };
  benefits: { en: string[]; ar: string[] };
}

interface LicenseCardProps {
  license: License;
  showSport?: boolean;
}

const typeColors: Record<string, string> = {
  player: "bg-blue-100 text-blue-700",
  coach: "bg-purple-100 text-purple-700",
  referee: "bg-amber-100 text-amber-700",
};

export function LicenseCard({ license, showSport = false }: LicenseCardProps) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const sport = sports.find((s) => s.id === license.sportId);

  return (
    <div
      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#1a5c38]/40 hover:shadow-md transition-all duration-200"
      data-testid={`license-card-${license.id}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          {showSport && sport && (
            <span
              className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 text-white"
              style={{ backgroundColor: sport.color }}
            >
              {sport.icon} {lang === "en" ? sport.name.en : sport.name.ar}
            </span>
          )}
          <span
            className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
              typeColors[license.type] || "bg-gray-100 text-gray-600"
            }`}
          >
            {lang === "en" ? license.typeLabel.en : license.typeLabel.ar}
          </span>
        </div>
        <div className="text-right flex-shrink-0 ms-3">
          <div className="text-[#1a5c38] font-bold text-xl">{license.price}</div>
          <div className="text-gray-400 text-xs">{license.currency}</div>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
        {lang === "en" ? license.name.en : license.name.ar}
      </h3>

      {/* Validity */}
      <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
        <Clock size={11} />
        <span>
          {lang === "en"
            ? `Valid for ${license.validityLabel.en}`
            : `صالحة لمدة ${license.validityLabel.ar}`}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
        {lang === "en" ? license.description.en : license.description.ar}
      </p>

      {/* Benefits */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-700 mb-2">
          {lang === "en" ? "Includes:" : "يشمل:"}
        </p>
        <ul className="space-y-1">
          {(lang === "en" ? license.benefits.en : license.benefits.ar)
            .slice(0, 3)
            .map((benefit, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-gray-500">
                <CheckCircle2 size={12} className="text-[#1a5c38] mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Gold accent line */}
      <div className="w-full h-0.5 bg-[#c8a84b]/30 rounded-full mb-4" />

      {/* CTA */}
      <button
        onClick={() => navigate(`/licenses/${license.id}`)}
        className="w-full py-2 rounded-lg bg-[#c8a84b] text-white text-xs font-semibold hover:bg-[#b8963d] transition-colors cursor-pointer"
        data-testid={`license-purchase-${license.id}`}
      >
        {lang === "en" ? "Get License" : "احصل على الرخصة"}
      </button>
    </div>
  );
}
