import { X, Check } from "lucide-react";

const genericApproach = [
  "Cookie-cutter assessments",
  "Ignoring complex income streams",
  "Rate-focused, not structure-focused",
  "Missing professional-specific lenders",
];

const ourApproach = [
  "Holistic income assessment",
  "Structure-first lending strategy",
  "Access to niche professional lenders",
  "Risk-aware portfolio planning",
];

export function WhyGenericFails() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Why Generic Lending Falls Short
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Standard lending approaches often fail to recognise the unique circumstances of high-earning professionals and investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Generic Approach */}
          <div className="p-8 md:p-10 rounded-xl bg-secondary/50 border border-border/50">
            <h3 className="text-xl font-serif font-medium text-foreground mb-6">
              The Generic Approach
            </h3>
            <ul className="space-y-4">
              {genericApproach.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Approach */}
          <div className="p-8 md:p-10 rounded-xl bg-primary text-primary-foreground">
            <h3 className="text-xl font-serif font-medium mb-6">
              The NextGen JC Approach
            </h3>
            <ul className="space-y-4">
              {ourApproach.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
