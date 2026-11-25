import { UIProvider } from "@/components/ui-context";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhyEmpowers from "@/components/WhyEmpowers";
import Programs from "@/components/Programs";
import Journey from "@/components/Journey";
import Guarantee from "@/components/Guarantee";
import Outcomes from "@/components/Outcomes";
import Testimonials from "@/components/Testimonials";
import Mentors from "@/components/Mentors";
import Community from "@/components/Community";
import BrochureCTA from "@/components/BrochureCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <UIProvider>
      <Nav />
      <main>
        <Hero />
        <div className="brutal-bar" />
        <Partners />
        <WhyEmpowers />
        <div className="brutal-bar" />
        <Programs />
        <Journey />
        <Guarantee />
        <Outcomes />
        <div className="brutal-bar" />
        <Testimonials />
        <Mentors />
        <Community />
        <BrochureCTA />
        <Contact />
      </main>
      <Footer />
      {/* clears the fixed sticky contact bar */}
      <div aria-hidden className="h-14" />
      <StickyBar />
      <ChatWidget />
    </UIProvider>
  );
}
