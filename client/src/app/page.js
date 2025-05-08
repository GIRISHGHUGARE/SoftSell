import ThemeToggle from './components/ThemeToggle'
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { TbLicense } from "react-icons/tb";
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex flex-row items-center">
            <div className='text-2xl'>
              <TbLicense />
            </div>
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              SoftSell
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <ChatWidget />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  )
}
