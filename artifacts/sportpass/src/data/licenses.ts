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
  description: BilingualText;
  requirements: { en: string[]; ar: string[] };
  benefits: { en: string[]; ar: string[] };
  featured: boolean;
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
    featured: false
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
    featured: false
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
    featured: false
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
    featured: true
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
    featured: true
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
    featured: false
  }
];

export const getLicensesBySport = (sportId: string): License[] => licenses.filter(l => l.sportId === sportId);
export const getLicenseById = (id: string): License | undefined => licenses.find(l => l.id === id);
export const getFeaturedLicenses = (): License[] => licenses.filter(l => l.featured);
