import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function EnhancedAbout() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && aboutRef.current) {
      // GSAP animations for social icons
      gsap.fromTo(
        aboutRef.current.querySelectorAll('.social-icon'),
        { 
          y: 50, 
          opacity: 0,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [isInView]);

  return (
    <section ref={aboutRef} className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-10 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-gradient-to-r from-indigo-500 to-purple-500 p-1">
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">N</span>
                </div>
              </div>
              
              {/* Floating elements around profile */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
              >
                <span className="text-xs">☕</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity, delay: 1 },
                  scale: { duration: 1, repeat: Infinity }
                }}
              >
                <span className="text-xs">💻</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a 
                href="https://github.com/nimamot" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-5 w-5 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors" />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/nima-motieifard/" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors" />
              </motion.a>
              
              <motion.a 
                href="mailto:nima.motieifard@gmail.com"
                className="social-icon w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Hi there! 👋
            </motion.h3>
            
            <motion.p 
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Hey! I'm Nima, and thanks for stopping by! I'm currently in my 5th year at UBC, 
              majoring in Cognitive Systems and minoring in Data Science. When I'm not buried 
              in coursework, you'll probably find me hitting the gym, snapping some photos, 
              or enjoying a good cup of coffee.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              This site is my little corner of the internet where I share projects, thoughts, 
              and whatever else comes to mind. Feel free to explore around!
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              If anything catches your eye or you just want to connect, my socials are above 
              and in the footer. Always up for a coffee chat or Formula 1 discussion! 🏎️
            </motion.p>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { label: "Years at UBC", value: "5th", icon: "🎓" },
                { label: "Major", value: "Cognitive Systems", icon: "🧠" },
                { label: "Minor", value: "Data Science", icon: "📊" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

