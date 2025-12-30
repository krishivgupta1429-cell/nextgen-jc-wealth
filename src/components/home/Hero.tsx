import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      <div className="container-wide relative">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
              Strategic home loan advice for{" "}
              <span className="text-primary">complex borrowers</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Tailored mortgage solutions for professionals, investors, and self-employed borrowers who need more than a one-size-fits-all approach.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a Strategy Call
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/professional-lending">
                  Explore Our Approach
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
