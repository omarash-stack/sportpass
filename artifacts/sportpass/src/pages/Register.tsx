import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export default function Register() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#1a5c38] flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              {lang === "en" ? "Create Account" : "إنشاء حساب"}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {lang === "en"
                ? "Join SportPass and start your journey"
                : "انضم إلى سبورت باس وابدأ رحلتك"}
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
            data-testid="register-form"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {lang === "en" ? "First Name" : "الاسم الأول"}
                </label>
                <input
                  type="text"
                  placeholder={lang === "en" ? "Ahmed" : "أحمد"}
                  className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                  data-testid="input-first-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {lang === "en" ? "Last Name" : "اسم العائلة"}
                </label>
                <input
                  type="text"
                  placeholder={lang === "en" ? "Al-Rashidi" : "الراشدي"}
                  className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                  data-testid="input-last-name"
                />
              </div>
            </div>

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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en" ? "Phone (Saudi)" : "رقم الهاتف (السعودي)"}
              </label>
              <input
                type="tel"
                placeholder="+966 5X XXX XXXX"
                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                data-testid="input-phone"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en" ? "Password" : "كلمة المرور"}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                data-testid="input-password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en" ? "Confirm Password" : "تأكيد كلمة المرور"}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c38] focus:ring-1 focus:ring-[#1a5c38] transition-colors"
                data-testid="input-confirm-password"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="terms"
                className="mt-0.5 accent-[#1a5c38]"
                data-testid="checkbox-terms"
              />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                {lang === "en" ? (
                  <>
                    I agree to the{" "}
                    <span className="text-[#1a5c38] hover:underline cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-[#1a5c38] hover:underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </>
                ) : (
                  <>
                    أوافق على{" "}
                    <span className="text-[#1a5c38] hover:underline cursor-pointer">
                      شروط الخدمة
                    </span>{" "}
                    و{" "}
                    <span className="text-[#1a5c38] hover:underline cursor-pointer">
                      سياسة الخصوصية
                    </span>
                  </>
                )}
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-11 bg-[#1a5c38] text-white rounded-lg text-sm font-semibold hover:bg-[#15492c] transition-colors"
              data-testid="button-submit"
            >
              {lang === "en" ? "Create Account" : "إنشاء حساب"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {lang === "en" ? "Already have an account? " : "لديك حساب بالفعل؟ "}
            <Link to="/login">
              <span className="text-[#1a5c38] font-semibold hover:underline cursor-pointer">
                {lang === "en" ? "Sign In" : "تسجيل الدخول"}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
