import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding bg-background min-h-[60vh] flex items-center">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-8xl font-serif font-medium text-primary/20">404</span>
            <h1 className="mt-6 text-3xl md:text-4xl font-serif text-foreground">
              Page Not Found
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2" size={18} />
                  Return Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
