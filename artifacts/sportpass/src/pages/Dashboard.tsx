import { Link } from "react-router-dom";
import { User, Award, BookOpen, Trophy, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";

const mockUser = {
  name: { en: "Ahmed Al-Rashidi", ar: "أحمد الراشدي" },
  email: "ahmed@example.com",
  memberships: [
    { clubName: { en: "Jebel Climbing Club", ar: "نادي جبل للتسلق" }, sport: "rock-climbing", since: "2025-01", status: "active" },
    { clubName: { en: "Riyadh Football Club", ar: "نادي الرياض لكرة القدم" }, sport: "football", since: "2024-09", status: "active" },
  ],
  licenses: [
    { name: { en: "Recreational Climber License", ar: "رخصة المتسلق الترفيهي" }, sport: "rock-climbing", expires: "2027-01-01", status: "active" },
    { name: { en: "Football Player License", ar: "رخصة لاعب كرة القدم" }, sport: "football", expires: "2027-03-01", status: "active" },
  ],
  courses: [
    { name: { en: "Introduction to Indoor Climbing", ar: "مقدمة إلى تسلق الجدران الداخلية" }, sport: "rock-climbing", completedDate: "2025-11-15", status: "completed" },
    { name: { en: "Football Coaching Foundations", ar: "أسس التدريب في كرة القدم" }, sport: "football", completedDate: null, nextDate: "2026-04-15", status: "enrolled" },
  ],
};

export default function Dashboard() {
  const { lang } = useLanguage();

  const statusBadge = (status: string) => {
    const colors: Record<string, string> = {
      active: "bg-green-100 text-green-700",
      completed: "bg-blue-100 text-blue-700",
      enrolled: "bg-amber-100 text-amber-700",
    };
    const labels: Record<string, { en: string; ar: string }> = {
      active: { en: "Active", ar: "نشط" },
      completed: { en: "Completed", ar: "مكتمل" },
      enrolled: { en: "Enrolled", ar: "مسجل" },
    };
    return (
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors[status] || "bg-gray-100 text-gray-600"}`}>
        {lang === "en" ? labels[status]?.en : labels[status]?.ar}
      </span>
    );
  };

  const getSport = (id: string) => sports.find((s) => s.id === id);

  return (
    <div className="min-h-screen pt-20 bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-[#1a5c38] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {lang === "en" ? mockUser.name.en : mockUser.name.ar}
              </h1>
              <p className="text-white/60 text-sm">{mockUser.email}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: <Trophy size={18} />,
                count: mockUser.memberships.length,
                en: "Memberships",
                ar: "عضويات",
              },
              {
                icon: <Award size={18} />,
                count: mockUser.licenses.length,
                en: "Licenses",
                ar: "تراخيص",
              },
              {
                icon: <BookOpen size={18} />,
                count: mockUser.courses.length,
                en: "Courses",
                ar: "دورات",
              },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-[#c8a84b] flex justify-center mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-white/60 text-xs">
                  {lang === "en" ? stat.en : stat.ar}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* My Memberships */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <Trophy size={16} className="text-[#1a5c38]" />
              {lang === "en" ? "My Memberships" : "عضوياتي"}
            </h2>
            <Link to="/sports">
              <span className="text-[#1a5c38] text-xs hover:underline cursor-pointer">
                {lang === "en" ? "Find Clubs" : "ابحث عن أندية"}
              </span>
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {mockUser.memberships.map((m, i) => {
              const sport = getSport(m.sport);
              return (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sport?.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {lang === "en" ? m.clubName.en : m.clubName.ar}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {lang === "en" ? sport?.name.en : sport?.name.ar} ·{" "}
                        {lang === "en" ? "Since" : "منذ"} {m.since}
                      </p>
                    </div>
                  </div>
                  {statusBadge(m.status)}
                </div>
              );
            })}
          </div>
        </section>

        {/* My Licenses */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <Award size={16} className="text-[#c8a84b]" />
              {lang === "en" ? "My Licenses" : "تراخيصي"}
            </h2>
            <Link to="/licenses">
              <span className="text-[#1a5c38] text-xs hover:underline cursor-pointer">
                {lang === "en" ? "Get License" : "احصل على رخصة"}
              </span>
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {mockUser.licenses.map((l, i) => {
              const sport = getSport(l.sport);
              return (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sport?.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {lang === "en" ? l.name.en : l.name.ar}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {lang === "en" ? "Expires" : "تنتهي في"}{" "}
                        {new Date(l.expires).toLocaleDateString(
                          lang === "ar" ? "ar-SA" : "en-US",
                          { day: "numeric", month: "short", year: "numeric" }
                        )}
                      </p>
                    </div>
                  </div>
                  {statusBadge(l.status)}
                </div>
              );
            })}
          </div>
        </section>

        {/* My Courses */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <BookOpen size={16} className="text-blue-500" />
              {lang === "en" ? "My Courses" : "دوراتي"}
            </h2>
            <Link to="/courses">
              <span className="text-[#1a5c38] text-xs hover:underline cursor-pointer">
                {lang === "en" ? "Browse Courses" : "تصفح الدورات"}
              </span>
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {mockUser.courses.map((c, i) => {
              const sport = getSport(c.sport);
              return (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sport?.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {lang === "en" ? c.name.en : c.name.ar}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {c.status === "completed"
                          ? (lang === "en" ? "Completed " : "اكتمل في ") +
                            new Date(c.completedDate!).toLocaleDateString(
                              lang === "ar" ? "ar-SA" : "en-US",
                              { month: "short", year: "numeric" }
                            )
                          : (lang === "en" ? "Next: " : "التالي: ") +
                            new Date(c.nextDate!).toLocaleDateString(
                              lang === "ar" ? "ar-SA" : "en-US",
                              { day: "numeric", month: "short", year: "numeric" }
                            )}
                      </p>
                    </div>
                  </div>
                  {statusBadge(c.status)}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
