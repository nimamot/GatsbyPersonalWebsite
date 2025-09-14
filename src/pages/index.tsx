
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Youtube, Coffee, Code, Shield, BarChart3, Bot, Sparkles, Zap, Rocket, Cloud, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Typewriter from "@/components/Typewriter";
import { SectionHeader, Card, Divider } from "@/components/Section";
import LoadingScreen from "@/components/LoadingScreen";
import SEO from "@/components/SEO";
import LeetCodeCard from "@/components/LeetCodeCard";
import LeetCodeStats from "@/components/LeetCodeStats";
import LeetCodeHeatmap from "@/components/LeetCodeHeatmap";
import ProblemsSolvedList from "@/components/ProblemsSolvedList";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import CogsHoverCard from "@/components/CogsHoverCard";
import DataScienceHoverCard from "@/components/DataScienceHoverCard";
import ClientOnly from "@/components/ClientOnly";

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and preload images
    const preloadImages = async () => {
      const imageUrls = [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=200",
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80",
        "https://www.ccn.com/wp-content/uploads/2025/07/bitcoin-price-breakout-or-breakdown-1536x864.webp",
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
        "/static/robotics.png",
        "/static/photography.png"
      ];

      try {
        await Promise.all(
          imageUrls.map(url => {
            return new Promise((resolve) => {
              try {
                const img = new Image();
                img.onload = () => resolve(null);
                img.onerror = () => resolve(null); // Don't fail if image doesn't load
                img.src = url;
              } catch (error) {
                console.log('Error creating image:', error);
                resolve(null);
              }
            });
          })
        );
      } catch (error) {
        console.log('Some images failed to preload');
      }

      // Minimum loading time of 2 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    preloadImages();
  }, []);

  return (
    <>
      <SEO />
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Nav />
        <main className="mx-auto max-w-4xl px-4 sm:px-6">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Fun />
          <Divider />
          <LeetCodeSection />
          <Divider />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }){
  return (
    <motion.a 
      href={href} 
      target={href.startsWith("http") ? "_blank" : undefined} 
      rel="noreferrer" 
      aria-label={label} 
      className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function Hero(){
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28" aria-label="Hero">
      {/* Animated Clouds */}
      <motion.div 
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 left-10 text-gray-300 dark:text-gray-600 opacity-60"
      >
        <Cloud className="w-12 h-12" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-16 right-20 text-gray-300 dark:text-gray-600 opacity-50"
      >
        <Cloud className="w-10 h-10" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, 120, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 10 }}
        className="absolute top-24 left-1/4 text-gray-300 dark:text-gray-600 opacity-40"
      >
        <Cloud className="w-8 h-8" />
      </motion.div>
      
      {/* Animated Grass */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 left-16 text-green-400 dark:text-green-600"
      >
        <Sprout className="w-6 h-6" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-0 right-24 text-green-500 dark:text-green-500"
      >
        <Sprout className="w-5 h-5" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 left-1/3 text-green-600 dark:text-green-400"
      >
        <Sprout className="w-4 h-4" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-1 right-1/3 text-green-400 dark:text-green-600"
      >
        <Sprout className="w-3 h-3" />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        {/* Text Section */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-2xl text-gray-500 dark:text-gray-400 mb-2"
          >
            Hey! I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.6 }} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Nima Motieifard
          </motion.h1>
          <ClientOnly fallback={
            <div className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 mb-10 font-medium">
              Software Engineer
            </div>
          }>
          <Typewriter 
            className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 mb-10 font-medium" 
            phrases={["Software Engineer", "Cybersecurity Enthusiast", "Data Scientist", "ML/AI Explorer", "Coffee Lover", "I like building useful things"]} 
          />
          </ClientOnly>
        </div>
        
        {/* Character Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto w-64 sm:w-80 md:w-96"
        >
          {/* Main Character */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative flex justify-center"
          >
            {/* Human Character */}
            <div className="relative">
              {/* Head */}
              <div className="w-20 h-20 bg-gray-800 dark:bg-gray-200 rounded-full flex items-center justify-center mb-2">
                              <div className="w-16 h-16 bg-gray-600 dark:bg-gray-400 rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-white dark:text-gray-800" />
              </div>
              </div>
              
              {/* Body */}
              <div className="w-16 h-20 bg-blue-500 dark:bg-blue-600 rounded-full mx-auto"></div>
              
              {/* Arms */}
              <div className="absolute top-8 -left-2 w-4 h-12 bg-blue-500 dark:bg-blue-600 rounded-full transform -rotate-12"></div>
              <div className="absolute top-8 -right-2 w-4 h-12 bg-blue-500 dark:bg-blue-600 rounded-full transform rotate-12"></div>
              
              {/* Legs */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-3 h-8 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
                <div className="w-3 h-8 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
              </div>
              
              {/* Sparkles around character */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 text-yellow-400"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -bottom-2 -left-2 text-blue-400"
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-4 -left-4 text-purple-400"
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Companion Dog */}
          <motion.div 
            animate={{ 
              y: [0, -5, 0],
              x: [0, 3, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-0 left-1/4"
          >
            <div className="relative">
              {/* Dog body */}
              <div className="w-12 h-8 bg-amber-600 dark:bg-amber-700 rounded-full"></div>
              {/* Dog head */}
              <div className="w-8 h-8 bg-amber-500 dark:bg-amber-600 rounded-full absolute -top-2 -left-1"></div>
              {/* Dog ears */}
              <div className="w-3 h-4 bg-amber-400 dark:bg-amber-500 rounded-full absolute -top-3 -left-2 transform -rotate-12"></div>
              <div className="w-3 h-4 bg-amber-400 dark:bg-amber-500 rounded-full absolute -top-3 left-1 transform rotate-12"></div>
              {/* Dog tail */}
              <motion.div 
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-6 h-2 bg-amber-600 dark:bg-amber-700 rounded-full absolute -right-2 top-2 transform rotate-45"
              ></motion.div>
            </div>
          </motion.div>
          
          {/* Companion Robot */}
          <motion.div 
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-4 right-1/4"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white dark:text-gray-800" />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-1 -right-1 text-blue-400"
              >
                <Zap className="w-3 h-3" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About(){
  return (
    <section id="about" aria-label="About" className="py-20">
      <SectionHeader id="about" title="About Me" />
      <div className="mt-12 sm:mt-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 sm:gap-6"
        >
          <motion.a 
            href="https://github.com/nimamot" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
                          <Github className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-100" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/nima-motieifard/" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
                          <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-100" />
          </motion.a>
                      <motion.a 
              href="mailto:nima.motieifard@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-100" />
            </motion.a>
        </motion.div>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hi there!</h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hey! I'm Nima, and thanks for stopping by! I'm currently in my 5th year at UBC, majoring in <ClientOnly fallback={<span className="text-blue-600 dark:text-blue-400 font-semibold">Cognitive Systems</span>}><CogsHoverCard><span className="relative inline-block text-purple-600 dark:text-purple-400 font-semibold cursor-help animate-pulse hover:animate-none transition-all duration-300" style={{animation: 'gentle-wiggle 3s ease-in-out infinite'}}>Cognitive Systems</span></CogsHoverCard></ClientOnly> and minoring in <ClientOnly fallback={<span className="text-blue-600 dark:text-blue-400 font-semibold">Data Science</span>}><DataScienceHoverCard><span className="relative inline-block text-blue-600 dark:text-blue-400 font-semibold cursor-help animate-pulse hover:animate-none transition-all duration-300" style={{animation: 'gentle-wiggle 3s ease-in-out infinite'}}>Data Science</span></DataScienceHoverCard></ClientOnly>. When I'm not buried in coursework, you'll probably find me hitting the gym, snapping some photos, or enjoying a good cup of coffee.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            This site is my little corner of the internet where I share projects, thoughts, and whatever else comes to mind. Feel free to explore around!
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            If anything catches your eye or you just want to connect, my socials are above and in the footer. Always up for a coffee chat! :')
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}

function LeetCodeSection() {
  const [solvedProblems, setSolvedProblems] = useState<any[]>([]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        <ClientOnly fallback={
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <div className="text-4xl mb-2">🧠</div>
              <p>Loading LeetCode stats...</p>
            </div>
          </div>
        }>
        <LeetCodeStats username="nimamot" />
        </ClientOnly>
        
        {/* Heatmap and Problems List Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ClientOnly fallback={
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <div className="text-4xl mb-2">📊</div>
                <p>Loading activity heatmap...</p>
              </div>
            </div>
          }>
            <LeetCodeHeatmap 
              username="nimamot" 
              onSolvedProblemsChange={setSolvedProblems}
            />
          </ClientOnly>
          <ClientOnly fallback={
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <div className="text-4xl mb-2">✓</div>
                <p>Loading solved problems...</p>
              </div>
            </div>
          }>
            <ProblemsSolvedList problems={solvedProblems} />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}

function Experience(){
  const items = [
    { 
      company: "Amazon", 
      role: "Software Engineer Intern", 
      when: "May 2024 - Aug 2024", 
      location: "Vancouver, BC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      bullets: [
        "Built a centralized localization system for an internal platform, enabling consistent multilingual support across diverse page types",
        "Integrated with internal APIs and tools to sync user language preferences and ensure seamless cross-platform behavior",
        "Leveraged AWS infrastructure to automate translation workflows and improve reliability across dev and deployment environments"
      ],
      technologies: ["React", "AWS", "Node.js", "TypeScript"]
    },
  ];
  
  return (
    <section id="experience" aria-label="Experience" className="py-20">
      <SectionHeader id="experience" title="Experience" />
      <div className="mx-auto mt-16 max-w-4xl space-y-6">
        {items.map((it, idx) => (
          <motion.details 
            key={idx} 
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
          >
            <summary className="flex cursor-pointer list-none items-start justify-between p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 sm:flex-1 min-w-0">
                <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center">
                  <img 
                    src={it.logo} 
                    alt={`${it.company} logo`} 
                    className="w-full h-full object-contain dark:invert"
                  />
                </div>
                <div className="sm:flex-1 min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{it.role} @ {it.company}</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-2">
                    <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-red-500">📍</div>
                      <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{it.location}</div>
                    </div>
                    <div className="hidden sm:block text-lg text-gray-500 dark:text-gray-500">•</div>
                    <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{it.when}</div>
                  </div>
                </div>
              </div>
              <motion.span 
                className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform duration-300 text-xl sm:text-2xl flex-shrink-0 ml-4"
                whileHover={{ scale: 1.2 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
                  <circle cx="14" cy="14" r="14" fill="white"/>
                  <path d="M8.75 12.25L14 17.5L19.25 12.25" stroke="#19191C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </summary>
            
            <div className="px-4 sm:px-6 md:px-8 pb-8 space-y-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                {it.bullets.map((b, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-gray-400 dark:text-gray-500 mt-2">•</span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Amazon specific image with annotation */}
              {it.company === "Amazon" && (
                <motion.div 
                  className="mt-4 mb-4 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="space-y-4">
                    {/* Image with improved presentation */}
                    <div className="flex justify-center">
                      <img 
                        src="/static/Amazon.png" 
                        alt="Amazon work experience" 
                        className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 p-2"
                      />
                    </div>
                    
                    {/* Day 1 Culture note card */}
                    <motion.div 
                      className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700 rounded-xl p-4 shadow-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <div className="space-y-3">
                        <div className="text-lg font-bold text-orange-600 dark:text-orange-400">
                          My favorite Amazonian Concept:
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          <span className="font-semibold text-orange-700 dark:text-orange-300">Day 1 culture</span> @ Amazon refers to maintaining the startup mindset of constant innovation and customer obsession, treating every day as if it's the beginning of something new.
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              
              <div className="flex flex-wrap gap-3 pt-4">
                {it.technologies.map((tech, i) => (
                  <motion.span 
                    key={i}
                    className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}

function Projects(){
  // Separate projects into two categories
  const softwareEngineering = [
    {
      title: "Leetrack",
      subtitle: "Modern coding practice tracker with analytics & public API",
      desc: "Leetrack solves the common problem of students and job seekers relying on spreadsheets to track their coding practice, while enabling them to share their progress and achievements with others. This full-stack application transforms how interview candidates monitor their progress, showcase their coding journey, and maintain consistency in their coding preparation.\n\n<div class=\"my-6\"><img src=\"/static/leetrack-dashboard.png\" alt=\"Leetrack Dashboard Screenshot\" class=\"w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">🎨 Modern Frontend</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Built with TypeScript, Vite, and Tailwind CSS for a responsive, intuitive user interface that works seamlessly across all devices</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">📊 Analytics Dashboard</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Interactive charts, GitHub-style activity heatmaps, and streak tracking powered by Recharts with 365 days of activity data</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">🔗 Public API</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">RESTful API endpoints with CORS support, rate limiting, and JSON responses under 200ms for embeddable widgets</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">🔒 Secure Backend</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Supabase-powered PostgreSQL database with Row Level Security, real-time subscriptions, and zero-downtime deployments</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">🛡️ Privacy Controls</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Granular privacy controls allowing users to make profiles public/private with opt-in data exposure and 5-minute refresh intervals</span></div></div></div>",
      descImage: "/static/leetrack-dashboard.png", // Leetrack dashboard screenshot
      tech: "React • TypeScript • Vite • Tailwind CSS • Supabase • PostgreSQL • Recharts • RESTful API • CORS • Rate Limiting",
      link: "https://leetrack.vercel.app/",
      github: "https://github.com/nimamot/leetrack",
      color: "from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&q=80" // Coding dashboard/analytics
    },
    {
      title: "TripExpense",
      subtitle: "Smart trip expense tracker with automatic splitting",
      desc: "Full-stack web application that revolutionizes how friends split and track expenses during trips with smart expense tracking and automatic equal splitting.\n\n<div class=\"my-6\"><img src=\"/static/tripExpense.png\" alt=\"Trip Expense Tracker Screenshot\" class=\"w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">💰 Smart Tracking</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Automatic equal splitting with real-time balance calculation and comprehensive expense categorization for seamless trip management</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">👥 Group Management</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Shareable links for easy group creation and member management with secure access controls and role-based permissions</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">📊 Dashboard</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Real-time expense overview with visual charts and detailed transaction history for complete financial transparency</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">📈 Analytics</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">CSV export functionality and AI-powered settlement suggestions for optimal payment distribution and expense insights</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">⚡ Tech Stack</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Next.js 14 with TypeScript, Tailwind CSS, Supabase backend, and Framer Motion animations for seamless user experience</span></div></div></div>",
      tech: "Next.js 14 • TypeScript • Tailwind CSS • Supabase • PostgreSQL • Vercel • Framer Motion",
      link: "#",
      github: "https://github.com/nimamot/TripExpense",
      color: "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80" // Travel/expense tracking
    },
    {
      title: "peerAdvice (nwHacks Hackathon)",
      subtitle: "Peer-to-peer advising platform",
      desc: "Designed and developed a peer-to-peer advising platform that connects students with mentors for personalized guidance and support.\n\n<div class=\"my-6\"><img src=\"/static/peerAdvice.png\" alt=\"PeerAdvice Platform Screenshot\" class=\"w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">🔐 Authentication</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Google OAuth and Firebase integration for secure user registration and login with seamless social authentication</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">📅 Scheduling</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Calendly API integration for seamless mentor-student meeting coordination and automated appointment management</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">🗄️ Database</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">PostgreSQL backend for storing user profiles, appointments, and conversation history with robust data management</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">🎨 Frontend</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">HTML, CSS, and JavaScript for intuitive user experience and responsive design across all devices</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">⚡ Agile Dev</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Applied Agile methodologies for efficient project management and collaborative development in hackathon environment</span></div></div></div>",
      tech: "Python • Flask • PostgreSQL • Google OAuth • Firebase • Calendly API • HTML • CSS • JavaScript",
      link: "https://github.com/nimamot/peer_Advice",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" // Teamwork/peer advice
    },
    {
      title: "mAssenger (Featured by Brain Station)",
      subtitle: "iOS chat & media app",
      desc: "Constructed a comprehensive messenger app for iOS that enables users to create accounts, connect with others, and share multimedia content seamlessly.\n\n<div class=\"my-6\"><img src=\"/static/Massenger.png\" alt=\"mAssenger iOS App Screenshot\" class=\"w-full max-w-lg mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">🔐 Authentication</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Email-based account creation and login with secure Firebase cloud services integration for reliable user management</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">🔍 User Discovery</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Search functionality to find and connect with other users on the platform with intuitive discovery features</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">📱 Multimedia</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Support for texts, pictures, videos, and location sharing in conversations with rich media capabilities</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">☁️ Cloud Storage</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Firebase backend for storing user data, conversations, and media with automatic synchronization across devices</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">📱 iOS Native</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Native Swift and Ruby implementation for optimal performance and seamless user experience on iOS devices</span></div></div></div>",
      tech: "Swift • Ruby • Firebase • iOS",
      link: "https://github.com/nimamot/Massenger", 
      color: "from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=200" // iOS Messenger (phone chat)
    },
    {
      title: "La Letra",
      subtitle: "Spanish learning with music",
      desc: "Interactive Spanish learning platform that combines music and language education for engaging vocabulary and grammar practice.\n\n<div class=\"my-6\"><img src=\"/static/laLetra.png\" alt=\"La Letra Spanish Learning Platform Screenshot\" class=\"w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">🎵 Song Learning</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Interactive platform using music to teach Spanish vocabulary and grammar in an engaging and memorable way</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">🌐 Web App</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Django-powered backend with HTML and CSS frontend for responsive user experience across all devices</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">☁️ Cloud Hosting</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">PythonAnywhere hosting for reliable and accessible online learning platform with 24/7 availability</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">📚 Content</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Structured lessons and practice exercises integrated with musical content for comprehensive learning</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">🎨 Interface</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Intuitive design for seamless learning experience across different devices with user-friendly navigation</span></div></div></div>",
      tech: "Django • HTML • CSS • PythonAnywhere",
      link: "https://nimamot.github.io/Spanish/",
      color: "from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
    },
  ];

  const dataScience = [
    {
      title: "QuantAlgo",
      subtitle: "Real-time trading analysis platform with ML predictions",
      desc: "Comprehensive quantitative trading analysis platform built with Streamlit providing real-time financial data analysis, technical indicators, backtesting capabilities, and sentiment analysis.\n\n<div class=\"my-6\"><img src=\"/static/quant.png\" alt=\"Quantitative Trading Analysis Platform Screenshot\" class=\"w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">📊 Real-time Analysis</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Live market data processing with Yahoo Finance API integration for accurate trading insights and real-time market monitoring</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">📈 Technical Indicators</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Moving average crossover strategies, RSI mean reversion, and volatility analysis with comprehensive backtesting capabilities</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">💭 Sentiment Analysis</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">VADER sentiment analysis from Reddit and Google News to gauge market sentiment and social media impact</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">📊 Interactive Charts</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Plotly-powered charts and graphs for comprehensive data visualization and interactive financial analysis</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">🌐 Web Interface</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">User-friendly Streamlit web application for easy access to trading tools and analytics across all devices</span></div></div></div>",
      tech: "Python • Streamlit • Pandas • NumPy • Plotly • Yahoo Finance API • VADER Sentiment",
      link: "https://quantalgo.streamlit.app",
      github: "https://github.com/shariqimran/Quant",
      color: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=80" // Trading charts
    },
    {
      title: "Automated Financial Analysis Pipeline",
      subtitle: "Cloud-based financial analytics",
      desc: "Designed and implemented a scalable data pipeline using AWS Lambda, S3, and DynamoDB to automate financial statement analysis and generate comprehensive reports.\n\n<div class=\"my-6\"><img src=\"/static/financialPipeline.png\" alt=\"Automated Financial Analysis Pipeline Screenshot\" class=\"w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:sm:w-40 flex-shrink-0\">☁️ Cloud Infrastructure</span><span class=\"text-gray-700 dark:text-gray-300 sm:sm:flex-1\">AWS Lambda, S3, and DynamoDB for scalable data processing and storage with serverless architecture</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:sm:w-40 flex-shrink-0\">📊 Data Processing</span><span class=\"text-gray-700 dark:text-gray-300 sm:sm:flex-1\">Automated analysis of user-uploaded CSV financial statements with comprehensive reporting and insights</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:sm:w-40 flex-shrink-0\">🔍 Analytics</span><span class=\"text-gray-700 dark:text-gray-300 sm:sm:flex-1\">Flagged transaction detection, spending trend visualization, and recurring transaction analysis</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:sm:w-40 flex-shrink-0\">📄 Report Generation</span><span class=\"text-gray-700 dark:text-gray-300 sm:sm:flex-1\">Automated creation of detailed financial analysis reports for end users with professional formatting</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:sm:w-40 flex-shrink-0\">🐍 Python Stack</span><span class=\"text-gray-700 dark:text-gray-300 sm:sm:flex-1\">Leveraged Python for data processing, visualization, and machine learning insights with robust libraries</span></div></div></div>",
      tech: "AWS Lambda • S3 • DynamoDB • Python • Data Science • Cloud Computing",
      link: "https://github.com/nimamot/AWS-Financial-Data-Pipeline",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80" // Cloud data pipeline
    },
    {
      title: "Bitcoin Price Prediction",
      subtitle: "Crypto price forecasting",
      desc: "Built a comprehensive machine learning pipeline using multiple algorithms to forecast Bitcoin prices with advanced feature engineering and optimization techniques.\n\n<div class=\"my-6\"><img src=\"/static/btcPrediction.png\" alt=\"Bitcoin Price Prediction Model Screenshot\" class=\"w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700\" /></div>\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">🤖 ML Models</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Linear Regression, KNN, Random Forest, XGBoost, CatBoost, and LSTM for comprehensive price prediction</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">⚙️ Feature Engineering</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Advanced techniques to extract meaningful patterns from time-series cryptocurrency data with domain expertise</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">🎯 Optimization</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Systematic hyperparameter tuning to enhance model accuracy and capture temporal dependencies</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">🔄 Preprocessing</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Automated data cleaning and transformation pipelines for optimal model performance and reliability</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">📈 Time Series</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Advanced regression analysis to uncover meaningful patterns in cryptocurrency market data and trends</span></div></div></div>",
      tech: "Python • Machine Learning • XGBoost • CatBoost • LSTM • Time Series • Feature Engineering",
      link: "https://github.com/nimamot/Price_prediction",
      color: "from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20",
      image: "https://www.ccn.com/wp-content/uploads/2025/07/bitcoin-price-breakout-or-breakdown-1536x864.webp" // Bitcoin coin and chart
    },
    {
      title: "Sports Hub",
      subtitle: "Sports data management",
      desc: "Implemented a comprehensive relational database system for sports management using Oracle DB and SQL with advanced data organization and user-friendly web interface.\n\n<div class=\"mt-6\"><h3 class=\"text-xl font-bold text-gray-900 dark:text-white mb-4\">🚀 Key Features & Tech Stack</h3><div class=\"space-y-4\"><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-blue-600 dark:text-blue-400 font-semibold sm:w-40 flex-shrink-0\">🗄️ Database Design</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Oracle DB implementation with comprehensive data organization for sports management and analytics</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-green-600 dark:text-green-400 font-semibold sm:w-40 flex-shrink-0\">🔍 SQL Operations</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Complex queries and data manipulation for powerful insights and analytics with advanced database operations</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-purple-600 dark:text-purple-400 font-semibold sm:w-40 flex-shrink-0\">🌐 Web Interface</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">User-friendly web application for efficient database interaction and data visualization across devices</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-orange-600 dark:text-orange-400 font-semibold sm:w-40 flex-shrink-0\">🛡️ Error Handling</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Robust input validation and error handling for reliable user experience and data integrity</span></div><div class=\"flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4\"><span class=\"text-pink-600 dark:text-pink-400 font-semibold sm:w-40 flex-shrink-0\">📊 Data Management</span><span class=\"text-gray-700 dark:text-gray-300 sm:flex-1\">Comprehensive sports data organization with efficient storage and retrieval systems for optimal performance</span></div></div></div>",
      tech: "Oracle DB • SQL • Data Visualization • Web Interface • Data Management",
      link: "#",
      github: "https://github.com/nimamot/SportsStats",
      color: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80" // Sports analytics dashboard
    },
  ];
  
  const more = [
    { title: "Personal Website", desc: "Modern portfolio site with animations and dark mode", tech: "Gatsby • React • TypeScript • Tailwind CSS • Framer Motion", emoji: "🌐", github: "https://github.com/nimamot/GatsbyPersonalWebsite" },
    { title: "Old Personal Website", desc: "Portfolio site with projects and blog", tech: "Django • HTML • CSS • PythonAnywhere", emoji: "🌐", github: "https://github.com/nimamot/Personal-Website" },
    { title: "Earn Ace", desc: "Data analysis on Top 500 tennis players to predict career earnings using KNN-regression model", tech: "R • KNN Regression • Data Analysis • ggplot2 • Statistical Modeling", emoji: "🎾", github: "" },
    { title: "NFT Bazaar", desc: "Java-based NFT marketplace application for buying and selling NFTs", tech: "Java • JSON • NFT Marketplace • User Management", emoji: "🖼️", github: "" },
  ];
  
  // Helper to render a project card (collapsible)
  function CollapsibleProjectCard({ project }: { project: any }) {
    const [open, setOpen] = React.useState(false);
        return (
          <div className={`w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm mb-8 transition-all ${open ? 'ring-2 ring-blue-300' : ''}`}> 
        <button
          className="w-full flex items-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8 text-left focus:outline-none"
          style={{ minHeight: '100px' }}
          onClick={() => setOpen((v) => !v)}
        >
          {project.image && (
            <img src={project.image} alt={project.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mr-3 sm:mr-4" />
          )}
          <div className="sm:flex-1">
            <div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</span>
              {project.emoji && <span className="ml-1 text-xl">{project.emoji}</span>}
            </div>
            {project.subtitle && (
              <div className="text-sm sm:text-lg font-medium text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</div>
            )}
          </div>
          <span className="ml-4 flex items-center justify-center">
            <svg
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                points="10,15 18,23 26,15"
                stroke="#1A1A22"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {open && (
          <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
            {project.desc && (
              <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
                {project.desc.includes('<div') ? (
                  <div dangerouslySetInnerHTML={{ __html: project.desc }} />
                ) : (
                  <div className="whitespace-pre-line">
                    {project.desc.split('\n\nKey Features & Tech Stack:')[0]}
                    {project.descImage && (
                      <div className="my-6">
                        <img 
                          src={project.descImage} 
                          alt={`${project.title} screenshot`}
                          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    )}
                    {project.desc.includes('\n\nKey Features & Tech Stack:') && (
                      <>
                        <br />
                        <br />
                        Key Features & Tech Stack:
                        {project.desc.split('\n\nKey Features & Tech Stack:')[1]}
                      </>
                    )}
                  </div>
                )}
                {project.descImage && !project.desc.includes('<div') && (
                  <div className="my-6">
                    <img 
                      src={project.descImage} 
                      alt={`${project.title} screenshot`}
                      className="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                )}
              </div>
            )}
            {project.tech && (
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <span>{project.tech}</span>
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                  </motion.a>
                )}
              </div>
            )}
            {project.date && (
              <div className="text-lg font-bold text-gray-900 dark:text-white mb-2 mt-2 flex items-center gap-2">
                <span className="text-xl">📍</span> {project.date}
              </div>
            )}
            {project.full && (
              <div className="text-gray-700 dark:text-gray-200 text-base mb-4">{project.full}</div>
            )}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-200 rounded-lg text-xs font-medium">{tag}</span>
                ))}
              </div>
            )}
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm">View Project <ExternalLink className="h-4 w-4"/></a>
            )}
          </div>
        )}
      </div>
    );
  }

  // Merge and group projects for single-column display
  const allProjects = [
    { section: 'Software Engineering', projects: softwareEngineering },
    { section: 'Machine Learning & Data Science', projects: dataScience }
  ];

  return (
    <section id="projects" aria-label="Projects" className="py-16">
      <SectionHeader id="projects" title="Projects" />
      <div className="mt-12 max-w-4xl mx-auto">
        {allProjects.map((group, idx) => (
          <div key={group.section} className="mb-12">
            <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-left">{group.section}</h3>
            {group.projects.map((p, i) => (
              <CollapsibleProjectCard key={i} project={p} />
            ))}
          </div>
        ))}
      </div>
      {/* More Projects & Notes section remains unchanged */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h3 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">More Projects</h3>
        <div className="space-y-3">
          {more.map((m, i) => (
            <motion.details 
              key={i} 
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-xl"
                  >
                    {m.emoji}
                  </motion.div>
                  <span className="text-gray-900 dark:text-white">{m.title}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{m.desc}</span>
                </div>
                <motion.svg
                  className="w-5 h-5 text-gray-900 dark:text-gray-100 transition-transform duration-300"
                  whileHover={{ scale: 1.2 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </summary>
              <div className="pt-4 pl-12 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-between">
                <span>{m.tech}</span>
                {m.github && m.github !== "" ? (
                  <motion.a
                    href={m.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 text-gray-900 dark:text-gray-100" />
                  </motion.a>
                ) : null}
              </div>
            </motion.details>
          ))}
        </div>
      </div>

      {/* GitHub Activity Section */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ClientOnly fallback={
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <div className="text-4xl mb-2">📊</div>
              <p>Loading GitHub activity...</p>
            </div>
          </div>
        }>
          <GitHubHeatmap username="nimamot" />
        </ClientOnly>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tech, link, emoji, color, index }: { 
  title: string; 
  desc: string; 
  tech: string; 
  link: string; 
  emoji: string;
  color: string;
  index: number;
}){
  return (
    <motion.div 
      className={`rounded-3xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all bg-gradient-to-br ${color}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-4xl"
        >
          {emoji}
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg"
        >
          🏆
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">{desc}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tech}</p>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          View Project <ExternalLink className="h-4 w-4"/>
        </a>
      </motion.div>
    </motion.div>
  );
}

function Fun(){
  const [selectedActivity, setSelectedActivity] = useState("robotics");

  const sideQuests = [
    { id: "robotics", emoji: "🤖", label: "Robotics", desc: "Building & programming" },
    { id: "muaythai", emoji: "🥋", label: "Muay Thai", desc: "Kickboxing & clinch work" },
    { id: "photography", emoji: "📸", label: "Photography", desc: "Street & portrait shots" },
    { id: "basketball", emoji: "🏀", label: "Basketball", desc: "Pickup games & shooting" },
    { id: "finance", emoji: "💰", label: "Personal Finance", desc: "Budgeting & investing" },
    { id: "markets", emoji: "📈", label: "Financial Markets", desc: "Trading & analysis" },
    { id: "traveling", emoji: "✈️", label: "Traveling", desc: "Exploring new places" },
  ];

  const activityContent: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    achievements?: string[];
    link: string;
    linkText: string;
  }> = {
    robotics: {
      title: "Robotics & Automation 🤖",
      subtitle: "Building intelligent machines",
      description: "Give me a pile of wires and a motor, and I’ll try to make it move! I love building robots that (sometimes) do what I tell them. If it beeps, spins, or follows a line, I’m probably grinning nearby.",
      image: "/static/robotics.png",
      achievements: [
        "Led The Circuit Breakers team in UBC's COGS 300 Robot Tournament",
        "Achieved fastest line following time in class (15 seconds)",
        "Built autonomous robots with sensor integration and adaptive algorithms",
        "Programmed wall-following and object detection systems"
      ],
      link: "https://github.com/nimamot/COGS300",
      linkText: "View Project"
    },
    muaythai: {
      title: "Muay Thai 🥋",
      subtitle: "The art of eight limbs",
      description: "I get punched (and punch back) for fun! Muay Thai is my way to blow off steam, learn cool moves, and occasionally discover new bruises. It’s sweaty, tough, and honestly, a blast.",
      image: "https://i.pinimg.com/736x/32/5e/32/325e3232df8554cb14020ef6deaa1630.jpg",
      link: "#",
      linkText: "Training Journey"
    },
    photography: {
      title: "Photography 📸",
      subtitle: "Capturing moments & stories",
      description: "I love wandering around with my camera, snapping street shots and goofy portraits of friends. Sometimes I get lucky and capture something cool—other times, it’s just pigeons. Either way, it’s all about having fun and seeing the world in a new way!",
      image: "/static/photography.png",
      link: "https://www.instagram.com/photography_cafeee/",
      linkText: "Photo Gallery"
    },
    basketball: {
      title: "Basketball 🏀",
      subtitle: "Teamwork & strategy",
      description: "I’m not making the NBA, but I love a good pickup game. Sometimes I hit threes, sometimes I trip over my own feet. Either way, it’s all about the laughs and high-fives.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      linkText: "Game Highlights"
    },
    finance: {
      title: "Personal Finance 💰",
      subtitle: "Building wealth & security",
      description: "Budgeting, investing, and trying not to blow my paycheck on coffee. I geek out over spreadsheets and love the feeling of finding a good deal. Adulting, but make it fun! Above is my current asset allocation - it's not much, but it's honest work! 😅 Follow my investment journey on Blossm to see if I actually know what I'm doing or if I'm just really good at pretending.",
      image: "/static/bloosm.png",
      link: "https://link.blossomsocial.com/7uYa/dj5z7gwa",
      linkText: "Follow My Investment Journey"
    },
    markets: {
      title: "Financial Markets 📈",
      subtitle: "Trading & analysis",
      description: "Stocks go up, stocks go down, and I’m here for the ride. I enjoy reading charts, making wild predictions, and pretending I’m on Wall Street (from my laptop, in pajamas).",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      linkText: "Market Analysis"
    },
    traveling: {
      title: "Traveling ✈️",
      subtitle: "Exploring new places",
      description: "I love hopping on planes, trains, and the occasional sketchy bus to see new places. Every trip comes with stories, weird snacks, and at least one lost sock.",
      image: "/static/newYork.png",
      link: "#",
      linkText: "Travel Stories"
    },
  };

  const currentContent = activityContent[selectedActivity as keyof typeof activityContent];

  return (
    <section id="fun" aria-label="Fun" className="py-20">
      <SectionHeader id="fun" title="Fun" />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        There's more to life than just work and school so I'm a strong advocate for side quests in life :). From martial arts to financial markets, here are some of my notable adventures (click around!) ✨:
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Side Quests</h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {sideQuests.map((quest, i) => (
                <motion.div
                  key={quest.id}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg transition-all cursor-pointer ${
                    selectedActivity === quest.id 
                      ? 'bg-blue-200 dark:bg-blue-700/50 shadow-md' 
                      : 'hover:bg-blue-100 dark:hover:bg-blue-800/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onClick={() => setSelectedActivity(quest.id)}
                >
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-2xl"
                  >
                    {quest.emoji}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{quest.label}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{quest.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"></h3>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm h-[400px] sm:h-[500px] overflow-y-auto">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                {currentContent.title.split(' ').pop()}
              </motion.div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{currentContent.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{currentContent.subtitle}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <img 
                src={currentContent.image} 
                alt={currentContent.title}
                className="w-full h-48 sm:h-64 md:h-80 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {currentContent.description}
              </p>

              {currentContent.achievements && (
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {currentContent.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {currentContent.link !== "#" && (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6"
              >
                <a 
                  href={currentContent.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {currentContent.linkText} <ExternalLink className="h-4 w-4"/>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact(){
  return (
    <section id="contact" aria-label="Contact" className="py-16">
      <SectionHeader id="contact" title="Contact" />
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Email <a href="mailto:nima.motieifard@gmail.com" className="underline font-medium text-gray-900 dark:text-white">nima.motieifard@gmail.com</a>. Based in Vancouver, BC.
        </p>
      </motion.div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="mt-16 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
      <IconLink href="https://github.com/nimamot" label="GitHub">
        <Github className="h-4 w-4"/> GitHub
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/nima-motieifard/" label="LinkedIn">
        <Linkedin className="h-4 w-4"/> LinkedIn
      </IconLink>
              <IconLink href="mailto:nima.motieifard@gmail.com" label="Email">
        <Mail className="h-4 w-4"/> Email
      </IconLink>
      <span className="mt-2 sm:mt-0 sm:ml-2">© {new Date().getFullYear()} Nima :')</span>
    </footer>
  );
}
