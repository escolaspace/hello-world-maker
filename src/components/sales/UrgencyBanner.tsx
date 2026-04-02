import { useState, useEffect } from "react";
import { Flame } from "lucide-react";

const UrgencyBanner = () => {
  const targetDate = new Date("2026-05-16T09:30:00-03:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) return { dias: 0, horas: 0, min: 0, seg: 0 };
    return {
      dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
      min: Math.floor((diff / (1000 * 60)) % 60),
      seg: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-secondary border-b border-border">
      {/* Top bar - price + countdown */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="bg-gold text-primary-foreground px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
            Lote 01
          </span>
          <span className="text-muted-foreground">
            De <span className="line-through">R$249</span> por apenas{" "}
            <span className="text-gold font-bold">R$29,90</span> — encerra em:
          </span>
        </div>
        <div className="flex gap-2">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="bg-muted text-foreground font-mono font-bold text-sm px-2 py-1 rounded min-w-[36px] text-center">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-muted-foreground uppercase mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-3 px-4 py-1.5 bg-background/50">
        <div className="flex items-center gap-1.5 text-xs text-gold shrink-0">
          <Flame className="w-3.5 h-3.5" />
          <span className="font-medium">30% das vagas preenchidas</span>
        </div>
        <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full gradient-gold rounded-full" style={{ width: "30%" }} />
        </div>
        <span className="text-xs text-muted-foreground shrink-0">Poucos ingressos restantes</span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
