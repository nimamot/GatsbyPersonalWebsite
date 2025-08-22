
import React, { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Youtube, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Typewriter from "@/components/Typewriter";
import { SectionHeader, Card, Divider } from "@/components/Section";

export default function Home(){
  return (
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
        <Contact />
        <Footer />
      </main>
    </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-2xl text-gray-500 dark:text-gray-400 mb-2"
          >
            Howdy! I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1, duration: 0.6 }} 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Nima Motieifard
          </motion.h1>
          <Typewriter 
            className="text-2xl sm:text-3xl text-gray-500 dark:text-gray-400 mb-10 font-medium" 
            phrases={["Software Engineer", "Cybersecurity Enthusiast", "Data Scientist", "ML/AI Explorer", "Coffee Lover ☕", "I like building useful things"]} 
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto w-80 sm:w-96"
        >
          {/* Floating animated elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-8 -left-8 text-4xl text-blue-400 dark:text-blue-300"
          >
            💻
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -top-4 -right-4 text-3xl text-green-400 dark:text-green-300"
          >
            🔒
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 -left-12 text-3xl text-purple-400 dark:text-purple-300"
          >
            📊
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/2 -right-12 text-3xl text-orange-400 dark:text-orange-300"
          >
            🤖
          </motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute -bottom-6 left-1/4 text-3xl text-pink-400 dark:text-pink-300"
          >
            ☕
          </motion.div>

          <div className="relative aspect-square w-full rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden shadow-lg">
            <motion.div 
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-8xl"
            >
              🧑🏻‍💻
            </motion.div>
            
            {/* Inner floating elements */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-6 right-6 text-2xl"
            >
              ✨
            </motion.div>
            
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -360]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-6 left-6 text-2xl"
            >
              ⚡
            </motion.div>
            
            <motion.div 
              animate={{ 
                y: [0, -5, 0],
                x: [0, 3, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-6 left-1/3 text-2xl"
            >
              🚀
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About(){
  return (
    <section id="about" aria-label="About" className="py-20">
      <SectionHeader id="about" title="About Me" />
      <div className="mt-16 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-6"
        >
          <motion.a 
            href="https://github.com/nimamot" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/nima-motieifard/" 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </motion.a>
                      <motion.a 
              href="mailto:nima.motieifard@gmail.com"
              className="w-12 h-12 rounded-full border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 text-gray-900 dark:text-gray-100" />
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
            Hey! I'm Nima, and thanks for stopping by! I'm currently in my 5th year at UBC, majoring in Cognitive Systems and minoring in Data Science. When I'm not buried in coursework, you'll probably find me hitting the gym, snapping some photos, or enjoying a good cup of coffee.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            This site is my little corner of the internet where I share projects, thoughts, and whatever else comes to mind. Feel free to explore around!
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            If anything catches your eye or you just want to connect, my socials are above and in the footer. Always up for a coffee chat or Formula 1 discussion! :')
          </p>
        </motion.div>
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
            <summary className="flex cursor-pointer list-none items-center justify-between p-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={it.logo} 
                    alt={`${it.company} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{it.role} @ {it.company}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 text-red-500">📍</div>
                    <div className="text-lg text-gray-600 dark:text-gray-400">{it.location}</div>
                    <div className="text-lg text-gray-500 dark:text-gray-500">•</div>
                    <div className="text-lg text-gray-600 dark:text-gray-400">{it.when}</div>
                  </div>
                </div>
              </div>
              <motion.span 
                className="text-gray-400 dark:text-gray-500 group-open:rotate-180 transition-transform duration-300 text-2xl"
                whileHover={{ scale: 1.2 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="white"/>
                  <path d="M10 14L16 20L22 14" stroke="#19191C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </summary>
            
            <div className="px-8 pb-8 ml-20 space-y-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
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
      title: "Quantitative Trading Analysis Platform",
      subtitle: "Web-based financial analysis & backtesting",
      desc: "Comprehensive quantitative trading analysis platform built with Streamlit providing real-time financial data analysis, technical indicators, backtesting capabilities, and sentiment analysis. Features include moving average crossover strategies, RSI mean reversion, volatility analysis, and multi-source sentiment analysis from Reddit and Google News using VADER sentiment analysis.",
      tech: "Python • Streamlit • Pandas • NumPy • Plotly • Yahoo Finance API • VADER Sentiment",
      link: "https://quantalgo.streamlit.app",
      github: "https://github.com/shariqimran/Quant",
      color: "from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=80" // Trading charts
    },
    {
      title: "TripExpense - Modern Trip Expense Tracker",
      subtitle: "Full-stack expense splitting application",
      desc: "Full-stack web application that revolutionizes how friends split and track expenses during trips. Features smart expense tracking with automatic equal splitting, real-time balance calculation, group management with shareable links, comprehensive dashboard, CSV export, and AI-powered settlement suggestions. Built with modern technologies for seamless, secure, and intuitive group finance management.",
      tech: "Next.js 14 • TypeScript • Tailwind CSS • Supabase • PostgreSQL • Vercel • Framer Motion",
      link: "#",
      github: "https://github.com/nimamot/TripExpense",
      color: "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=80" // Travel/expense tracking
    },
    {
      title: "peerAdvice (nwHacks Hackathon)",
      subtitle: "Peer-to-peer advising platform",
      desc: "Designed and developed a peer-to-peer advising platform utilizing Python, Flask, and PostgreSQL with user authentication implemented through Google OAuth and Firebase and appointment scheduling via Calendly API. Incorporated front-end technologies such as HTML, CSS, and JavaScript to create an intuitive interface and smooth user experience. Applied Agile methodologies for efficient project management and collaboration resulting in a functional and user-friendly solution.",
      tech: "Python • Flask • PostgreSQL • Google OAuth • Firebase • Calendly API • HTML • CSS • JavaScript",
      link: "https://github.com/nimamot/peer_Advice",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" // Teamwork/peer advice
    },
    {
      title: "mAssenger (Featured by Brain Station)",
      subtitle: "iOS chat & media app",
      desc: "Constructed a messenger app for iOS. The program allowed the user to create an account with their email address, login to their account, search for other users, and share texts, pictures, videos, and locations. User authentication is handled through FireBase cloud services. Users data (username, email, previous conversations) is also stored on FireBase so that the users can see their data when they log back in to their account. The app was developed with Swift and Ruby.",
      tech: "Swift • Ruby • Firebase • iOS",
      link: "https://github.com/nimamot/Massenger", 
      color: "from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=200" // iOS Messenger (phone chat)
    },
    {
      title: "La Letra",
      subtitle: "Spanish learning with music",
      desc: "Interactive Spanish learning platform with song-based vocabulary and grammar practice.",
      tech: "Django • HTML • CSS • PythonAnywhere",
      link: "https://nimamot.github.io/Spanish/",
      color: "from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
    },
  ];

  const dataScience = [
    {
      title: "Automated Financial Analysis Pipeline",
      subtitle: "Cloud-based financial analytics",
      desc: "Designed and implemented a scalable data pipeline using AWS Lambda, S3, and DynamoDB to automate financial statement analysis. Processed user-uploaded financial statements in CSV format, conducted comprehensive analyses, and generated detailed PDF reports. Developed advanced data analysis features, including flagged transaction detection, spending trend visualization, and recurring transaction analysis, leveraging Python for data processing and visualization. Integrated cloud-based solutions for seamless data ingestion, analysis, and storage, highlighting the intersection of cloud computing and data science.",
      tech: "AWS Lambda • S3 • DynamoDB • Python • Data Science • Cloud Computing",
      link: "https://github.com/nimamot/AWS-Financial-Data-Pipeline",
      color: "from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80" // Cloud data pipeline
    },
    {
      title: "Bitcoin Price Prediction",
      subtitle: "Crypto price forecasting",
      desc: "Built a series of models, including Linear Regression, KNN, Random Forest, XGBoost, CatBoost, and LSTM, to forecast Bitcoin prices. Employed feature engineering techniques and hyperparameter optimization to enhance model accuracy and capture temporal dependencies. Developed preprocessing pipelines and utilized advanced regression analysis to uncover meaningful patterns in time-series data.",
      tech: "Python • Machine Learning • XGBoost • CatBoost • LSTM • Time Series • Feature Engineering",
      link: "https://github.com/nimamot/Price_prediction",
      color: "from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20",
      image: "https://www.ccn.com/wp-content/uploads/2025/07/bitcoin-price-breakout-or-breakdown-1536x864.webp" // Bitcoin coin and chart
    },
    {
      title: "Sports Hub",
      subtitle: "Sports data management",
      desc: "Implemented a relational database for sports management using Oracle DB and SQL, focusing on comprehensive data organization. Enhanced user experience by incorporating advanced SQL operations, facilitating powerful data manipulation and insights. Designed a user-friendly web interface for efficient database interaction, featuring error handling and input validation.",
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
  ];
  
  // Helper to render a project card (collapsible)
  function CollapsibleProjectCard({ project }: { project: any }) {
    const [open, setOpen] = React.useState(false);
        return (
          <div className={`w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm mb-8 transition-all ${open ? 'ring-2 ring-blue-300' : ''}`}> 
        <button
          className="w-full flex items-center gap-6 px-8 py-8 text-left focus:outline-none"
          style={{ minHeight: '120px' }}
          onClick={() => setOpen((v) => !v)}
        >
          {project.image && (
            <img src={project.image} alt={project.title} className="w-20 h-20 object-cover rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mr-4" />
          )}
          <div className="flex-1">
            <div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</span>
              {project.emoji && <span className="ml-1 text-xl">{project.emoji}</span>}
            </div>
            {project.subtitle && (
              <div className="text-lg font-medium text-gray-500 dark:text-gray-400 mt-1">{project.subtitle}</div>
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
          <div className="px-8 pb-8">
            {project.desc && (
              <div className="text-lg text-gray-600 dark:text-gray-300 mb-4">{project.desc}</div>
            )}
            {project.tech && (
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center justify-between">
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
    { section: 'Data Science', projects: dataScience }
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
    { id: "f1", emoji: "🏎️", label: "Formula 1", desc: "Racing & strategy" },
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
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
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
      description: "Budgeting, investing, and trying not to blow my paycheck on coffee. I geek out over spreadsheets and love the feeling of finding a good deal. Adulting, but make it fun!",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      linkText: "Finance Blog"
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
    f1: {
      title: "Formula 1 🏎️",
      subtitle: "Racing & strategy",
      description: "Fast cars, wild strategy, and way too much yelling at the TV. F1 is my excuse to geek out over engineering and pretend I could totally drive like that (spoiler: I can’t).",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop",
      link: "#",
      linkText: "F1 Analysis"
    }
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Side Quests</h3>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {sideQuests.map((quest, i) => (
                <motion.div
                  key={quest.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                    selectedActivity === quest.id 
                      ? 'bg-amber-200 dark:bg-amber-700/50 shadow-md' 
                      : 'hover:bg-amber-100 dark:hover:bg-amber-800/30'
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
                    <div className="font-semibold text-gray-900 dark:text-white">{quest.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{quest.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          key={selectedActivity}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"></h3>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm h-[500px] overflow-y-auto">
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
                className="w-full h-80 object-contain rounded-lg mb-4"
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
    <footer className="mt-16 mb-10 flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
      <IconLink href="https://github.com/nimamot" label="GitHub">
        <Github className="h-4 w-4"/> GitHub
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/nima-motieifard/" label="LinkedIn">
        <Linkedin className="h-4 w-4"/> LinkedIn
      </IconLink>
              <IconLink href="mailto:nima.motieifard@gmail.com" label="Email">
        <Mail className="h-4 w-4"/> Email
      </IconLink>
      <span className="ml-2">© {new Date().getFullYear()} Nima :')</span>
    </footer>
  );
}
