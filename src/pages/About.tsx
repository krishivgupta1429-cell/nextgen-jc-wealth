import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We provide honest, transparent advice aligned with your best interests, not ours.",
  },
  {
    icon: BookOpen,
    title: "Expertise",
    description: "Deep knowledge of professional lending, built through years of specialised experience.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Every recommendation is tailored to your unique circumstances and goals.",
  },
];

const qualifications = [
  "Diploma of Finance and Mortgage Broking Management",
  "Certificate IV in Finance and Mortgage Broking",
  "Member of the Mortgage & Finance Association of Australia (MFAA)",
  "Australian Credit Licence Holder / Credit Representative",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
              About NextGen JC
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Strategic mortgage advisory for professionals who expect more from their financial partners.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NextGen JC was founded with a clear purpose: to provide sophisticated mortgage advice to professionals and investors who deserve more than generic lending solutions.
                </p>
                <p>
                  We recognised that high-earning professionals—doctors, lawyers, accountants, and business owners—often face unique challenges when seeking finance. Complex income structures, partnership buy-ins, and investment portfolios require a specialist approach.
                </p>
                <p>
                  Our team brings together deep lending expertise with a genuine understanding of professional career trajectories and wealth-building strategies.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Qualifications & Accreditations
              </h3>
              <ul className="space-y-4">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              The principles that guide every client engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-xl border border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
              Let's Start a Conversation
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Discover how our approach differs from traditional mortgage broking.
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

export default About;
