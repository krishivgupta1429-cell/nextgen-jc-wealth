import { Link } from "react-router-dom";
import { Home, TrendingUp, RefreshCw, FileText, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Owner-Occupied",
    description: "Strategic financing for your primary residence with optimal structure and competitive rates.",
  },
  {
    icon: TrendingUp,
    title: "Investment Lending",
    description: "Portfolio-focused lending strategies designed to maximise borrowing capacity and cash flow.",
  },
  {
    icon: RefreshCw,
    title: "Refinancing",
    description: "Restructure existing loans to reduce costs, unlock equity, or improve portfolio flexibility.",
  },
  {
    icon: FileText,
    title: "Complex Income",
    description: "Specialist solutions for self-employed, contractor, and variable income borrowers.",
  },
];

export function LendingSolutions() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Lending Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tailored financing across the full spectrum of lending requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              to="/professional-lending"
              className="group p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-2 flex items-center gap-2">
                    {solution.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
