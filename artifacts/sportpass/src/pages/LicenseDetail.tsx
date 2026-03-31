import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle2, FileCheck, Shield, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";
import { getLicenseById } from "@/data/licenses";
import { getCourseById } from "@/data/courses";
import { getSportById } from "@/data/sports";

const typeColors: Record<string, string> = {
  player: "bg-blue-100 text-blue-700",
  coach: "bg-purple-100 text-purple-700",
  referee: "bg-amber-100 text-amber-700",
};

export default function LicenseDetail() {
  const { lang } = useLanguage();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id: string }>();
  const license = getLicenseById(id);
  const sport = license ? getSportById(license.sportId) : null;

  if (!license) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            {lang === "en" ? "License not found." : "الرخصة غير موجودة."}
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

  const handleGetLicense = () => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-12" style={{ backgroundColor: sport?.color || "#1a5c38" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/sports/${license.sportId}?tab=licenses`}>
            <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors cursor-pointer">
              <ArrowLeft size={16} className={lang === "ar" ? "rotate-180" : ""} />
              {lang === "en" ? "Back" : "رجوع"}
            </button>
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
              <FileCheck size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {lang === "en" ? license.name.en : license.name.ar}
              </h1>
              <div className="flex items-center gap-3 mt-2">
                {sport && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full text-white border border-white/30">
                    {sport.icon} {lang === "en" ? sport.name.en : sport.name.ar}
                  </span>
                )}
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[license.type] || "bg-gray-100 text-gray-600"}`}>
                  {lang === "en" ? license.typeLabel.en : license.typeLabel.ar}
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
                {lang === "en" ? "About This License" : "عن الرخصة"}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {lang === "en" ? license.description.en : license.description.ar}
              </p>
            </div>

            {/* Required Courses */}
            {license.prerequisiteCourseIds && license.prerequisiteCourseIds.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-[#c8a84b]/30 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-[#c8a84b]" />
                  <h2 className="font-bold text-gray-900">
                    {lang === "en" ? "Required Courses" : "الدورات المطلوبة"}
                  </h2>
                </div>
                <p className="text-gray-400 text-xs mb-4">
                  {lang === "en"
                    ? "Complete these courses before applying for this license"
                    : "أكمل هذه الدورات قبل التقدم لهذه الرخصة"}
                </p>
                <div className="space-y-3">
                  {license.prerequisiteCourseIds.map((courseId) => {
                    const course = getCourseById(courseId);
                    if (!course) return null;
                    return (
                      <Link
                        key={courseId}
                        to={`/courses/${courseId}`}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#f5f5f5] hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#c8a84b]/10 flex items-center justify-center">
                            <BookOpen size={14} className="text-[#c8a84b]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {lang === "en" ? course.name.en : course.name.ar}
                            </p>
                            <p className="text-xs text-gray-400">
                              {lang === "en" ? course.duration.en : course.duration.ar} · {course.price} {course.currency}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                          {lang === "en" ? "Required" : "مطلوب"}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Requirements */}
            <div className="bg-[#f5f5f5] rounded-xl p-6 border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-4">
                {lang === "en" ? "Requirements" : "المتطلبات"}
              </h2>
              <ul className="space-y-3">
                {(lang === "en" ? license.requirements.en : license.requirements.ar).map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${sport?.color || "#1a5c38"}20` }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: sport?.color || "#1a5c38" }} />
                    </div>
                    <span className="text-gray-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4">
                {lang === "en" ? "Benefits" : "المزايا"}
              </h2>
              <ul className="space-y-3">
                {(lang === "en" ? license.benefits.en : license.benefits.ar).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: sport?.color || "#1a5c38" }} />
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Details */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <Clock size={16} style={{ color: sport?.color || "#1a5c38" }} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {lang === "en" ? license.validityLabel.en : license.validityLabel.ar}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "Validity" : "الصلاحية"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={16} style={{ color: sport?.color || "#1a5c38" }} />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {lang === "en" ? license.typeLabel.en : license.typeLabel.ar}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {lang === "en" ? "License Type" : "نوع الرخصة"}
                  </div>
                </div>
              </div>
            </div>

            {/* Price + Get License */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="mb-3">
                <span className="text-3xl font-bold text-[#c8a84b]">{license.price}</span>
                <span className="text-gray-400 text-sm ml-1">{license.currency}</span>
              </div>
              <button
                onClick={handleGetLicense}
                className="w-full py-3 rounded-lg bg-[#c8a84b] text-white text-sm font-semibold hover:bg-[#b8963d] transition-colors cursor-pointer"
                data-testid="license-get-btn"
              >
                {lang === "en" ? "Get License" : "احصل على الرخصة"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
