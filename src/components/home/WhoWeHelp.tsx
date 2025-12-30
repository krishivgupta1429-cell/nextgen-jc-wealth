import { Briefcase, Building2, Calculator, Stethoscope, Scale, Code } from "lucide-react";

const professionals = [
  {
    icon: Stethoscope,
    title: "Medical Professionals",
    description: "Doctors, surgeons, and specialists with complex remuneration structures.",
  },
  {
    icon: Scale,
    title: "Legal Professionals",
    description: "Partners and associates with equity buy-ins and irregular income.",
  },
  {
    icon: Calculator,
    title: "Accountants & Finance",
    description: "CPAs and financial advisors seeking optimised loan structures.",
  },
  {
    icon: Code,
    title: "IT & Tech Leaders",
    description: "Executives with share options, RSUs, and contractor income.",
  },
  {
    icon: Building2,
    title: "Property Investors",
    description: "Portfolio builders requiring sophisticated lending strategies.",
  },
  {
    icon: Briefcase,
    title: "Self-Employed",
    description: "Business owners and directors with complex income documentation.",
  },
];

export function WhoWeHelp() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Who We Help
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We specialise in lending solutions for professionals whose income and circumstances don't fit standard lending criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-lg border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
