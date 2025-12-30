import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Home, RefreshCw, FileText, Building2, Landmark } from "lucide-react";

const lendingTypes = [
  {
    icon: Home,
    title: "Owner-Occupied Home Loans",
    description: "Securing the right home loan is about more than just the rate. We focus on structure, flexibility, and long-term cost efficiency.",
    features: [
      "Principal & Interest or Interest Only options",
      "Fixed, variable, or split rate structures",
      "Offset account optimisation",
      "Redraw facility access",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Property Lending",
    description: "Building a property portfolio requires careful planning. We help maximise your borrowing capacity while managing risk.",
    features: [
      "Portfolio structuring strategies",
      "Cross-collateralisation analysis",
      "Cash flow optimisation",
      "Equity release planning",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refinancing Solutions",
    description: "Refinancing isn't just about a lower rate. It's an opportunity to restructure, consolidate, and position for growth.",
    features: [
      "Rate reduction analysis",
      "Debt consolidation",
      "Equity access for investment",
      "Loan structure optimisation",
    ],
  },
  {
    icon: FileText,
    title: "Complex Income Lending",
    description: "Self-employed and variable income borrowers often face unnecessary barriers. We navigate the complexities.",
    features: [
      "Low-doc and alt-doc options",
      "Contractor income assessment",
      "Trust and company structures",
      "Multiple income stream analysis",
    ],
  },
  {
    icon: Building2,
    title: "Commercial & SMSF Lending",
    description: "Specialised lending for commercial property acquisition or SMSF borrowing requires expertise and access.",
    features: [
      "Commercial property finance",
      "SMSF compliant loans",
      "Business premises acquisition",
      "Mixed-use property lending",
    ],
  },
  {
    icon: Landmark,
    title: "Professional Packages",
    description: "Many lenders offer exclusive terms for high-earning professionals. We ensure you access these benefits.",
    features: [
      "Reduced LMI thresholds",
      "Higher borrowing capacity",
      "Discounted rates and fees",
      "Streamlined approval processes",
    ],
  },
];

const ProfessionalLending = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
              Professional Lending Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive lending services tailored for professionals, investors, and borrowers with sophisticated requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Lending Types */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="space-y-16">
            {lendingTypes.map((type, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
              >
                <div>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mb-4">
                    {type.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {type.description}
                  </p>
                </div>
                <div className="bg-background rounded-xl p-8 border border-border/50">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground">
              Discuss Your Lending Requirements
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Every borrower's situation is unique. Let's explore the right solution for you.
            </p>
            <div className="mt-10">
              <Button asChild size="xl" variant="gold">
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfessionalLending;
