import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="py-6 bg-gray-100 text-center">
      <p className="text-gray-500 text-sm">
        &copy; 2026 SportPass. {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
      </p>
    </footer>
  );
}
