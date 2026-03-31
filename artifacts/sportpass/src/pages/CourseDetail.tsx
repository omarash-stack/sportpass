import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { getCourseById } from "@/data/courses";
import { getSportById } from "@/data/sports";
import { getLicenseRequiringCourse } from "@/data/licenses";

const levelColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-red-100 text-red-700",
};

export default function CourseDetail() {
  const { lang } = useLanguage();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id: string }>();
  const course = getCourseById(id);
  const sport = course ? getSportById(course.sportId) : null;

  if (!course) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            {lang === "en" ? "Course not found." : "الدورة غير موجودة."}
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

  const formattedDate = new Date(course.nextDate).toLocaleDateString(
    lang === "ar" ? "ar-SA" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const handleRegister = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-12" style={{ backgroundColor: sport?.color || "#1a5c38" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/sports/${course.sportId}?tab=courses`}>
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors cursor-pointer">
              <ArrowLeft size={16} className={lang === "ar" ? "rotate-180" : ""} />
              {lang === "en" ? "Back" : "رجوع"}
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <BookOpen size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {lang === "en" ? course.name.en : course.name.ar}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                {sport && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full text-white border border-white/30">
                    {sport.icon} {lang === "en" ? sport.name.en : sport.name.ar}
                  </span>
                )}
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColors[course.level] || "bg-gray-100 text-gray-600"}`}>
                  {lang === "en" ? course.levelLabel.en : course.levelLabel.ar}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main info */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-3">
                {lang === "en" ? "About This Course" : "عن الدورة"}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {lang === "en" ? course.description.en : course.description.ar}
              </p>
              {(() => {
                const qualifiesFor = getLicenseRequiringCourse(course.id);
                if (!qualifiesFor) return null;
                return (
                  <Link to={`/licenses/${qualifiesFor.id}`} className="flex items-center gap-2 mt-4 px-3 py-2.5 rounded-lg bg-[#c8a84b]/10 border border-[#c8a84b]/20 hover:border-[#c8a84b]/40 transition-colors">
                    <Award size={16} className="text-[#c8a84b] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#c8a84b]">
                      {lang === "en" ? "Qualifies for:" : "يؤهل لـ:"}{" "}
                      <span className="text-gray-700 font-semibold">
                        {lang === "en" ? qualifiesFor.name.en : qualifiesFor.name.ar}
                      </span>
                    </span>
                  </Link>
                );
              })()}
            </div>

            {/* What You'll Learn */}
            <div className="bg-[#f5f5f5] rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-4">
                {lang === "en" ? "What You'll Learn" : "ماذا ستتعلم"}
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    en: "Core fundamentals and proper technique",
                    ar: "الأساسيات الجوهرية والتقنية الصحيحة",
                  },
                  {
                    en: "Safety protocols and best practices",
                    ar: "بروتوكولات السلامة وأفضل الممارسات",
                  },
                  {
                    en: "Training methodology and progression",
                    ar: "منهجية التدريب والتطور",
                  },
                  {
                    en: "Certificate of completion upon finishing",
                    ar: "شهادة إتمام عند الانتهاء",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${sport?.color || "#1a5c38"}20` }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: sport?.color || "#1a5c38" }} />
                    </div>
                    <span className="text-gray-600 text-sm">
                      {lang === "en" ? item.en : item.ar}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Details card */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Calendar size={16} style={{ color: sport?.color || "#1a5c38" }} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{formattedDate}</div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Next Session" : "الجلسة القادمة"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} style={{ color: sport?.color || "#1a5c38" }} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {lang === "en" ? course.duration.en : course.duration.ar}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Duration" : "المدة"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: sport?.color || "#1a5c38" }} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {lang === "en" ? course.location.en : course.location.ar}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Location" : "الموقع"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={16} style={{ color: sport?.color || "#1a5c38" }} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{course.maxParticipants}</div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Max Participants" : "الحد الأقصى للمشاركين"}
                  </div>
                </div>
              </div>
            </div>

            {/* Provider */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                {lang === "en" ? "Provider" : "مقدم الدورة"}
              </h3>
              <p className="text-gray-500 text-sm">
                {lang === "en" ? course.provider.en : course.provider.ar}
              </p>
            </div>

            {/* Price + Register */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="mb-3">
                <span className="text-3xl font-bold" style={{ color: sport?.color || "#1a5c38" }}>{course.price}</span>
                <span className="text-gray-400 text-sm ml-1">{course.currency}</span>
              </div>
              <button
                onClick={handleRegister}
                className="w-full py-3 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                style={{ backgroundColor: sport?.color || "#1a5c38" }}
                data-testid="course-register-btn"
              >
                {lang === "en" ? "Register Now" : "سجّل الآن"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
