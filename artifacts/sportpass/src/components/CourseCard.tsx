import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";
import { getLicenseRequiringCourse } from "@/data/licenses";

interface Course {
  id: string;
  sportId: string;
  name: { en: string; ar: string };
  level: string;
  levelLabel: { en: string; ar: string };
  duration: { en: string; ar: string };
  price: number;
  currency: string;
  provider: { en: string; ar: string };
  nextDate: string;
  location: { en: string; ar: string };
  description: { en: string; ar: string };
  maxParticipants: number;
}

interface CourseCardProps {
  course: Course;
  showSport?: boolean;
}

const levelColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-red-100 text-red-700",
};

export function CourseCard({ course, showSport = false }: CourseCardProps) {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const sport = sports.find((s) => s.id === course.sportId);
  const qualifiesFor = getLicenseRequiringCourse(course.id);

  const formattedDate = new Date(course.nextDate).toLocaleDateString(
    lang === "ar" ? "ar-SA" : "en-US",
    { day: "numeric", month: "short", year: "numeric" }
  );

  return (
    <div
      className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#1a5c38]/40 hover:shadow-md transition-all duration-200"
      data-testid={`course-card-${course.id}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          {/* Sport badge */}
          {showSport && sport && (
            <span
              className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 text-white"
              style={{ backgroundColor: sport.color }}
            >
              {sport.icon} {lang === "en" ? sport.name.en : sport.name.ar}
            </span>
          )}
          {/* Level badge */}
          <span
            className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
              levelColors[course.level] || "bg-gray-100 text-gray-600"
            }`}
          >
            {lang === "en" ? course.levelLabel.en : course.levelLabel.ar}
          </span>
        </div>
        {/* Price */}
        <div className="text-right flex-shrink-0 ms-3">
          <span className="text-[#1a5c38] font-bold text-lg">{course.price}</span>
          <span className="text-gray-400 text-xs ms-1">{course.currency}</span>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2">
        {lang === "en" ? course.name.en : course.name.ar}
      </h3>

      {/* Provider */}
      <p className="text-gray-400 text-xs mb-3">
        {lang === "en" ? course.provider.en : course.provider.ar}
      </p>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">
        {lang === "en" ? course.description.en : course.description.ar}
      </p>

      {/* Meta */}
      <div className="space-y-1.5 mb-4">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Calendar size={11} />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Clock size={11} />
          <span>{lang === "en" ? course.duration.en : course.duration.ar}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <MapPin size={11} />
          <span>{lang === "en" ? course.location.en : course.location.ar}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Users size={11} />
          <span>
            {lang === "en"
              ? `Max ${course.maxParticipants} participants`
              : `الحد الأقصى ${course.maxParticipants} مشاركين`}
          </span>
        </div>
      </div>

      {/* Qualifies for badge */}
      {qualifiesFor && (
        <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg bg-[#c8a84b]/10 border border-[#c8a84b]/20">
          <Award size={12} className="text-[#c8a84b] flex-shrink-0" />
          <span className="text-[10px] font-medium text-[#c8a84b]">
            {lang === "en" ? "Qualifies for:" : "يؤهل لـ:"}{" "}
            <span className="text-gray-700">
              {lang === "en" ? qualifiesFor.name.en : qualifiesFor.name.ar}
            </span>
          </span>
        </div>
      )}

      {/* CTA */}
      <button
        onClick={() => navigate(`/courses/${course.id}`)}
        className="w-full py-2 rounded-lg bg-[#1a5c38] text-white text-xs font-semibold hover:bg-[#15492c] transition-colors cursor-pointer"
        data-testid={`course-register-${course.id}`}
      >
        {lang === "en" ? "Register Now" : "سجّل الآن"}
      </button>
    </div>
  );
}
