import { Target, Shield, Layers } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategy-Led",
    description: "We begin with your goals, not the rate sheet. Understanding where you want to be shapes every recommendation.",
  },
  {
    icon: Shield,
    title: "Risk-Aware",
    description: "Conservative structuring protects your portfolio during market shifts and life changes.",
  },
  {
    icon: Layers,
    title: "Structure-First",
    description: "The right loan structure today saves significant costs and unlocks opportunities tomorrow.",
  },
];

export function OurApproach() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Our Approach
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A disciplined methodology built on three core principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
