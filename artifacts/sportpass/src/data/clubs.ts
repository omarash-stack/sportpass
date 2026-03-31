import type { BilingualText } from "./sports";

export interface Club {
  id: string;
  sportIds: string[];
  name: BilingualText;
  city: BilingualText;
  region: BilingualText;
  address: BilingualText;
  phone: string;
  email: string;
  website: string;
  description: BilingualText;
  memberCount: number;
  founded: number;
  logo: string;
  featured: boolean;
}

export const clubs: Club[] = [
  // Football clubs
  {
    id: "riyadh-fc",
    sportIds: ["football"],
    name: { en: "Riyadh Football Club", ar: "نادي الرياض لكرة القدم" },
    city: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Riyadh Region", ar: "منطقة الرياض" },
    address: { en: "King Fahd Sports City, Riyadh", ar: "مدينة الملك فهد الرياضية، الرياض" },
    phone: "+966 11 200 1234",
    email: "info@riyadhfc.sa",
    website: "www.riyadhfc.sa",
    description: {
      en: "One of Riyadh's oldest football clubs, offering training programs for all ages from youth to senior levels.",
      ar: "أحد أعرق أندية كرة القدم في الرياض، يقدم برامج تدريبية لجميع الأعمار من الناشئين إلى كبار السن."
    },
    memberCount: 450,
    founded: 1985,
    logo: "https://placehold.co/80x80/1a5c38/ffffff?text=RFC",
    featured: true
  },
  {
    id: "jeddah-united",
    sportIds: ["football", "volleyball"],
    name: { en: "Jeddah United Sports Club", ar: "نادي جدة يونايتد الرياضي" },
    city: { en: "Jeddah", ar: "جدة" },
    region: { en: "Makkah Region", ar: "منطقة مكة المكرمة" },
    address: { en: "Al Hamra District, Jeddah", ar: "حي الحمراء، جدة" },
    phone: "+966 12 300 5678",
    email: "contact@jeddahunited.sa",
    website: "www.jeddahunited.sa",
    description: {
      en: "A community football club in the heart of Jeddah, welcoming players of all skill levels.",
      ar: "نادي كرة القدم المجتمعي في قلب جدة، يرحب باللاعبين من جميع المستويات."
    },
    memberCount: 320,
    founded: 1992,
    logo: "https://placehold.co/80x80/c75b2a/ffffff?text=JU",
    featured: false
  },
  {
    id: "eastern-eagles",
    sportIds: ["football", "basketball"],
    name: { en: "Eastern Eagles FC", ar: "نسور الشرقية" },
    city: { en: "Dammam", ar: "الدمام" },
    region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    address: { en: "Prince Mohammed Bin Fahd Stadium, Dammam", ar: "استاد الأمير محمد بن فهد، الدمام" },
    phone: "+966 13 400 9012",
    email: "eagles@easternfc.sa",
    website: "www.easternfc.sa",
    description: {
      en: "Serving the Eastern Province community with competitive football leagues and youth development programs.",
      ar: "يخدم مجتمع المنطقة الشرقية من خلال الدوريات التنافسية وبرامج تطوير الشباب."
    },
    memberCount: 280,
    founded: 1998,
    logo: "https://placehold.co/80x80/1a5c38/ffffff?text=EE",
    featured: true
  },

  // Basketball clubs
  {
    id: "riyadh-hoops",
    sportIds: ["basketball", "boxing"],
    name: { en: "Riyadh Athletic Academy", ar: "أكاديمية الرياض الرياضية" },
    city: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Riyadh Region", ar: "منطقة الرياض" },
    address: { en: "Prince Sultan Sports Complex, Riyadh", ar: "مجمع الأمير سلطان الرياضي، الرياض" },
    phone: "+966 11 500 2345",
    email: "info@riyadhhoops.sa",
    website: "www.riyadhhoops.sa",
    description: {
      en: "Premier basketball academy offering professional coaching, leagues, and training facilities in Riyadh.",
      ar: "أكاديمية كرة السلة الرائدة التي تقدم تدريبًا احترافيًا ودوريات ومرافق تدريب في الرياض."
    },
    memberCount: 210,
    founded: 2005,
    logo: "https://placehold.co/80x80/c75b2a/ffffff?text=RH",
    featured: true
  },
  {
    id: "jeddah-ballers",
    sportIds: ["basketball"],
    name: { en: "Jeddah Ballers", ar: "جدة بولرز" },
    city: { en: "Jeddah", ar: "جدة" },
    region: { en: "Makkah Region", ar: "منطقة مكة المكرمة" },
    address: { en: "Corniche Sports Club, Jeddah", ar: "نادي الكورنيش الرياضي، جدة" },
    phone: "+966 12 600 6789",
    email: "play@jeddahballers.sa",
    website: "www.jeddahballers.sa",
    description: {
      en: "Community-driven basketball club on the Jeddah Corniche, open to all ages and skill levels.",
      ar: "نادي كرة السلة المجتمعي على كورنيش جدة، مفتوح لجميع الأعمار والمستويات."
    },
    memberCount: 175,
    founded: 2010,
    logo: "https://placehold.co/80x80/5a3e8c/ffffff?text=JB",
    featured: false
  },
  {
    id: "eastern-shooters",
    sportIds: ["basketball"],
    name: { en: "Eastern Province Shooters", ar: "رماة المنطقة الشرقية" },
    city: { en: "Al Khobar", ar: "الخبر" },
    region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    address: { en: "Al Khobar Sports Hall, Al Khobar", ar: "قاعة الخبر الرياضية، الخبر" },
    phone: "+966 13 700 3456",
    email: "shooters@epbasket.sa",
    website: "www.epbasket.sa",
    description: {
      en: "Competitive basketball club in Al Khobar with multiple teams across age groups.",
      ar: "نادي كرة السلة التنافسي في الخبر مع فرق متعددة عبر الفئات العمرية."
    },
    memberCount: 145,
    founded: 2008,
    logo: "https://placehold.co/80x80/c75b2a/ffffff?text=ES",
    featured: false
  },

  // Swimming clubs
  {
    id: "riyadh-aquatics",
    sportIds: ["swimming", "volleyball"],
    name: { en: "Riyadh Sports & Aquatics Club", ar: "نادي الرياض الرياضي والمائي" },
    city: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Riyadh Region", ar: "منطقة الرياض" },
    address: { en: "King Abdullah Sports City, Riyadh", ar: "مدينة الملك عبدالله الرياضية، الرياض" },
    phone: "+966 11 800 7890",
    email: "swim@riyadhaquatics.sa",
    website: "www.riyadhaquatics.sa",
    description: {
      en: "Olympic-standard swimming facility offering competitive training and recreational classes for all ages.",
      ar: "منشأة سباحة بمعايير أولمبية تقدم تدريبًا تنافسيًا وفصولًا ترفيهية لجميع الأعمار."
    },
    memberCount: 380,
    founded: 2000,
    logo: "https://placehold.co/80x80/1a6b8a/ffffff?text=RA",
    featured: true
  },
  {
    id: "jeddah-swimmers",
    sportIds: ["swimming"],
    name: { en: "Jeddah Sea Swimmers", ar: "سباحو بحر جدة" },
    city: { en: "Jeddah", ar: "جدة" },
    region: { en: "Makkah Region", ar: "منطقة مكة المكرمة" },
    address: { en: "Red Sea Mall Sports Center, Jeddah", ar: "مركز رياضة ريد سي مول، جدة" },
    phone: "+966 12 900 1234",
    email: "info@jeddahseaSwimmers.sa",
    website: "www.jeddahseaSwimmers.sa",
    description: {
      en: "Swimming club with access to both pool and sea training, leveraging Jeddah's beautiful Red Sea coastline.",
      ar: "نادي سباحة مع الوصول إلى التدريب في حوض السباحة والبحر، مستفيدًا من ساحل البحر الأحمر الجميل في جدة."
    },
    memberCount: 290,
    founded: 2003,
    logo: "https://placehold.co/80x80/1a6b8a/ffffff?text=JS",
    featured: false
  },
  {
    id: "dammam-dolphins",
    sportIds: ["swimming"],
    name: { en: "Dammam Dolphins", ar: "دلافين الدمام" },
    city: { en: "Dammam", ar: "الدمام" },
    region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    address: { en: "Al Noor Sports Complex, Dammam", ar: "مجمع النور الرياضي، الدمام" },
    phone: "+966 13 100 5678",
    email: "dolphins@dammamswim.sa",
    website: "www.dammamswim.sa",
    description: {
      en: "Family-friendly swimming club in Dammam offering lessons, competitive squads, and water polo.",
      ar: "نادي سباحة عائلي في الدمام يقدم دروسًا وفرقًا تنافسية وكرة الماء."
    },
    memberCount: 220,
    founded: 2007,
    logo: "https://placehold.co/80x80/1a6b8a/ffffff?text=DD",
    featured: false
  },

  // Rock Climbing clubs
  {
    id: "jebel-climbing-club",
    sportIds: ["rock-climbing"],
    name: { en: "Jebel Climbing Club", ar: "نادي جبل للتسلق" },
    city: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Riyadh Region", ar: "منطقة الرياض" },
    address: { en: "Al Malaz District, Riyadh", ar: "حي الملز، الرياض" },
    phone: "+966 11 200 3456",
    email: "climb@jebelclub.sa",
    website: "www.jebelclub.sa",
    description: {
      en: "Riyadh's premier climbing club with a fully equipped indoor wall, expert instructors, and regular outdoor expeditions.",
      ar: "النادي الرائد للتسلق في الرياض مع جدار داخلي مجهز بالكامل ومدربين خبراء ورحلات ميدانية منتظمة."
    },
    memberCount: 165,
    founded: 2012,
    logo: "https://placehold.co/80x80/7c4a1e/ffffff?text=JCC",
    featured: true
  },
  {
    id: "alula-rock-academy",
    sportIds: ["rock-climbing"],
    name: { en: "AlUla Rock Academy", ar: "أكاديمية العُلا للصخور" },
    city: { en: "AlUla", ar: "العُلا" },
    region: { en: "Madinah Region", ar: "منطقة المدينة المنورة" },
    address: { en: "Old Town AlUla, AlUla", ar: "البلدة القديمة، العُلا" },
    phone: "+966 14 300 7890",
    email: "academy@alularock.sa",
    website: "www.alularock.sa",
    description: {
      en: "Set amid AlUla's stunning ancient sandstone formations, the academy offers guided climbing experiences tied to Saudi Arabia's rich heritage and Vision 2030 tourism initiatives.",
      ar: "تقع الأكاديمية وسط تكوينات الحجر الرملي القديمة الخلابة في العُلا وتقدم تجارب تسلق موجهة مرتبطة بالتراث السعودي الغني ومبادرات السياحة في رؤية 2030."
    },
    memberCount: 95,
    founded: 2019,
    logo: "https://placehold.co/80x80/7c4a1e/ffffff?text=ARA",
    featured: true
  },
  {
    id: "red-sand-climbers",
    sportIds: ["rock-climbing"],
    name: { en: "Red Sand Climbers", ar: "متسلقو الرمال الحمراء" },
    city: { en: "Jeddah", ar: "جدة" },
    region: { en: "Makkah Region", ar: "منطقة مكة المكرمة" },
    address: { en: "Al Zahraa District, Jeddah", ar: "حي الزهراء، جدة" },
    phone: "+966 12 500 2345",
    email: "info@redsandclimbers.sa",
    website: "www.redsandclimbers.sa",
    description: {
      en: "A passionate community of outdoor and indoor climbers in Jeddah, organizing weekend trips to natural rock sites.",
      ar: "مجتمع متحمس من المتسلقين في الهواء الطلق وداخل الصالة في جدة، ينظم رحلات نهاية الأسبوع إلى مواقع الصخور الطبيعية."
    },
    memberCount: 120,
    founded: 2015,
    logo: "https://placehold.co/80x80/7c4a1e/ffffff?text=RSC",
    featured: false
  },

  // Volleyball clubs
  {
    id: "riyadh-spikers",
    sportIds: ["volleyball"],
    name: { en: "Riyadh Spikers", ar: "سبايكرز الرياض" },
    city: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Riyadh Region", ar: "منطقة الرياض" },
    address: { en: "Prince Faisal Sports Complex, Riyadh", ar: "مجمع الأمير فيصل الرياضي، الرياض" },
    phone: "+966 11 600 6789",
    email: "info@riyadhspikers.sa",
    website: "www.riyadhspikers.sa",
    description: {
      en: "Riyadh's most active volleyball club with separate teams for men, women, and mixed leagues.",
      ar: "نادي الكرة الطائرة الأكثر نشاطًا في الرياض مع فرق منفصلة للرجال والنساء والدوريات المختلطة."
    },
    memberCount: 240,
    founded: 2001,
    logo: "https://placehold.co/80x80/5a3e8c/ffffff?text=RS",
    featured: true
  },
  {
    id: "jeddah-beach-volleyball",
    sportIds: ["volleyball"],
    name: { en: "Jeddah Beach Volleyball", ar: "كرة شاطئ جدة" },
    city: { en: "Jeddah", ar: "جدة" },
    region: { en: "Makkah Region", ar: "منطقة مكة المكرمة" },
    address: { en: "North Corniche Beach, Jeddah", ar: "شاطئ الكورنيش الشمالي، جدة" },
    phone: "+966 12 700 3456",
    email: "beach@jeddahvolley.sa",
    website: "www.jeddahvolley.sa",
    description: {
      en: "Specializing in beach volleyball with stunning Red Sea views, offering recreational and competitive programs.",
      ar: "متخصص في كرة الطائرة الشاطئية مع إطلالات رائعة على البحر الأحمر، يقدم برامج ترفيهية وتنافسية."
    },
    memberCount: 185,
    founded: 2008,
    logo: "https://placehold.co/80x80/5a3e8c/ffffff?text=JBV",
    featured: false
  },
  {
    id: "khobar-volley",
    sportIds: ["volleyball"],
    name: { en: "Khobar Volleyball Club", ar: "نادي الخبر للكرة الطائرة" },
    city: { en: "Al Khobar", ar: "الخبر" },
    region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    address: { en: "Al Khobar Sports Complex, Al Khobar", ar: "المجمع الرياضي بالخبر، الخبر" },
    phone: "+966 13 200 7890",
    email: "volley@khobarvc.sa",
    website: "www.khobarvc.sa",
    description: {
      en: "Growing volleyball club in Al Khobar with an active youth program and adult recreational leagues.",
      ar: "نادي كرة طائرة متنامٍ في الخبر مع برنامج شبابي نشط ودوريات ترفيهية للبالغين."
    },
    memberCount: 155,
    founded: 2011,
    logo: "https://placehold.co/80x80/5a3e8c/ffffff?text=KVC",
    featured: false
  },

  // Boxing clubs
  {
    id: "riyadh-boxing-gym",
    sportIds: ["boxing", "rock-climbing"],
    name: { en: "Riyadh Combat & Climbing Center", ar: "مركز الرياض للقتال والتسلق" },
    city: { en: "Riyadh", ar: "الرياض" },
    region: { en: "Riyadh Region", ar: "منطقة الرياض" },
    address: { en: "Al Malaz District, Riyadh", ar: "حي الملز، الرياض" },
    phone: "+966 11 300 5678",
    email: "info@riyadhboxing.sa",
    website: "www.riyadhboxing.sa",
    description: {
      en: "Premier boxing gym in Riyadh offering professional coaching for beginners to advanced fighters. Home to several national champions.",
      ar: "صالة ملاكمة رائدة في الرياض تقدم تدريبًا احترافيًا من المبتدئين إلى المحترفين. موطن لعدد من الأبطال الوطنيين."
    },
    memberCount: 280,
    founded: 2018,
    logo: "https://placehold.co/80x80/b91c1c/ffffff?text=RBG",
    featured: true
  },
  {
    id: "jeddah-fight-club",
    sportIds: ["boxing"],
    name: { en: "Jeddah Fight Club", ar: "نادي جدة للقتال" },
    city: { en: "Jeddah", ar: "جدة" },
    region: { en: "Makkah Region", ar: "منطقة مكة المكرمة" },
    address: { en: "Al Rawdah District, Jeddah", ar: "حي الروضة، جدة" },
    phone: "+966 12 400 9012",
    email: "info@jeddahfightclub.sa",
    website: "www.jeddahfightclub.sa",
    description: {
      en: "Modern boxing facility with Olympic-standard rings and equipment. Offers group classes, personal training, and youth programs.",
      ar: "منشأة ملاكمة حديثة بحلبات ومعدات بمعايير أولمبية. تقدم دروسًا جماعية وتدريبًا شخصيًا وبرامج للشباب."
    },
    memberCount: 195,
    founded: 2020,
    logo: "https://placehold.co/80x80/b91c1c/ffffff?text=JFC",
    featured: false
  },
  {
    id: "dammam-knockout-gym",
    sportIds: ["boxing"],
    name: { en: "Dammam Knockout Gym", ar: "صالة الدمام نوك أوت" },
    city: { en: "Dammam", ar: "الدمام" },
    region: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    address: { en: "Al Faisaliyah District, Dammam", ar: "حي الفيصلية، الدمام" },
    phone: "+966 13 500 3456",
    email: "info@dammamko.sa",
    website: "www.dammamko.sa",
    description: {
      en: "Eastern Province's top boxing gym. Known for producing competitive amateur fighters and hosting regional tournaments.",
      ar: "أفضل صالة ملاكمة في المنطقة الشرقية. معروفة بإعداد ملاكمين هواة تنافسيين واستضافة البطولات الإقليمية."
    },
    memberCount: 160,
    founded: 2019,
    logo: "https://placehold.co/80x80/b91c1c/ffffff?text=DKG",
    featured: false
  }
];

export const getClubsBySport = (sportId: string): Club[] => clubs.filter(c => c.sportIds.includes(sportId));
export const getClubById = (id: string): Club | undefined => clubs.find(c => c.id === id);
export const getFeaturedClubs = (): Club[] => clubs.filter(c => c.featured);
