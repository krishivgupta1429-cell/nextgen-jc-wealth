import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground">
            Ready for a Strategic Conversation?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Book a complimentary strategy call to discuss your lending requirements and explore how we can help.
          </p>
          <div className="mt-10">
            <Button asChild size="xl" variant="gold">
              <Link to="/contact">
                Book Your Strategy Call
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
