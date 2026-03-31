export interface BilingualText {
  en: string;
  ar: string;
}

export interface Sport {
  id: string;
  icon: string;
  color: string;
  coverColor: string;
  image: string;
  name: BilingualText;
  description: BilingualText;
  shortDescription: BilingualText;
}

export const sports: Sport[] = [
  {
    id: "football",
    icon: "⚽",
    color: "#1a5c38",
    coverColor: "#1a5c38",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",
    name: { en: "Football", ar: "كرة القدم" },
    description: {
      en: "The world's most popular sport. Join local clubs, develop your skills, and compete in regional leagues across Saudi Arabia.",
      ar: "الرياضة الأكثر شعبية في العالم. انضم إلى الأندية المحلية وطور مهاراتك وشارك في الدوريات الإقليمية في جميع أنحاء المملكة العربية السعودية."
    },
    shortDescription: {
      en: "Join clubs and leagues across the Kingdom",
      ar: "انضم إلى الأندية والدوريات في المملكة"
    }
  },
  {
    id: "basketball",
    icon: "🏀",
    color: "#c75b2a",
    coverColor: "#c75b2a",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    name: { en: "Basketball", ar: "كرة السلة" },
    description: {
      en: "Fast-paced and exciting, basketball is growing rapidly in Saudi Arabia. Find your team and hit the court.",
      ar: "كرة السلة رياضة سريعة ومثيرة وتنمو بسرعة في المملكة العربية السعودية. ابحث عن فريقك وانطلق إلى الملعب."
    },
    shortDescription: {
      en: "Fast-paced courts across major cities",
      ar: "ملاعب سريعة في المدن الكبرى"
    }
  },
  {
    id: "swimming",
    icon: "🏊",
    color: "#1a6b8a",
    coverColor: "#1a6b8a",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    name: { en: "Swimming", ar: "السباحة" },
    description: {
      en: "Swim for health, competition, or pure enjoyment. Saudi Arabia offers world-class aquatic facilities for all levels.",
      ar: "اسبح من أجل الصحة أو المنافسة أو المتعة. تتمتع المملكة العربية السعودية بمرافق مائية عالمية المستوى لجميع المستويات."
    },
    shortDescription: {
      en: "World-class aquatic facilities",
      ar: "مرافق مائية عالمية المستوى"
    }
  },
  {
    id: "rock-climbing",
    icon: "🧗",
    color: "#7c4a1e",
    coverColor: "#7c4a1e",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    name: { en: "Rock Climbing", ar: "تسلق الصخور" },
    description: {
      en: "From indoor walls to the stunning natural formations of AlUla, rock climbing in Saudi Arabia is an adventure waiting to be explored.",
      ar: "من الجدران الداخلية إلى التكوينات الطبيعية الرائعة في العُلا، تسلق الصخور في المملكة مغامرة تنتظر الاستكشاف."
    },
    shortDescription: {
      en: "Indoor walls to AlUla's stunning formations",
      ar: "من الجدران الداخلية إلى تكوينات العُلا"
    }
  },
  {
    id: "volleyball",
    icon: "🏐",
    color: "#5a3e8c",
    coverColor: "#5a3e8c",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    name: { en: "Volleyball", ar: "الكرة الطائرة" },
    description: {
      en: "Whether beach or indoor, volleyball is a team sport loved across Saudi Arabia. Find your court and start playing today.",
      ar: "سواء على الشاطئ أو داخل الصالة، كرة الطائرة رياضة جماعية محبوبة في جميع أنحاء المملكة. ابحث عن ملعبك وابدأ اللعب اليوم."
    },
    shortDescription: {
      en: "Beach and indoor courts nationwide",
      ar: "ملاعب شاطئية وداخلية في جميع أنحاء المملكة"
    }
  },
  {
    id: "boxing",
    icon: "🥊",
    color: "#b91c1c",
    coverColor: "#b91c1c",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80",
    name: { en: "Boxing", ar: "الملاكمة" },
    description: {
      en: "Build strength, discipline, and confidence through boxing. Train at top gyms across Saudi Arabia and compete in sanctioned bouts.",
      ar: "ابنِ القوة والانضباط والثقة من خلال الملاكمة. تدرّب في أفضل الصالات في المملكة العربية السعودية ونافس في المباريات المعتمدة."
    },
    shortDescription: {
      en: "Train and compete at top gyms",
      ar: "تدرّب ونافس في أفضل الصالات"
    }
  }
];

export const getSportById = (id: string): Sport | undefined => sports.find(s => s.id === id);
