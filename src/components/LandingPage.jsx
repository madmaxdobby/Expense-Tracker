import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, BarChart3, Zap, Lock, Mail, Github, Twitter, Sun, Moon, Linkedin } from 'lucide-react';
import Logo from './Logo';

const LandingPage = ({ onJoin }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check system preference or localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    // Update HTML element class
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Tracking',
      description: 'See every transaction as it happens. Categorize automatically and stay on top of your budget.'
    },
    {
      icon: Zap,
      title: 'Smart Insights',
      description: 'Our AI analyzes your spending patterns to suggest where you can save and how to reach your goals faster.'
    },
    {
      icon: Lock,
      title: 'Bank-level Security',
      description: 'Your data is encrypted with the same technology used by global banks. Your privacy is our priority.'
    }
  ];

  const techStack = [
    { name: 'React', color: 'from-blue-400 to-blue-600', icon: '⚛️' },
    { name: 'Vite', color: 'from-purple-400 to-purple-600', icon: '⚡' },
    { name: 'Firebase', color: 'from-yellow-400 to-orange-600', icon: '🔥' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-600', icon: '🎨' },
    { name: 'Framer Motion', color: 'from-pink-400 to-rose-600', icon: '✨' },
    { name: 'Chart.js', color: 'from-green-400 to-emerald-600', icon: '📊' }
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo size="medium" showText={true} />
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all transform hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-slate-700" />
                )}
              </button>
              <button 
                onClick={onJoin}
                className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-extrabold tracking-tight leading-none mb-8 text-slate-900 dark:text-white"
          >
            Your Financial Ally
          </motion.h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Financy helps you track expenses, providing you insights on spending habits effortlessly.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={onJoin}
              className="px-10 py-4 bg-blue-600 text-white text-lg font-bold rounded-full shadow-xl shadow-blue-600/30 flex items-center gap-2 hover:bg-blue-700 transition-all"
            >
              Get Started <span>→</span>
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(174, 81, 51, 0.2)" }}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl text-center hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-75 cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
                  className="bg-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                >
                  <Icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Engineering Spotlight Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="space-y-16">

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
              Built With Modern Technology
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-75 cursor-pointer"
                >
                  <div className={`text-4xl bg-gradient-to-br ${tech.color} bg-clip-text`}>
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Highlights & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project Highlights */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Project Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">5+ Advanced Features</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Category Analytics, Monthly Trends, Budget Alerts, CSV Import, Enhanced Graphs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Real-time Synchronization</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Firestore integration for live data updates across devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Bank-level Security</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Environment variables, secure authentication, encrypted data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Responsive Design</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Mobile-first approach with professional UI/UX patterns</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'React 18.3', desc: 'UI Framework' },
                    { name: 'Vite 5.4', desc: 'Build Tool' },
                    { name: 'Firebase 10.8', desc: 'Backend & Auth' },
                    { name: 'Tailwind CSS', desc: 'Styling' },
                    { name: 'Chart.js', desc: 'Visualization' },
                    { name: 'Framer Motion', desc: 'Animations' }
                  ].map((tech, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(174, 81, 51, 0.15)" }}
                      transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
                      className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700 cursor-pointer transition-all duration-75"
                    >
                      <p className="font-semibold text-sm text-slate-900 dark:text-white">{tech.name}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{tech.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;