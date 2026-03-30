import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const navLinks = {
  en: [
    { href: "/", label: "Home" },
    { href: "/sports", label: "Sports" },
    { href: "/courses", label: "Courses" },
    { href: "/licenses", label: "Licenses" },
  ],
  ar: [
    { href: "/", label: "الرئيسية" },
    { href: "/sports", label: "الرياضات" },
    { href: "/courses", label: "الدورات" },
    { href: "/licenses", label: "التراخيص" },
  ],
};

export function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = navLinks[lang];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" data-testid="nav-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-[#1a5c38] flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-[#1a5c38] text-base leading-none">SportPass</div>
                <div className="text-[10px] text-[#c8a84b] font-medium leading-none">
                  {lang === "ar" ? "سبورت باس" : "سبورت باس"}
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.href} to={link.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location.pathname === link.href
                      ? "text-[#1a5c38] border-b-2 border-[#1a5c38] pb-0.5"
                      : "text-gray-600 hover:text-[#1a5c38]"
                  }`}
                  data-testid={`nav-link-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-md text-sm font-medium border border-[#1a5c38] text-[#1a5c38] hover:bg-[#1a5c38] hover:text-white transition-colors"
              data-testid="lang-toggle"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            {/* Login */}
            <Link to="/login">
              <button
                className="px-4 py-1.5 rounded-md text-sm font-semibold bg-[#1a5c38] text-white hover:bg-[#15492c] transition-colors"
                data-testid="nav-login"
              >
                {lang === "en" ? "Login" : "تسجيل الدخول"}
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#1a5c38]"
            onClick={() => setMobileOpen((o) => !o)}
            data-testid="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <Link key={link.href} to={link.href}>
              <div
                className={`block py-2 text-sm font-medium cursor-pointer ${
                  location.pathname === link.href ? "text-[#1a5c38]" : "text-gray-700"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <button
              onClick={toggleLang}
              className="flex-1 py-2 rounded-md text-sm font-medium border border-[#1a5c38] text-[#1a5c38]"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            <Link to="/login" className="flex-1">
              <button className="w-full py-2 rounded-md text-sm font-semibold bg-[#1a5c38] text-white">
                {lang === "en" ? "Login" : "تسجيل الدخول"}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
