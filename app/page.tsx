import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Utility from "@/components/Utility";
import WhyGrow from "@/components/WhyGrow";
import Roadmap from "@/components/Roadmap";
import ZeroLiquidity from "@/components/ZeroLiquidity";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Utility />
      <WhyGrow />
      <Roadmap />
      <ZeroLiquidity />
      <Community />
      <Footer />
    </main>
  );
}
