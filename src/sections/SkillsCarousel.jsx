import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Shield, 
  Terminal as TermIcon, 
  Layers, 
  Database, 
  Globe, 
  Code, 
  Lock, 
  FileCode, 
  Monitor, 
  Brackets 
} from 'lucide-react';

export function SkillsCarousel({ isHackerMode }) {
  // 1. Kalit so'zlar aniq moslangan va tekshirilgan yuqori sifatli rasmlar
  const skillImages = {
    // Dev Mode
    'HTML & CSS': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    'Tailwind CSS': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    'JavaScript': 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80',
    'TypeScript': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    'React.js': 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=1200&q=80',
    'Next.js': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    'Node.js': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',

    // Hacker Mode
    'Linux': 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    'Bash OS': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    'Nmap': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    'Wireshark': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    'Metasploit': 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80',
    'Burp Suite': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    'Python Script': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  };

  // 2. Muhandislik tavsiflari
  const skillDescriptions = {
    'HTML & CSS': 'Modern semantic markup structures combined with responsive layouts and fluid core styles.',
    'Tailwind CSS': 'Utility-first styling infrastructure optimized for rapid interface design directly inside components.',
    'JavaScript': 'Asynchronous programming core designed for dynamic DOM manipulation and modern application logic.',
    'TypeScript': 'Strict type-safe programming language architecture built for scale and preventing runtime errors.',
    'React.js': 'Component-based virtual DOM rendering engine built for high-performance responsive web products.',
    'Next.js': 'Production-ready framework featuring automated server-side rendering, routing optimization, and speed.',
    'Node.js': 'Scalable V8-powered asynchronous runtime server engine designed for event-driven API backends.',

    'Linux': 'Secure Unix-like OS root systems custom tailored for deployment environments and core control.',
    'Bash OS': 'Native command-line scripting pipelines built for repetitive OS task automation and setups.',
    'Nmap': 'Network host mapping and vulnerability discovery platform for active port asset auditing.',
    'Wireshark': 'Interactive network packet analyzer engineered for deep encapsulation protocol validation.',
    'Metasploit': 'Modular exploitation engine framework deployed to test enterprise network perimeter resilience.',
    'Burp Suite': 'Web security suite interception proxy proxy used to audit API endpoints and front-end flaws.',
    'Python Script': 'Versatile object-oriented language for advanced backend tools and low-level system integrations.',
  };

  // 3. Lucide kutubxonasidan har bir elementga mos keluvchi aniq logotiplar (Xatolarsiz kalitlar)
  const iconMap = {
    'HTML & CSS': Brackets,
    'Tailwind CSS': FileCode,
    'JavaScript': Code,
    'TypeScript': Layers,
    'React.js': Cpu,
    'Next.js': Globe,
    'Node.js': Database,

    'Linux': Monitor,
    'Bash OS': TermIcon,
    'Nmap': Shield,
    'Wireshark': Globe,
    'Metasploit': Cpu,
    'Burp Suite': Lock,
    'Python Script': Code
  };

  // Siz so'ragan tillar va vositalarning to'liq va aniq massiv ro'yxati
  const devSkillsFallback = ['HTML & CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js'];
  const hackerSkillsFallback = ['Linux', 'Bash OS', 'Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'Python Script'];

  const rawTools = isHackerMode ? hackerSkillsFallback : devSkillsFallback;
  
  const skillsData = rawTools.map((tool) => {
    const SelectedIcon = iconMap[tool] || Cpu; // Agar ikonka topilmasa fallback Cpu qo'yiladi
    return {
      id: `${isHackerMode ? 'hack' : 'dev'}-${tool.replace(/\s+/g, '-')}`, // ID lar xavfsiz formatga keltirildi
      title: tool,
      category: isHackerMode ? 'SYSTEM INTEGRATION' : 'ENGINEERING PLATFORMS',
      desc: skillDescriptions[tool] || `Professional system implementation with ${tool}.`,
      icon: <SelectedIcon className="w-6 h-6" />,
      bgImage: skillImages[tool] || 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80'
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  const total = skillsData.length;

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 5000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [autoPlay, total]);

  // Rejim (Mode) almashganda karuselni boshiga qaytarish
  useEffect(() => {
    setCurrentIndex(0);
  }, [isHackerMode]);

  const resetAutoPlay = () => {
    setAutoPlay(false);
    clearInterval(autoPlayRef.current);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    resetAutoPlay();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    resetAutoPlay();
  };

  const currentSkill = skillsData[currentIndex] || skillsData[0];

  const textVariant = {
    hidden: (dir) => ({ y: dir > 0 ? 60 : -60, opacity: 0 }),
    visible: { 
      y: 0, opacity: 1, 
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
    },
    exit: (dir) => ({ 
      y: dir > 0 ? -60 : 60, opacity: 0, 
      transition: { duration: 0.4, ease: [0.215, 0.610, 0.355, 1.000] } 
    })
  };

  if (!currentSkill) return null;

  return (
    <section className={`relative w-full h-screen overflow-hidden font-mono select-none z-10 transition-colors duration-700 ${
      isHackerMode ? 'bg-[#02040a]' : 'bg-[#050914]'
    }`}>
      
      {/* Background Image Panel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSkill.id}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
            animate={{ opacity: 0.25, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSkill.bgImage})` }}
          />
        </AnimatePresence>
        
        {/* Gradients */}
        <div className={`absolute inset-0 bg-gradient-to-r via-transparent to-transparent ${
          isHackerMode ? 'from-[#02040a] via-[#02040a]/85' : 'from-[#050914] via-[#050914]/85'
        }`} />
        <div className={`absolute inset-0 bg-gradient-to-t via-transparent ${
          isHackerMode ? 'from-[#02040a] to-[#02040a]/20' : 'from-[#050914] to-[#050914]/20'
        }`} />
      </div>

      {/* Details Container */}
      <div className="absolute left-[8%] top-[45%] transform -translate-y-1/2 z-20 max-w-[550px] w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div 
            key={currentSkill.id} 
            custom={direction}
            initial="hidden" 
            animate="visible" 
            exit="exit" 
            className="space-y-6"
          >
            {/* Category tag */}
            <div className="overflow-hidden h-6 flex items-center">
              <motion.div variants={textVariant} custom={direction} className="flex items-center gap-3">
                <span className={`w-6 h-[2px] rounded-full ${isHackerMode ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                <span className={`text-xs font-bold tracking-[0.25em] ${
                  isHackerMode ? 'text-emerald-500/80' : 'text-blue-400/80'
                }`}>
                  {currentSkill.category}
                </span>
              </motion.div>
            </div>

            {/* Main Title */}
            <div className="overflow-hidden py-1">
              <motion.h1 
                variants={textVariant}
                custom={direction}
                className={`text-4xl md:text-6xl font-black font-sans tracking-tight leading-none ${
                  isHackerMode 
                    ? 'text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]' 
                    : 'text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]'
                }`}
              >
                {currentSkill.title}
              </motion.h1>
            </div>

            {/* Description Text */}
            <div className="overflow-hidden">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm md:text-base leading-relaxed text-slate-400 font-sans tracking-wide max-w-md"
              >
                {currentSkill.desc}
              </motion.p>
            </div>

            {/* Custom Technical Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="pt-2"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border backdrop-blur-md shadow-2xl ${
                isHackerMode 
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400' 
                  : 'bg-blue-950/20 border-blue-500/40 text-blue-400'
              }`}>
                {currentSkill.icon}
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3D Stack Deck Deck Panel */}
      <div className="absolute right-[8%] top-[45%] transform -translate-y-1/2 z-20 hidden lg:flex items-center justify-end w-[450px] h-[400px]">
        <div className="relative w-full h-full flex items-center justify-end">
          <AnimatePresence>
            {Array.from({ length: Math.min(3, total - 1) }).map((_, i) => {
              const cardIndex = (currentIndex + i + 1) % total;
              const card = skillsData[cardIndex];
              if (!card) return null;

              return (
                <motion.div
                  key={card.id}
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                  initial={{ opacity: 0, x: 120, scale: 0.8, rotateY: -25 }}
                  animate={{ 
                    opacity: 1 - i * 0.3, 
                    x: -i * 50, 
                    z: -i * 100,
                    scale: 1 - i * 0.08,
                    rotateY: -15 + i * 5,
                  }}
                  exit={{ opacity: 0, x: -150, scale: 0.8, rotateY: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  className={`absolute w-56 h-80 rounded-2xl bg-cover bg-center border-2 flex flex-col justify-end p-5 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.7)] preserve-3d ${
                    isHackerMode ? 'border-emerald-500/30' : 'border-blue-500/30'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent z-0" />
                  
                  <div className="relative z-10 space-y-1">
                    <span className={`text-[9px] font-bold tracking-widest uppercase block ${
                      isHackerMode ? 'text-emerald-400/70' : 'text-blue-400/70'
                    }`}>
                      {card.category.split(' ')[0]}
                    </span>
                    <h3 className="text-sm font-bold font-sans tracking-wide text-white">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Control Navigation Panel */}
      <div className="absolute bottom-12 left-[8%] right-[8%] z-30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrev}
            className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-x-1 ${
              isHackerMode
                ? 'border-emerald-500/30 bg-emerald-950/10 text-emerald-400 hover:border-emerald-400'
                : 'border-blue-500/30 bg-blue-950/10 text-blue-400 hover:border-blue-400'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 hover:translate-x-1 ${
              isHackerMode
                ? 'border-emerald-500/30 bg-emerald-950/10 text-emerald-400 hover:border-emerald-400'
                : 'border-blue-500/30 bg-blue-950/10 text-blue-400 hover:border-blue-400'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Line */}
        <div className="flex-1 max-w-sm mx-12 hidden md:block">
          <div className={`h-[2px] rounded-full overflow-hidden ${isHackerMode ? 'bg-emerald-950' : 'bg-blue-950'}`}>
            <motion.div 
              className={`h-full rounded-full ${isHackerMode ? 'bg-emerald-400 shadow-[0_0_8px_#10b981]' : 'bg-blue-400 shadow-[0_0_8px_#3b82f6]'}`}
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Status Counter */}
        <div className="flex items-center gap-6">
          <div className="flex items-baseline font-sans">
            <AnimatePresence mode="popLayout">
              <motion.span 
                key={currentIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`text-4xl font-black ${isHackerMode ? 'text-emerald-400' : 'text-blue-400'}`}
              >
                {String(currentIndex + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className="text-xs font-bold text-slate-600 mx-1">/</span>
            <span className="text-xs font-bold text-slate-500">{String(total).padStart(2, '0')}</span>
          </div>

          <div className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${autoPlay ? (isHackerMode ? 'bg-emerald-400' : 'bg-blue-400') : ''}`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${autoPlay ? (isHackerMode ? 'bg-emerald-500' : 'bg-blue-500') : 'bg-slate-700'}`}></span>
          </div>
        </div>

      </div>

    </section>
  );
}