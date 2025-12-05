import React, { useState } from 'react';
import { 
  Menu, X, Check, ArrowRight, Download, Phone, Mail, MapPin, 
  PlayCircle, BookOpen, TrendingUp, BarChart2, Activity, Monitor, ShieldCheck, Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { COURSES, SOCIAL_LINKS, TESTIMONIALS, VALUE_PROPS, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from './constants';
import Modal from './components/Modal';
import Section from './components/Section';

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Icon mapping for dynamic course icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="text-brand-yellow" size={32} />;
      case 'TrendingUp': return <TrendingUp className="text-brand-yellow" size={32} />;
      case 'BarChart2': return <BarChart2 className="text-brand-yellow" size={32} />;
      case 'Activity': return <Activity className="text-brand-yellow" size={32} />;
      case 'Monitor': return <Monitor className="text-brand-yellow" size={32} />;
      case 'ShieldCheck': return <ShieldCheck className="text-brand-yellow" size={32} />;
      default: return <BookOpen className="text-brand-yellow" size={32} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-200">
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* --- Header / Navbar --- */}
      <nav className="fixed w-full z-40 bg-brand-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
               {/* Using text logo for now, but configured for an image if needed */}
              <a href="#" className="font-display font-black text-2xl md:text-3xl tracking-tighter">
                GANESH <span className="text-brand-yellow">TRADING</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-brand-yellow transition-colors text-sm font-medium">ABOUT</a>
              <a href="#courses" className="hover:text-brand-yellow transition-colors text-sm font-medium">COURSES</a>
              <a href="#mentorship" className="hover:text-brand-yellow transition-colors text-sm font-medium">MENTORSHIP</a>
              <a href="#contact" className="hover:text-brand-yellow transition-colors text-sm font-medium">CONTACT</a>
              <button 
                onClick={openModal}
                className="bg-brand-yellow text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-brand-yellow/20 text-sm"
              >
                REGISTER NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-gray border-b border-gray-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-brand-yellow">ABOUT</a>
              <a href="#courses" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-brand-yellow">COURSES</a>
              <a href="#mentorship" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-brand-yellow">MENTORSHIP</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-brand-yellow">CONTACT</a>
              <button 
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-brand-yellow text-black font-bold py-3 mt-4 rounded-lg"
              >
                REGISTER NOW
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=2664" 
            alt="Stock Market Graph / BSE Building Abstract" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold tracking-widest mb-6 uppercase">
              India's Fastest Growing Institute
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-4">
              GANESH <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">TRADING ACADEMY</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 font-light mb-8 italic">
              "Profit Yours, Education Ours."
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={openModal}
                className="px-8 py-4 bg-brand-yellow text-brand-black font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-yellow/20 flex items-center justify-center gap-2"
              >
                REGISTER NOW <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} /> WATCH FREE DEMO
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-center md:justify-start gap-2 text-gray-400">
               <Phone size={16} className="text-brand-yellow"/> 
               <span className="font-semibold text-white tracking-wide">{WHATSAPP_DISPLAY}</span>
            </motion.div>
          </motion.div>

          {/* Founder Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }}
            className="hidden md:flex justify-end relative"
          >
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-yellow/20 rounded-full blur-3xl"></div>
            
            <div className="relative border-2 border-brand-yellow/30 p-2 rounded-2xl bg-brand-gray/50 backdrop-blur-sm">
                <img 
                  src="https://picsum.photos/seed/ganesh/500/600" 
                  alt="Ganesh Sir - Founder" 
                  className="rounded-xl shadow-2xl w-full max-w-sm object-cover" 
                  style={{ maxHeight: '500px'}}
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-gray border border-gray-700 p-4 rounded-lg shadow-xl">
                  <p className="text-brand-yellow font-bold text-xl">16+ Years</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Market Experience</p>
                </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- Value Proposition --- */}
      <Section darker id="about">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-brand-yellow">Ganesh Trading?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto">
            We break the barriers to stock market success. No complex jargon, just practical strategies.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {VALUE_PROPS.map((prop, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-brand-gray p-8 rounded-xl border border-gray-800 hover:border-brand-yellow/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-brand-yellow/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors text-brand-yellow">
                <prop.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Friend Referral Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-yellow-500/20 to-brand-gray border border-brand-yellow/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">🤝 Friend Referral Program</h3>
            <p className="text-gray-300">Bring a friend to the academy and unlock exclusive benefits for both!</p>
          </div>
          <button onClick={openModal} className="bg-brand-yellow text-black font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors whitespace-nowrap">
            Refer & Earn
          </button>
        </motion.div>
      </Section>

      {/* --- Courses Section --- */}
      <Section id="courses">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our <span className="text-brand-yellow">Premium Courses</span></h2>
          <p className="text-gray-400">Master every aspect of the market.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-brand-black border border-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-brand-yellow/10 transition-all hover:-translate-y-2 group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-gray rounded-lg border border-gray-700">
                    {getIcon(course.iconName)}
                  </div>
                  <span className="bg-brand-yellow text-black text-[10px] font-bold px-2 py-1 rounded uppercase">Popular</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{course.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Check size={14} className="text-brand-yellow mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button onClick={openModal} className="w-full py-3 border border-gray-700 rounded-lg text-white font-semibold hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all">
                  View Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Mentorship Section --- */}
      <Section darker id="mentorship" className="relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-yellow/5 to-transparent pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Unmatched <span className="text-brand-yellow">Mentorship</span></h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We don't just sell courses; we build traders. Our mentorship program is designed to handhold you through the live markets until you become profitable.
            </p>

            <div className="space-y-6">
              {[
                "Daily Pre-Market Analysis & Trading Plans",
                "Live Market Support & Trade Setups",
                "Professional Risk Control Framework",
                "Weekly Performance Review Meetings",
                "Access to Premium WhatsApp/Telegram Community"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 min-w-[24px]">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center">
                      <Check size={14} className="text-black stroke-[3px]" />
                    </div>
                  </div>
                  <span className="ml-4 text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={openModal} className="mt-10 bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-brand-yellow transition-colors shadow-lg">
              Join Mentorship Program
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-yellow/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1642543348745-03b1219733d9?q=80&w=2670&auto=format&fit=crop" 
              alt="Live Trading Session" 
              className="relative rounded-2xl border border-gray-700 shadow-2xl"
            />
            {/* Stats Card Overlay */}
            <div className="absolute bottom-8 -left-8 bg-brand-gray border border-gray-700 p-6 rounded-xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-yellow/20 rounded-full text-brand-yellow">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10,000+</p>
                  <p className="text-xs text-gray-400 uppercase">Students Guided</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- Success Stories --- */}
      <Section id="testimonials">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Student <span className="text-brand-yellow">Success Stories</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-brand-black p-6 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-brand-yellow/50" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-brand-yellow">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic">"{t.content}"</p>
              <div className="flex text-brand-yellow mt-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- Free Resources (Lead Magnet) --- */}
      <Section darker className="text-center">
        <div className="bg-gradient-to-br from-gray-800 to-brand-black border border-gray-700 rounded-3xl p-8 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Start Your Journey for <span className="text-brand-yellow">FREE</span></h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Not ready to commit? No problem. Download our "Beginner's Market Checklist" PDF and watch 3 premium introductory videos at no cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openModal} className="flex items-center justify-center gap-2 bg-brand-yellow text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors">
              <Download size={20} /> Download Free Starter Kit
            </button>
          </div>
        </div>
      </Section>

      {/* --- Contact & Footer --- */}
      <footer id="contact" className="bg-black pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Info */}
            <div>
              <h3 className="font-display font-black text-2xl tracking-tighter text-white mb-6">
                GANESH <span className="text-brand-yellow">TRADING</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empowering India with financial literacy. Learn the right way to trade and invest with proven strategies and live mentorship.
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.platform} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
                <li><a href="#courses" className="hover:text-brand-yellow transition-colors">Courses</a></li>
                <li><a href="#mentorship" className="hover:text-brand-yellow transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-yellow mt-0.5" />
                  <span>Hyderabad, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-yellow" />
                  <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">{WHATSAPP_DISPLAY}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-yellow" />
                  <a href="mailto:info@ganeshtrading.com" className="hover:text-white transition-colors">info@ganeshtrading.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h4 className="font-bold text-white text-lg mb-6">Drop a Message</h4>
              <form onSubmit={(e) => { e.preventDefault(); openModal(); }} className="space-y-3">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-900 border border-gray-800 rounded p-2 text-sm text-white focus:border-brand-yellow outline-none" />
                <input type="text" placeholder="Mobile Number" className="w-full bg-gray-900 border border-gray-800 rounded p-2 text-sm text-white focus:border-brand-yellow outline-none" />
                <textarea placeholder="Message" rows={2} className="w-full bg-gray-900 border border-gray-800 rounded p-2 text-sm text-white focus:border-brand-yellow outline-none"></textarea>
                <button className="w-full bg-gray-800 hover:bg-brand-yellow hover:text-black text-white text-sm font-bold py-2 rounded transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </div>

          </div>

          <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Ganesh Trading Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;