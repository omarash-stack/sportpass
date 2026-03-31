import { useState, useCallback, useEffect } from "react";
import { User, Award, BookOpen, Trophy, X, MapPin, Calendar, Clock, FileCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { sports } from "@/data/sports";

const mockUser = {
  name: { en: "Omar", ar: "عمر" },
  email: "ahmed@example.com",
  memberships: [
    {
      clubName: { en: "Jebel Climbing Club", ar: "نادي جبل للتسلق" },
      sport: "rock-climbing",
      since: "2025-01",
      status: "active",
      details: {
        en: "Indoor and outdoor climbing sessions every Tuesday and Thursday evening. Access to all club facilities including bouldering wall and training area.",
        ar: "جلسات تسلق داخلية وخارجية كل ثلاثاء وخميس مساءً. الوصول إلى جميع مرافق النادي بما في ذلك جدار التسلق ومنطقة التدريب.",
      },
      location: { en: "Jeddah, Makkah Region", ar: "جدة، منطقة مكة المكرمة" },
    },
    {
      clubName: { en: "Riyadh Football Club", ar: "نادي الرياض لكرة القدم" },
      sport: "football",
      since: "2024-09",
      status: "active",
      details: {
        en: "Full membership with access to training grounds, weekly matches, and participation in the Riyadh Amateur League. Training schedule: Sunday, Wednesday, Friday.",
        ar: "عضوية كاملة مع الوصول إلى أرض التدريب والمباريات الأسبوعية والمشاركة في دوري الرياض للهواة. جدول التدريب: الأحد، الأربعاء، الجمعة.",
      },
      location: { en: "Riyadh, Riyadh Region", ar: "الرياض، منطقة الرياض" },
    },
  ],
  licenses: [
    {
      name: { en: "Recreational Climber License", ar: "رخصة المتسلق الترفيهي" },
      sport: "rock-climbing",
      expires: "2027-01-01",
      status: "active",
      details: {
        en: "Provides access to all SCMF-registered indoor and outdoor climbing venues across Saudi Arabia. Includes basic liability coverage and discounted gear rental at partner facilities.",
        ar: "يوفر الوصول إلى جميع مواقع التسلق الداخلية والخارجية المسجلة لدى الاتحاد في جميع أنحاء المملكة. يشمل تغطية أساسية للمسؤولية واستئجار معدات بأسعار مخفضة.",
      },
      issuer: { en: "Saudi Climbing & Mountaineering Federation", ar: "الاتحاد السعودي للتسلق والجبال" },
      certificate: { id: "SCMF-RCL-2026-04821", issuedDate: "2026-01-05" },
    },
    {
      name: { en: "Football Player License", ar: "رخصة لاعب كرة القدم" },
      sport: "football",
      expires: "2027-03-01",
      status: "active",
      details: {
        en: "Official player registration allowing participation in Saudi Football Federation sanctioned leagues and competitions at amateur level. Includes injury insurance coverage.",
        ar: "تسجيل لاعب رسمي يتيح المشاركة في الدوريات والمسابقات المعتمدة من الاتحاد السعودي لكرة القدم على مستوى الهواة. يشمل تغطية تأمين الإصابات.",
      },
      issuer: { en: "Saudi Football Federation", ar: "الاتحاد السعودي لكرة القدم" },
      certificate: { id: "SFF-PL-2026-11037", issuedDate: "2026-03-10" },
    },
  ],
  courses: [
    {
      name: { en: "Introduction to Indoor Climbing", ar: "مقدمة إلى تسلق الجدران الداخلية" },
      sport: "rock-climbing",
      completedDate: "2025-11-15",
      nextDate: null,
      status: "completed",
      details: {
        en: "Covered fundamentals of indoor climbing including harness fitting, belay techniques, basic knots, and climbing movement. Completed with a grade of 92%.",
        ar: "غطت أساسيات التسلق الداخلي بما في ذلك تركيب الحزام وتقنيات التحكم والعقد الأساسية وحركة التسلق. أُكملت بدرجة 92%.",
      },
      provider: { en: "Saudi Climbing Federation", ar: "الاتحاد السعودي للتسلق" },
      duration: { en: "2 days", ar: "يومان" },
      certificate: { id: "SCF-IIC-2025-00392", issuedDate: "2025-11-15" },
    },
    {
      name: { en: "Football Coaching Foundations", ar: "أسس التدريب في كرة القدم" },
      sport: "football",
      completedDate: null,
      nextDate: "2026-04-15",
      status: "enrolled",
      details: {
        en: "An introductory coaching course covering the fundamentals of football training, player development, and session planning. Next session starts April 15, 2026 in Riyadh.",
        ar: "دورة تدريبية تمهيدية تغطي أسس التدريب في كرة القدم وتطوير اللاعبين وتخطيط الجلسات. الجلسة القادمة تبدأ 15 أبريل 2026 في الرياض.",
      },
      provider: { en: "Saudi Football Federation", ar: "الاتحاد السعودي لكرة القدم" },
      duration: { en: "2 days", ar: "يومان" },
    },
  ],
};

type ModalData = {
  type: "membership" | "license" | "course";
  index: number;
} | null;

export default function Dashboard() {
  const { lang } = useLanguage();
  const [modal, setModal] = useState<ModalData>(null);
  const [closing, setClosing] = useState(false);

  const openModal = (type: "membership" | "license" | "course", index: number) => {
    setModal({ type, index });
    setClosing(false);
  };

  const closeModal = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setModal(null);
      setClosing(false);
    }, 200);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modal) closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modal, closeModal]);

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

  const renderModal = () => {
    if (!modal) return null;

    let title = { en: "", ar: "" };
    let sportId = "";
    let status = "";
    let content: React.ReactNode = null;

    if (modal.type === "membership") {
      const m = mockUser.memberships[modal.index];
      const sport = getSport(m.sport);
      title = m.clubName;
      sportId = m.sport;
      status = m.status;
      content = (
        <>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <MapPin size={14} />
            <span>{lang === "en" ? m.location.en : m.location.ar}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {lang === "en" ? m.details.en : m.details.ar}
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Calendar size={13} />
            <span>{lang === "en" ? "Member since" : "عضو منذ"} {m.since}</span>
          </div>
        </>
      );
    } else if (modal.type === "license") {
      const l = mockUser.licenses[modal.index];
      title = l.name;
      sportId = l.sport;
      status = l.status;
      content = (
        <>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Award size={14} />
            <span>{lang === "en" ? l.issuer.en : l.issuer.ar}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {lang === "en" ? l.details.en : l.details.ar}
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
            <Calendar size={13} />
            <span>
              {lang === "en" ? "Expires" : "تنتهي في"}{" "}
              {new Date(l.expires).toLocaleDateString(
                lang === "ar" ? "ar-SA" : "en-US",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </span>
          </div>
          {/* Certificate */}
          <div className="bg-gradient-to-br from-[#f8f4e8] to-[#f0ead6] rounded-xl p-4 border border-[#c8a84b]/30">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck size={16} className="text-[#c8a84b]" />
              <span className="text-sm font-semibold text-gray-800">
                {lang === "en" ? "Certificate" : "الشهادة"}
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{lang === "en" ? "Certificate ID" : "رقم الشهادة"}</span>
                <span className="text-xs font-mono font-medium text-gray-700">{l.certificate.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{lang === "en" ? "Issued" : "تاريخ الإصدار"}</span>
                <span className="text-xs text-gray-700">
                  {new Date(l.certificate.issuedDate).toLocaleDateString(
                    lang === "ar" ? "ar-SA" : "en-US",
                    { day: "numeric", month: "long", year: "numeric" }
                  )}
                </span>
              </div>
            </div>
          </div>
        </>
      );
    } else if (modal.type === "course") {
      const c = mockUser.courses[modal.index];
      title = c.name;
      sportId = c.sport;
      status = c.status;
      content = (
        <>
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
            <div className="flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>{lang === "en" ? c.provider.en : c.provider.ar}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{lang === "en" ? c.duration.en : c.duration.ar}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {lang === "en" ? c.details.en : c.details.ar}
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
            <Calendar size={13} />
            <span>
              {c.status === "completed"
                ? (lang === "en" ? "Completed " : "اكتمل في ") +
                  new Date(c.completedDate!).toLocaleDateString(
                    lang === "ar" ? "ar-SA" : "en-US",
                    { day: "numeric", month: "long", year: "numeric" }
                  )
                : (lang === "en" ? "Next session: " : "الجلسة القادمة: ") +
                  new Date(c.nextDate!).toLocaleDateString(
                    lang === "ar" ? "ar-SA" : "en-US",
                    { day: "numeric", month: "long", year: "numeric" }
                  )}
            </span>
          </div>
          {/* Certificate — only for completed courses */}
          {c.status === "completed" && c.certificate && (
            <div className="bg-gradient-to-br from-[#f8f4e8] to-[#f0ead6] rounded-xl p-4 border border-[#c8a84b]/30">
              <div className="flex items-center gap-2 mb-2">
                <FileCheck size={16} className="text-[#c8a84b]" />
                <span className="text-sm font-semibold text-gray-800">
                  {lang === "en" ? "Certificate" : "الشهادة"}
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{lang === "en" ? "Certificate ID" : "رقم الشهادة"}</span>
                  <span className="text-xs font-mono font-medium text-gray-700">{c.certificate.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{lang === "en" ? "Issued" : "تاريخ الإصدار"}</span>
                  <span className="text-xs text-gray-700">
                    {new Date(c.certificate.issuedDate).toLocaleDateString(
                      lang === "ar" ? "ar-SA" : "en-US",
                      { day: "numeric", month: "long", year: "numeric" }
                    )}
                  </span>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }

    const sport = getSport(sportId);

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-4 ${closing ? "closing" : ""}`}
        onClick={closeModal}
      >
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm modal-overlay ${closing ? "closing" : ""}`} />
        <div
          className={`relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden modal-content ${closing ? "closing" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#c8a84b]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{sport?.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">
                    {lang === "en" ? title.en : title.ar}
                  </h3>
                  <p className="text-white/70 text-xs mt-0.5">
                    {lang === "en" ? sport?.name.en : sport?.name.ar}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white/70 hover:text-white transition-colors cursor-pointer mt-1"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-3">{statusBadge(status)}</div>
          </div>

          {/* Body */}
          <div className="px-6 py-5">{content}</div>
        </div>
      </div>
    );
  };

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
              { icon: <Trophy size={18} />, count: mockUser.memberships.length, en: "Memberships", ar: "عضويات" },
              { icon: <Award size={18} />, count: mockUser.licenses.length, en: "Licenses", ar: "تراخيص" },
              { icon: <BookOpen size={18} />, count: mockUser.courses.length, en: "Courses", ar: "دورات" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-[#c8a84b] flex justify-center mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-white/60 text-xs">{lang === "en" ? stat.en : stat.ar}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* My Memberships */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-[#c8a84b] rounded-t-xl">
            <h2 className="font-bold text-white flex items-center gap-2">
              <Trophy size={16} />
              {lang === "en" ? "My Memberships" : "عضوياتي"}
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {mockUser.memberships.map((m, i) => {
              const sport = getSport(m.sport);
              return (
                <div
                  key={i}
                  onClick={() => openModal("membership", i)}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
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
          <div className="px-6 py-4 bg-[#c8a84b] rounded-t-xl">
            <h2 className="font-bold text-white flex items-center gap-2">
              <Award size={16} />
              {lang === "en" ? "My Licenses" : "تراخيصي"}
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {mockUser.licenses.map((l, i) => {
              const sport = getSport(l.sport);
              return (
                <div
                  key={i}
                  onClick={() => openModal("license", i)}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
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
          <div className="px-6 py-4 bg-[#c8a84b] rounded-t-xl">
            <h2 className="font-bold text-white flex items-center gap-2">
              <BookOpen size={16} />
              {lang === "en" ? "My Courses" : "دوراتي"}
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {mockUser.courses.map((c, i) => {
              const sport = getSport(c.sport);
              return (
                <div
                  key={i}
                  onClick={() => openModal("course", i)}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
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

      {/* Modal */}
      {renderModal()}
    </div>
  );
}
