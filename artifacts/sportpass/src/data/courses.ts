import type { BilingualText } from "./sports";

export interface Course {
  id: string;
  sportId: string;
  name: BilingualText;
  level: string;
  levelLabel: BilingualText;
  duration: BilingualText;
  durationDays: number;
  price: number;
  currency: string;
  provider: BilingualText;
  nextDate: string;
  location: BilingualText;
  description: BilingualText;
  maxParticipants: number;
  featured: boolean;
}

export const courses: Course[] = [
  // Football courses
  {
    id: "football-coaching-foundations",
    sportId: "football",
    name: { en: "Football Coaching Foundations", ar: "أسس التدريب في كرة القدم" },
    level: "beginner",
    levelLabel: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "2 days", ar: "يومان" },
    durationDays: 2,
    price: 250,
    currency: "SAR",
    provider: { en: "Saudi Football Federation", ar: "الاتحاد السعودي لكرة القدم" },
    nextDate: "2026-04-15",
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "An introductory coaching course covering the fundamentals of football training, player development, and session planning. Suitable for aspiring coaches with no prior coaching experience.",
      ar: "دورة تدريبية تمهيدية تغطي أسس التدريب في كرة القدم وتطوير اللاعبين وتخطيط الجلسات. مناسبة للمدربين الطموحين دون خبرة تدريبية مسبقة."
    },
    maxParticipants: 20,
    featured: true
  },
  {
    id: "football-advanced-tactics",
    sportId: "football",
    name: { en: "Advanced Football Tactics & Analysis", ar: "التكتيكات المتقدمة وتحليل كرة القدم" },
    level: "advanced",
    levelLabel: { en: "Advanced", ar: "متقدم" },
    duration: { en: "3 days", ar: "ثلاثة أيام" },
    durationDays: 3,
    price: 480,
    currency: "SAR",
    provider: { en: "Saudi Football Federation", ar: "الاتحاد السعودي لكرة القدم" },
    nextDate: "2026-05-10",
    location: { en: "Jeddah", ar: "جدة" },
    description: {
      en: "Deep dive into modern tactical systems, video analysis, and periodization planning. Designed for experienced coaches looking to elevate their game management skills.",
      ar: "دراسة معمقة في الأنظمة التكتيكية الحديثة وتحليل الفيديو وتخطيط الدورات. مصمم للمدربين ذوي الخبرة الذين يتطلعون إلى رفع مهاراتهم في إدارة المباريات."
    },
    maxParticipants: 15,
    featured: true
  },

  // Basketball courses
  {
    id: "basketball-skills-camp",
    sportId: "basketball",
    name: { en: "Basketball Skills Development Camp", ar: "معسكر تطوير مهارات كرة السلة" },
    level: "beginner",
    levelLabel: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "2 days", ar: "يومان" },
    durationDays: 2,
    price: 200,
    currency: "SAR",
    provider: { en: "Saudi Basketball Federation", ar: "الاتحاد السعودي لكرة السلة" },
    nextDate: "2026-04-20",
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Fundamental basketball skills camp covering dribbling, shooting, passing, and defensive techniques. Open to players aged 12 and above with minimal experience.",
      ar: "معسكر مهارات كرة السلة الأساسية يغطي المراوغة والتصويب والتمرير وتقنيات الدفاع. مفتوح للاعبين من سن 12 فما فوق بخبرة بسيطة."
    },
    maxParticipants: 25,
    featured: false
  },
  {
    id: "basketball-referee-certification",
    sportId: "basketball",
    name: { en: "Basketball Referee Certification", ar: "شهادة تحكيم كرة السلة" },
    level: "intermediate",
    levelLabel: { en: "Intermediate", ar: "متوسط" },
    duration: { en: "3 days", ar: "ثلاثة أيام" },
    durationDays: 3,
    price: 350,
    currency: "SAR",
    provider: { en: "Saudi Basketball Federation", ar: "الاتحاد السعودي لكرة السلة" },
    nextDate: "2026-05-25",
    location: { en: "Dammam", ar: "الدمام" },
    description: {
      en: "Official referee certification course covering FIBA rules, mechanics, positioning, and practical officiating experience at controlled games.",
      ar: "دورة تحكيم رسمية تغطي قواعد FIBA والتقنيات والمواضع والخبرة العملية في التحكيم في المباريات المضبوطة."
    },
    maxParticipants: 18,
    featured: false
  },

  // Swimming courses
  {
    id: "swimming-learn-to-swim",
    sportId: "swimming",
    name: { en: "Learn to Swim — Adults", ar: "تعلّم السباحة — البالغون" },
    level: "beginner",
    levelLabel: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "5 sessions", ar: "5 جلسات" },
    durationDays: 5,
    price: 175,
    currency: "SAR",
    provider: { en: "Saudi Aquatics Federation", ar: "الاتحاد السعودي للرياضات المائية" },
    nextDate: "2026-04-05",
    location: { en: "Multiple Cities", ar: "مدن متعددة" },
    description: {
      en: "A comprehensive beginner swimming course for adults who want to learn water safety, basic strokes, and confidence in the pool. Small class sizes ensure personal attention.",
      ar: "دورة سباحة شاملة للمبتدئين من البالغين الذين يريدون تعلم السلامة المائية والأساليب الأساسية والثقة في حوض السباحة."
    },
    maxParticipants: 12,
    featured: true
  },
  {
    id: "swimming-competitive-training",
    sportId: "swimming",
    name: { en: "Competitive Swimming Training Program", ar: "برنامج التدريب على السباحة التنافسية" },
    level: "advanced",
    levelLabel: { en: "Advanced", ar: "متقدم" },
    duration: { en: "4 weeks", ar: "4 أسابيع" },
    durationDays: 20,
    price: 550,
    currency: "SAR",
    provider: { en: "Saudi Aquatics Federation", ar: "الاتحاد السعودي للرياضات المائية" },
    nextDate: "2026-06-01",
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Intensive 4-week training program for competitive swimmers preparing for national-level competitions. Covers technique refinement, race strategy, and strength conditioning.",
      ar: "برنامج تدريبي مكثف لمدة 4 أسابيع للسباحين التنافسيين الذين يستعدون للمسابقات الوطنية."
    },
    maxParticipants: 16,
    featured: false
  },

  // Rock Climbing courses
  {
    id: "intro-indoor-climbing",
    sportId: "rock-climbing",
    name: { en: "Introduction to Indoor Climbing", ar: "مقدمة إلى تسلق الجدران الداخلية" },
    level: "beginner",
    levelLabel: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "1 day", ar: "يوم واحد" },
    durationDays: 1,
    price: 150,
    currency: "SAR",
    provider: { en: "Saudi Climbing & Mountaineering Federation", ar: "الاتحاد السعودي للتسلق والتجبال" },
    nextDate: "2026-04-08",
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "A full-day introduction to indoor rock climbing. Learn essential knots, harness safety, belay techniques, and basic movement skills on the wall. All equipment provided.",
      ar: "مقدمة يوم كامل للتسلق الداخلي. تعلم العقد الأساسية وسلامة التسخير وتقنيات التحكم والمهارات الحركية الأساسية على الجدار. جميع المعدات متوفرة."
    },
    maxParticipants: 10,
    featured: true
  },
  {
    id: "outdoor-climbing-safety",
    sportId: "rock-climbing",
    name: { en: "Outdoor Rock Climbing Safety & Technique", ar: "سلامة وتقنية تسلق الصخور الخارجي" },
    level: "intermediate",
    levelLabel: { en: "Intermediate", ar: "متوسط" },
    duration: { en: "2 days", ar: "يومان" },
    durationDays: 2,
    price: 320,
    currency: "SAR",
    provider: { en: "Saudi Climbing & Mountaineering Federation", ar: "الاتحاد السعودي للتسلق والتجبال" },
    nextDate: "2026-05-03",
    location: { en: "AlUla", ar: "العُلا" },
    description: {
      en: "Two-day outdoor climbing course at AlUla's world-renowned rock formations. Covers lead climbing, anchor building, risk assessment, and desert environment safety. Prerequisite: basic indoor climbing experience.",
      ar: "دورة تسلق خارجية لمدة يومين في التكوينات الصخرية الشهيرة عالميًا في العُلا. تغطي التسلق الرائد وبناء المراسي وتقييم المخاطر وسلامة البيئة الصحراوية."
    },
    maxParticipants: 8,
    featured: true
  },

  // Volleyball courses
  {
    id: "volleyball-coaching-intro",
    sportId: "volleyball",
    name: { en: "Introduction to Volleyball Coaching", ar: "مقدمة إلى تدريب الكرة الطائرة" },
    level: "beginner",
    levelLabel: { en: "Beginner", ar: "مبتدئ" },
    duration: { en: "2 days", ar: "يومان" },
    durationDays: 2,
    price: 220,
    currency: "SAR",
    provider: { en: "Saudi Volleyball Federation", ar: "الاتحاد السعودي للكرة الطائرة" },
    nextDate: "2026-04-25",
    location: { en: "Jeddah", ar: "جدة" },
    description: {
      en: "Beginner coaching certification covering volleyball fundamentals, drill design, team management, and player skill development. Ideal for school coaches and community leaders.",
      ar: "شهادة تدريب مبتدئ تغطي أساسيات الكرة الطائرة وتصميم التدريبات وإدارة الفريق وتطوير مهارات اللاعبين."
    },
    maxParticipants: 20,
    featured: false
  },
  {
    id: "volleyball-beach-training",
    sportId: "volleyball",
    name: { en: "Beach Volleyball Training Camp", ar: "معسكر تدريب كرة الطائرة الشاطئية" },
    level: "intermediate",
    levelLabel: { en: "Intermediate", ar: "متوسط" },
    duration: { en: "3 days", ar: "ثلاثة أيام" },
    durationDays: 3,
    price: 300,
    currency: "SAR",
    provider: { en: "Saudi Volleyball Federation", ar: "الاتحاد السعودي للكرة الطائرة" },
    nextDate: "2026-05-15",
    location: { en: "Jeddah", ar: "جدة" },
    description: {
      en: "Intensive beach volleyball camp on Jeddah's Red Sea coast. Focus on serve, dig, set, and spike techniques adapted for sand play, plus sand-specific conditioning.",
      ar: "معسكر كرة طائرة شاطئية مكثف على ساحل البحر الأحمر في جدة. التركيز على تقنيات الإرسال والحفر والإعداد والضرب المكيفة للعب على الرمال."
    },
    maxParticipants: 16,
    featured: true
  }
];

export const getCoursesBySport = (sportId: string): Course[] => courses.filter(c => c.sportId === sportId);
export const getCourseById = (id: string): Course | undefined => courses.find(c => c.id === id);
export const getFeaturedCourses = (): Course[] => courses.filter(c => c.featured);
export const getUpcomingCourses = (limit = 3): Course[] =>
  [...courses]
    .sort((a, b) => new Date(a.nextDate).getTime() - new Date(b.nextDate).getTime())
    .slice(0, limit);
