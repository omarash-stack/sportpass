export const sports = [
  {
    id: "football",
    icon: "⚽",
    color: "#1a5c38",
    coverColor: "#1a5c38",
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
    name: { en: "Volleyball", ar: "الكرة الطائرة" },
    description: {
      en: "Whether beach or indoor, volleyball is a team sport loved across Saudi Arabia. Find your court and start playing today.",
      ar: "سواء على الشاطئ أو داخل الصالة، كرة الطائرة رياضة جماعية محبوبة في جميع أنحاء المملكة. ابحث عن ملعبك وابدأ اللعب اليوم."
    },
    shortDescription: {
      en: "Beach and indoor courts nationwide",
      ar: "ملاعب شاطئية وداخلية في جميع أنحاء المملكة"
    }
  }
];

export const getSportById = (id) => sports.find(s => s.id === id);
