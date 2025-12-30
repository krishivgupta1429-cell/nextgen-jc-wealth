const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "A comprehensive review of your financial position, goals, and lending requirements.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "We design a tailored lending strategy aligned with your short and long-term objectives.",
  },
  {
    number: "03",
    title: "Lender Selection",
    description: "Matching your profile to the most suitable lenders and negotiating optimal terms.",
  },
  {
    number: "04",
    title: "Settlement & Beyond",
    description: "Guiding you through to settlement and providing ongoing portfolio support.",
  },
];

export function Process() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            How We Work
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A structured process designed for clarity and results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 md:gap-10 items-start"
              >
                <div className="flex-shrink-0">
                  <span className="text-4xl md:text-5xl font-serif font-medium text-primary/20">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <div className="mt-8 border-b border-border/50" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
