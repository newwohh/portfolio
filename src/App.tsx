import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Music, Code, Coffee, Rocket, Briefcase, GraduationCap, Award, Building2, Users } from 'lucide-react';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const experiences = [
    {
      company: 'Helixo',
      role: 'Software Engineer',
      period: '2023 - Present',
      description: "Contributing to building Shopify apps that enhance merchants' capabilities. Developing features, debugging issues, and collaborating with cross-functional teams.",
      icon: Building2,
      skills: ['React', 'Node.js', 'Shopify', 'TypeScript'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'Ecloto Design',
      role: 'Developer',
      period: '2022 - 2023',
      description: 'Worked on several Shopify projects and learned the intricacies of the Shopify ecosystem.',
      icon: Users,
      skills: ['Shopify', 'JavaScript', 'Liquid', 'CSS'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const stories = [
    {
      year: '2020',
      title: 'Started Learning Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript during the pandemic lockdown.',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600',
      align: 'left'
    },
    {
      year: '2021',
      title: 'First Freelance Project',
      description: 'Completed my first client project using React and Node.js.',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      align: 'right'
    },
    {
      year: '2022',
      title: 'Joined Ecloto Design',
      description: 'Started my professional journey in Shopify development.',
      icon: Briefcase,
      color: 'from-green-500 to-green-600',
      align: 'left'
    },
    {
      year: '2023 - Present',
      title: 'Software Engineer at Helixo',
      description: 'Leading development of Shopify apps and mentoring junior developers.',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
      align: 'right'
    },
    {
      year: '2025',
      title: 'Tech Community Leader',
      description: 'Organizing tech meetups and contributing to open source projects.',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      align: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Nevin Raju
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 mb-8"
            >
              Software Engineer • MERN Stack Developer • Shopify Expert
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex justify-center space-x-6"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-8 text-center"
            >
              About Me
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              I'm a self-taught developer based in Kochi, Kerala, specializing in creating dynamic and responsive web applications. My journey in tech started in high school, where I discovered my passion for coding and problem-solving.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-gray-600 text-sm">MERN Stack Expert</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Problem Solving</h3>
                <p className="text-gray-600 text-sm">Analytical Thinker</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Music</h3>
                <p className="text-gray-600 text-sm">Creative Soul</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Section with Zigzag Timeline */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-zinc-50 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-16 text-center"
            >
              My Journey
            </motion.h2>
            
            <div className="relative">
              {/* Zigzag line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 opacity-30"
                  style={{ transformOrigin: 'top' }}
                />
              </div>

              <div className="space-y-24">
                {stories.map((story, index) => (
                  <motion.div
                    key={story.year}
                    initial={{ opacity: 0, x: story.align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      story.align === 'left' ? 'justify-start' : 'justify-end'
                    } ${story.align === 'left' ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                  >
                    <div className={`w-full md:w-[calc(50%-2rem)] ${
                      story.align === 'left' ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                        {/* Connector line */}
                        <div className={`absolute top-1/2 ${
                          story.align === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                        } w-8 h-[2px] bg-gradient-to-r ${story.color}`} />
                        
                        {/* Content */}
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${story.color} flex items-center justify-center`}>
                            <story.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-grow">
                            <span className="text-sm font-medium text-gray-500">{story.year}</span>
                            <h3 className="text-xl font-semibold mt-1 mb-2">{story.title}</h3>
                            <p className="text-gray-600">{story.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-16 text-center"
            >
              Experience
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 gap-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl transform transition-transform group-hover:scale-[1.02] shadow-sm" />
                  <div className="relative p-8 flex flex-col md:flex-row gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                      <exp.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-zinc-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Nevin Raju. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;