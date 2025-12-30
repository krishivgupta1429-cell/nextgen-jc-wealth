import { Award, Shield, Users } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Licenced & Accredited",
    description: "Fully accredited with major lenders and holding appropriate credit licences.",
  },
  {
    icon: Shield,
    title: "Industry Compliant",
    description: "Operating under strict industry codes of conduct and professional standards.",
  },
  {
    icon: Users,
    title: "Trusted by Professionals",
    description: "A track record of successful outcomes for high-earning clients across industries.",
  },
];

export function Credentials() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Credentials & Authority
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Professional qualifications and industry recognition you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-xl border border-border/50"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
