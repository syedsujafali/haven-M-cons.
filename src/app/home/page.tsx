import Hero from '../../components/Hero';
import Marquee from '../../components/Marquee';
import PracticeSection from '../../components/PracticeSection';
import PortfolioSection from '../../components/PortfolioSection';
import ProcessSection from '../../components/ProcessSection';
import ServicesSection from '../../components/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ContactSection from '../../components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <div className="relative mx-auto grid max-w-7xl grid-cols-12 gap-0">
        {/* Stats overlaid inside hero */}
      </div>
      <Hero />
      <Marquee />
      <PracticeSection />
      <PortfolioSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
