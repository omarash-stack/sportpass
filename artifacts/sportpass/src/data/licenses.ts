import type { BilingualText } from "./sports";

export interface License {
  id: string;
  sportId: string;
  name: BilingualText;
  type: string;
  typeLabel: BilingualText;
  price: number;
  currency: string;
  validityMonths: number;
  validityLabel: BilingualText;
  location: BilingualText;
  description: BilingualText;
  requirements: { en: string[]; ar: string[] };
  benefits: { en: string[]; ar: string[] };
  featured: boolean;
  prerequisiteCourseIds?: string[];
}

export type PathwayStep = { type: "course"; id: string } | { type: "license"; id: string };

export interface Pathway {
  id: string;
  name: BilingualText;
  description: BilingualText;
  steps: PathwayStep[];
}

export const licenses: License[] = [
  // Football licenses
  {
    id: "football-player-license",
    sportId: "football",
    name: { en: "Football Player License", ar: "رخصة لاعب كرة القدم" },
    type: "player",
    typeLabel: { en: "Player", ar: "لاعب" },
    price: 120,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Official player registration license allowing participation in Saudi Football Federation sanctioned leagues and competitions at amateur level.",
      ar: "رخصة تسجيل لاعب رسمية تتيح المشاركة في الدوريات والمسابقات المعتمدة من الاتحاد السعودي لكرة القدم على المستوى الهواة."
    },
    requirements: {
      en: ["Valid Saudi ID or Iqama", "Medical fitness certificate", "Passport-size photo"],
      ar: ["الهوية الوطنية أو الإقامة الصالحة", "شهادة اللياقة الطبية", "صورة شخصية"]
    },
    benefits: {
      en: ["Compete in official leagues", "Access to federation training camps", "Injury insurance coverage"],
      ar: ["المشاركة في الدوريات الرسمية", "الوصول إلى معسكرات الاتحاد التدريبية", "تغطية تأمين الإصابات"]
    },
    featured: true
  },
  {
    id: "football-coach-license",
    sportId: "football",
    name: { en: "Football Coaching License — Level C", ar: "رخصة المدرب لكرة القدم — المستوى C" },
    type: "coach",
    typeLabel: { en: "Coach", ar: "مدرب" },
    price: 300,
    currency: "SAR",
    validityMonths: 24,
    validityLabel: { en: "2 years", ar: "سنتان" },
    location: { en: "Online", ar: "عبر الإنترنت" },
    description: {
      en: "Entry-level coaching license recognized by the Saudi Football Federation and AFC. Required to coach youth and amateur teams officially.",
      ar: "رخصة تدريب مستوى مبتدئ معترف بها من الاتحاد السعودي لكرة القدم والاتحاد الآسيوي. مطلوبة لتدريب فرق الناشئين والهواة رسميًا."
    },
    requirements: {
      en: ["Completion of SFF Coaching Foundations course", "Valid Saudi ID or Iqama", "First Aid certification"],
      ar: ["إتمام دورة أسس التدريب لدى الاتحاد السعودي", "الهوية الوطنية أو الإقامة الصالحة", "شهادة الإسعافات الأولية"]
    },
    benefits: {
      en: ["Coach youth and amateur teams officially", "Access to SFF coaching seminars", "Career progression pathway"],
      ar: ["تدريب فرق الناشئين والهواة رسميًا", "الوصول إلى ندوات الاتحاد السعودي للتدريب", "مسار التطور المهني"]
    },
    featured: false,
    prerequisiteCourseIds: ["football-coaching-foundations"]
  },
  {
    id: "football-coach-license-b",
    sportId: "football",
    name: { en: "Football Coaching License — Level B", ar: "رخصة المدرب لكرة القدم — المستوى B" },
    type: "coach",
    typeLabel: { en: "Coach", ar: "مدرب" },
    price: 600,
    currency: "SAR",
    validityMonths: 36,
    validityLabel: { en: "3 years", ar: "3 سنوات" },
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Advanced coaching license enabling you to coach semi-professional and professional youth teams. Recognized by AFC and required for national-level competitions.",
      ar: "رخصة تدريب متقدمة تمكّنك من تدريب فرق الشباب شبه المحترفة والمحترفة. معترف بها من الاتحاد الآسيوي ومطلوبة للمسابقات على المستوى الوطني."
    },
    requirements: {
      en: ["Active Level C Coaching License", "2+ years coaching experience", "Completion of SFF Level B course", "Advanced First Aid certification"],
      ar: ["رخصة تدريب المستوى C سارية", "خبرة تدريبية سنتين أو أكثر", "إتمام دورة المستوى B لدى الاتحاد السعودي", "شهادة إسعافات أولية متقدمة"]
    },
    benefits: {
      en: ["Coach semi-professional and professional youth teams", "Eligible for national-level competitions", "Priority access to AFC coaching programs", "Enhanced career opportunities"],
      ar: ["تدريب فرق الشباب شبه المحترفة والمحترفة", "مؤهل للمسابقات على المستوى الوطني", "أولوية الوصول إلى برامج الاتحاد الآسيوي التدريبية", "فرص مهنية أفضل"]
    },
    featured: false,
    prerequisiteCourseIds: ["football-advanced-tactics"]
  },

  // Basketball licenses
  {
    id: "basketball-player-license",
    sportId: "basketball",
    name: { en: "Basketball Player License", ar: "رخصة لاعب كرة السلة" },
    type: "player",
    typeLabel: { en: "Player", ar: "لاعب" },
    price: 100,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Jeddah", ar: "جدة" },
    description: {
      en: "Official player license for participation in Saudi Basketball Federation leagues and regional competitions.",
      ar: "رخصة لاعب رسمية للمشاركة في دوريات الاتحاد السعودي لكرة السلة والمسابقات الإقليمية."
    },
    requirements: {
      en: ["Valid Saudi ID or Iqama", "Medical clearance form", "Club membership proof"],
      ar: ["الهوية الوطنية أو الإقامة الصالحة", "نموذج الإفراج الطبي", "إثبات عضوية النادي"]
    },
    benefits: {
      en: ["Play in official SBF competitions", "Access to national team scouting", "Player development resources"],
      ar: ["اللعب في المسابقات الرسمية للاتحاد السعودي لكرة السلة", "الوصول إلى استكشاف المنتخب الوطني", "موارد تطوير اللاعبين"]
    },
    featured: false
  },
  {
    id: "basketball-referee-license",
    sportId: "basketball",
    name: { en: "Basketball Referee License", ar: "رخصة حكم كرة السلة" },
    type: "referee",
    typeLabel: { en: "Referee", ar: "حكم" },
    price: 180,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Official referee certification allowing officiating at SBF-sanctioned games at club and regional levels.",
      ar: "شهادة حكم رسمية تتيح التحكيم في المباريات المعتمدة من الاتحاد السعودي لكرة السلة على مستويات النادي والإقليم."
    },
    requirements: {
      en: ["Completion of Referee Certification course", "FIBA Rules exam pass (70%+)", "Physical fitness test"],
      ar: ["إتمام دورة شهادة الحكم", "اجتياز اختبار قواعد FIBA (70%+)", "اختبار اللياقة البدنية"]
    },
    benefits: {
      en: ["Officiate official games", "Match fees per game", "Access to advanced referee development"],
      ar: ["التحكيم في المباريات الرسمية", "رسوم المباراة لكل مباراة", "الوصول إلى تطوير الحكام المتقدم"]
    },
    featured: false,
    prerequisiteCourseIds: ["basketball-referee-certification"]
  },

  // Swimming licenses
  {
    id: "swimming-competitive-license",
    sportId: "swimming",
    name: { en: "Competitive Swimmer License", ar: "رخصة سباح تنافسي" },
    type: "player",
    typeLabel: { en: "Athlete", ar: "رياضي" },
    price: 90,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Dammam", ar: "الدمام" },
    description: {
      en: "Competitive swimmer registration allowing participation in Saudi Aquatics Federation meets and championships.",
      ar: "تسجيل سباح تنافسي يتيح المشاركة في لقاءات وبطولات الاتحاد السعودي للرياضات المائية."
    },
    requirements: {
      en: ["Valid Saudi ID or Iqama", "Time qualification standards (age group specific)", "Medical clearance"],
      ar: ["الهوية الوطنية أو الإقامة الصالحة", "معايير التأهل الزمني (خاصة بالفئة العمرية)", "إفراج طبي"]
    },
    benefits: {
      en: ["Compete in national championships", "National ranking points", "Access to elite training camps"],
      ar: ["المنافسة في البطولات الوطنية", "نقاط التصنيف الوطني", "الوصول إلى المعسكرات التدريبية النخبوية"]
    },
    featured: false,
    prerequisiteCourseIds: ["swimming-competitive-training"]
  },
  {
    id: "swimming-coach-license",
    sportId: "swimming",
    name: { en: "Swimming Coach License — Level 1", ar: "رخصة مدرب السباحة — المستوى 1" },
    type: "coach",
    typeLabel: { en: "Coach", ar: "مدرب" },
    price: 260,
    currency: "SAR",
    validityMonths: 24,
    validityLabel: { en: "2 years", ar: "سنتان" },
    location: { en: "Online", ar: "عبر الإنترنت" },
    description: {
      en: "Level 1 coaching license for swimming instructors. Required to teach learn-to-swim programs and coach recreational swimmers officially.",
      ar: "رخصة تدريب المستوى 1 لمدربي السباحة. مطلوبة لتعليم برامج تعلم السباحة وتدريب السباحين الترفيهيين رسميًا."
    },
    requirements: {
      en: ["Completion of SAF Level 1 Coach Course", "Current lifesaving qualification", "First Aid & CPR certification"],
      ar: ["إتمام دورة مدرب المستوى 1 للاتحاد السعودي", "مؤهل الإنقاذ الحالي", "شهادة الإسعافات الأولية والإنعاش القلبي الرئوي"]
    },
    benefits: {
      en: ["Coach recreational and learn-to-swim programs", "Eligible for Level 2 advanced course", "SAF membership included"],
      ar: ["تدريب برامج الترفيه وتعلم السباحة", "مؤهل لدورة المستوى 2 المتقدمة", "عضوية الاتحاد السعودي مشمولة"]
    },
    featured: true
  },

  // Rock Climbing licenses
  {
    id: "recreational-climber-license",
    sportId: "rock-climbing",
    name: { en: "Recreational Climber License", ar: "رخصة المتسلق الترفيهي" },
    type: "player",
    typeLabel: { en: "Player", ar: "لاعب" },
    price: 80,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "AlUla", ar: "العُلا" },
    description: {
      en: "Official recreational climbing license providing access to SCMF-registered indoor and outdoor climbing venues, with basic liability coverage.",
      ar: "رخصة تسلق ترفيهية رسمية توفر الوصول إلى مواقع التسلق الداخلية والخارجية المسجلة لدى الاتحاد، مع تغطية أساسية للمسؤولية."
    },
    requirements: {
      en: ["Valid Saudi ID or Iqama", "Basic belay competency test", "Signed safety waiver"],
      ar: ["الهوية الوطنية أو الإقامة الصالحة", "اختبار كفاءة التحكم الأساسي", "إخلاء مسؤولية السلامة الموقع"]
    },
    benefits: {
      en: ["Access to all registered climbing venues", "Discounted gear rental", "Liability insurance included"],
      ar: ["الوصول إلى جميع مواقع التسلق المسجلة", "استئجار معدات بأسعار مخفضة", "تأمين المسؤولية مشمول"]
    },
    featured: true,
    prerequisiteCourseIds: ["intro-indoor-climbing"]
  },
  {
    id: "climbing-instructor-license",
    sportId: "rock-climbing",
    name: { en: "Certified Climbing Instructor License", ar: "رخصة مدرب تسلق معتمد" },
    type: "coach",
    typeLabel: { en: "Coach", ar: "مدرب" },
    price: 200,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Professional instructor license to teach climbing legally at SCMF-registered venues. Covers both indoor wall instruction and guided outdoor climbing.",
      ar: "رخصة مدرب احترافي لتعليم التسلق بشكل قانوني في الأماكن المسجلة لدى الاتحاد. يغطي تعليم الجدران الداخلية والتسلق الخارجي الموجه."
    },
    requirements: {
      en: ["Completion of SCMF Instructor Course", "1+ year climbing experience", "Wilderness First Aid certification", "Current Recreational Climber License"],
      ar: ["إتمام دورة المدرب لدى الاتحاد", "خبرة تسلق سنة أو أكثر", "شهادة الإسعافات الأولية في البرية", "رخصة المتسلق الترفيهي الحالية"]
    },
    benefits: {
      en: ["Legally instruct at all registered venues", "Professional liability insurance", "Access to SCMF instructor network"],
      ar: ["التدريب القانوني في جميع الأماكن المسجلة", "تأمين المسؤولية المهنية", "الوصول إلى شبكة مدربي الاتحاد"]
    },
    featured: true,
    prerequisiteCourseIds: ["outdoor-climbing-safety"]
  },

  // Volleyball licenses
  {
    id: "volleyball-player-license",
    sportId: "volleyball",
    name: { en: "Volleyball Player License", ar: "رخصة لاعب الكرة الطائرة" },
    type: "player",
    typeLabel: { en: "Player", ar: "لاعب" },
    price: 95,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Jeddah", ar: "جدة" },
    description: {
      en: "Player registration license for participation in Saudi Volleyball Federation official competitions, covering both indoor and beach volleyball.",
      ar: "رخصة تسجيل لاعب للمشاركة في المسابقات الرسمية للاتحاد السعودي للكرة الطائرة، تشمل الكرة الطائرة الداخلية والشاطئية."
    },
    requirements: {
      en: ["Valid Saudi ID or Iqama", "Club registration proof", "Medical clearance"],
      ar: ["الهوية الوطنية أو الإقامة الصالحة", "إثبات تسجيل النادي", "إفراج طبي"]
    },
    benefits: {
      en: ["Compete in official SVF tournaments", "Player ranking points", "Access to national team trials"],
      ar: ["المنافسة في بطولات الاتحاد السعودي الرسمية", "نقاط تصنيف اللاعبين", "الوصول إلى اختبارات المنتخب الوطني"]
    },
    featured: false
  },
  {
    id: "volleyball-coach-license",
    sportId: "volleyball",
    name: { en: "Volleyball Coaching License — Level 1", ar: "رخصة مدرب الكرة الطائرة — المستوى 1" },
    type: "coach",
    typeLabel: { en: "Coach", ar: "مدرب" },
    price: 240,
    currency: "SAR",
    validityMonths: 24,
    validityLabel: { en: "2 years", ar: "سنتان" },
    location: { en: "Online", ar: "عبر الإنترنت" },
    description: {
      en: "Entry-level coaching certification recognized by the Saudi Volleyball Federation. Enables coaching school teams, community clubs, and recreational leagues.",
      ar: "شهادة تدريب مستوى مبتدئ معترف بها من الاتحاد السعودي للكرة الطائرة. تمكّن من تدريب فرق المدارس والأندية المجتمعية والدوريات الترفيهية."
    },
    requirements: {
      en: ["Completion of SVF Level 1 Coaching Course", "Valid Saudi ID or Iqama", "Basic volleyball playing experience"],
      ar: ["إتمام دورة التدريب المستوى 1 للاتحاد السعودي", "الهوية الوطنية أو الإقامة الصالحة", "خبرة أساسية في لعب الكرة الطائرة"]
    },
    benefits: {
      en: ["Coach officially at Level 1 competitions", "SVF member benefits", "Pathway to Level 2 certification"],
      ar: ["التدريب رسميًا في مسابقات المستوى 1", "مزايا عضو الاتحاد السعودي", "مسار للحصول على شهادة المستوى 2"]
    },
    featured: false,
    prerequisiteCourseIds: ["volleyball-coaching-intro"]
  },

  // Boxing licenses
  {
    id: "boxing-amateur-license",
    sportId: "boxing",
    name: { en: "Amateur Boxing License", ar: "رخصة ملاكمة هواة" },
    type: "player",
    typeLabel: { en: "Player", ar: "لاعب" },
    price: 150,
    currency: "SAR",
    validityMonths: 12,
    validityLabel: { en: "1 year", ar: "سنة واحدة" },
    location: { en: "Riyadh", ar: "الرياض" },
    description: {
      en: "Official amateur boxing license allowing participation in Saudi Boxing Federation sanctioned bouts and tournaments at regional and national levels.",
      ar: "رخصة ملاكمة هواة رسمية تتيح المشاركة في المباريات والبطولات المعتمدة من الاتحاد السعودي للملاكمة على المستويين الإقليمي والوطني."
    },
    requirements: {
      en: ["Valid Saudi ID or Iqama", "Medical fitness certificate", "Completion of basic boxing course"],
      ar: ["الهوية الوطنية أو الإقامة الصالحة", "شهادة اللياقة الطبية", "إتمام دورة الملاكمة الأساسية"]
    },
    benefits: {
      en: ["Compete in official SBxF bouts", "Access to national team tryouts", "Injury insurance coverage"],
      ar: ["المنافسة في مباريات الاتحاد الرسمية", "الوصول إلى اختبارات المنتخب الوطني", "تغطية تأمين الإصابات"]
    },
    featured: true,
    prerequisiteCourseIds: ["boxing-fundamentals"]
  },
  {
    id: "boxing-coach-license",
    sportId: "boxing",
    name: { en: "Boxing Coaching License", ar: "رخصة مدرب ملاكمة" },
    type: "coach",
    typeLabel: { en: "Coach", ar: "مدرب" },
    price: 350,
    currency: "SAR",
    validityMonths: 24,
    validityLabel: { en: "2 years", ar: "سنتان" },
    location: { en: "Online", ar: "عبر الإنترنت" },
    description: {
      en: "Coaching certification recognized by the Saudi Boxing Federation. Required to train and corner fighters in official competitions.",
      ar: "شهادة تدريب معترف بها من الاتحاد السعودي للملاكمة. مطلوبة لتدريب الملاكمين والعمل في الزاوية في المسابقات الرسمية."
    },
    requirements: {
      en: ["Completion of SBxF Coaching Course", "Valid Saudi ID or Iqama", "First Aid certification", "1+ year boxing experience"],
      ar: ["إتمام دورة تدريب الاتحاد السعودي للملاكمة", "الهوية الوطنية أو الإقامة الصالحة", "شهادة الإسعافات الأولية", "خبرة سنة أو أكثر في الملاكمة"]
    },
    benefits: {
      en: ["Train and corner fighters officially", "Access to SBxF coaching seminars", "Career development pathway"],
      ar: ["تدريب الملاكمين والعمل في الزاوية رسميًا", "الوصول إلى ندوات الاتحاد التدريبية", "مسار التطور المهني"]
    },
    featured: false,
    prerequisiteCourseIds: ["boxing-coaching-certification"]
  }
];

export const pathways: Pathway[] = [
  {
    id: "competitive-player",
    name: { en: "Competitive Player", ar: "لاعب تنافسي" },
    description: {
      en: "Register as a player, sharpen your skills, and qualify to compete in official leagues",
      ar: "سجّل كلاعب، طوّر مهاراتك، وتأهل للمنافسة في الدوريات الرسمية",
    },
    steps: [
      { type: "course", id: "football-coaching-foundations" },
      { type: "license", id: "football-player-license" },
    ],
  },
  {
    id: "coaching-career",
    name: { en: "Pro Coaching License", ar: "رخصة التدريب الاحترافي" },
    description: {
      en: "Complete the full coaching track — from foundations through advanced Level B certification",
      ar: "أكمل المسار التدريبي الكامل — من الأساسيات إلى شهادة المستوى B المتقدمة",
    },
    steps: [
      { type: "course", id: "football-coaching-foundations" },
      { type: "license", id: "football-coach-license" },
      { type: "course", id: "football-advanced-tactics" },
      { type: "license", id: "football-coach-license-b" },
    ],
  },
];

export const getLicensesBySport = (sportId: string): License[] => licenses.filter(l => l.sportId === sportId);
export const getLicenseById = (id: string): License | undefined => licenses.find(l => l.id === id);
export const getFeaturedLicenses = (): License[] => licenses.filter(l => l.featured);
export const getPathways = (): Pathway[] => pathways;
export const getLicenseRequiringCourse = (courseId: string): License | undefined =>
  licenses.find(l => l.prerequisiteCourseIds?.includes(courseId));
