import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/LanguageProvider";
import { AuthProvider } from "@/components/AuthProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import SportsPage from "@/pages/Sports";
import SportDetail from "@/pages/SportDetail";
import ClubDetail from "@/pages/ClubDetail";
import CourseDetail from "@/pages/CourseDetail";
import CoursesPage from "@/pages/Courses";
import LicenseDetail from "@/pages/LicenseDetail";
import LicensesPage from "@/pages/Licenses";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-transition">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/sports/:id" element={<SportDetail />} />
        <Route path="/clubs/:id" element={<ClubDetail />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/licenses/:id" element={<LicenseDetail />} />
        <Route path="/licenses" element={<LicensesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <AuthProvider>
            <BrowserRouter basename={base === "/" ? undefined : base}>
              <AppRoutes />
            </BrowserRouter>
          </AuthProvider>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
