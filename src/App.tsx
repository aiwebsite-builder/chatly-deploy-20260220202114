import Hero from './components/Hero';
import Membership from './components/Membership';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      <Hero />
      <Membership />
      <Features />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
