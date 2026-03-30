import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

export default function Login() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          {/* Logo */}
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
            onSubmit={(e) => e.preventDefault()}
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
            <Link href="/register">
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
