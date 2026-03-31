import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";

const benefits = [
  {
    icon: `<circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M14 20l4 4 8-8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    en: "Track the courses you've signed up for",
    ar: "تتبع الدورات التي سجّلت فيها",
  },
  {
    icon: `<path d="M4 6h32v20a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 16h16M12 22h10" fill="none" stroke="currentColor" stroke-width="1.5"/>`,
    en: "Keep a record of clubs you've joined",
    ar: "احتفظ بسجل الأندية التي انضممت إليها",
  },
  {
    icon: `<rect x="6" y="4" width="28" height="32" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 12h16M12 18h16M12 24h10" fill="none" stroke="currentColor" stroke-width="1.5"/>`,
    en: "View all licenses you've obtained",
    ar: "عرض جميع التراخيص التي حصلت عليها",
  },
  {
    icon: `<circle cx="20" cy="14" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 36c0-8 6-14 14-14s14 6 14 14" fill="none" stroke="currentColor" stroke-width="2"/>`,
    en: "Manage your profile and preferences",
    ar: "إدارة ملفك الشخصي وتفضيلاتك",
  },
];

export default function Login() {
  const { lang } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate(-1);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left — Benefits */}
        <div className="bg-[#1B5E3A] rounded-2xl p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {lang === "en" ? "Why join SportPass?" : "لماذا تنضم إلى سبورت باس؟"}
          </h2>
          <p className="text-white/70 text-sm mb-8 leading-relaxed">
            {lang === "en"
              ? "Create an account to get the most out of your sports journey in Saudi Arabia."
              : "أنشئ حسابًا للاستفادة القصوى من رحلتك الرياضية في المملكة العربية السعودية."}
          </p>

          <div className="space-y-5">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 text-[#c8a84b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    className="w-8 h-8"
                    dangerouslySetInnerHTML={{ __html: b.icon }}
                  />
                </div>
                <p className="text-white/90 text-sm leading-relaxed pt-1">
                  {lang === "en" ? b.en : b.ar}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Sign In form */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col justify-center">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#1a5c38] flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {lang === "en" ? "Sign In" : "تسجيل الدخول"}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {lang === "en"
                ? "Welcome back to SportPass"
                : "مرحبًا بعودتك إلى سبورت باس"}
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={handleLogin}
            data-testid="login-form"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en" ? "Email address" : "البريد الإلكتروني"}
              </label>
              <input
                type="email"
                placeholder={lang === "en" ? "you@example.com" : "example@domain.com"}
                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                data-testid="input-email"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  {lang === "en" ? "Password" : "كلمة المرور"}
                </label>
                <button type="button" className="text-xs text-[#1a5c38] hover:underline">
                  {lang === "en" ? "Forgot password?" : "نسيت كلمة المرور؟"}
                </button>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                data-testid="input-password"
              />
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-[#1a5c38] text-white rounded-lg text-sm font-semibold hover:bg-[#15492c] transition-colors mt-2"
              data-testid="button-submit"
            >
              {lang === "en" ? "Sign In" : "تسجيل الدخول"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-gray-400 text-xs">{lang === "en" ? "or" : "أو"}</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Register link */}
          <p className="text-center text-sm text-gray-500">
            {lang === "en" ? "Don't have an account? " : "ليس لديك حساب؟ "}
            <Link to="/register">
              <span className="text-[#1a5c38] font-semibold hover:underline cursor-pointer">
                {lang === "en" ? "Register" : "إنشاء حساب"}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
