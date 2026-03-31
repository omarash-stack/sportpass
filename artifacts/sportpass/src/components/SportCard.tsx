import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

interface Sport {
  id: string;
  image: string;
  color: string;
  name: { en: string; ar: string };
}

interface SportCardProps {
  sport: Sport;
}

export function SportCard({ sport }: SportCardProps) {
  const { lang } = useLanguage();

  return (
    <Link to={`/sports/${sport.id}`}>
      <div
        className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-500"
        data-testid={`sport-card-${sport.id}`}
      >
        {/* Image with grayscale */}
        <img
          src={sport.image}
          alt={lang === "en" ? sport.name.en : sport.name.ar}
          className="sport-card-img absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Sport name */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-white font-bold text-xl">
            {lang === "en" ? sport.name.en : sport.name.ar}
          </h3>
        </div>
      </div>
    </Link>
  );
}
