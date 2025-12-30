import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { WhyGenericFails } from "@/components/home/WhyGenericFails";
import { OurApproach } from "@/components/home/OurApproach";
import { LendingSolutions } from "@/components/home/LendingSolutions";
import { Credentials } from "@/components/home/Credentials";
import { Process } from "@/components/home/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhoWeHelp />
      <WhyGenericFails />
      <OurApproach />
      <LendingSolutions />
      <Credentials />
      <Process />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
