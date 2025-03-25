
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Advantages from '@/components/Advantages';
import Products from '@/components/Products';
import ServiceArea from '@/components/ServiceArea';
import WorkProcess from '@/components/WorkProcess';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Products />
      <ServiceArea />
      <WorkProcess />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
