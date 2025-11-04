import { Github, Linkedin, Mail, Globe, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Cloud & DevOps Engineer',
    'Cybersecurity Enthusiast',
    'Embedded Systems Developer',
    'Front-End Developer'
  ];

  useEffect(() => {
    let currentIndex = 0;
    const currentText = roles[currentRole];

    const interval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentRole]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-emerald-900/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <span className="text-6xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                PS
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
            PRABHA SHANKAR K
          </h1>

          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Motivated and detail-oriented tech professional with expertise in Cloud Computing,
            Cybersecurity, Embedded Systems, and Web Development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:prabhashankark2003@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </a>

          <a
            href="https://www.linkedin.com/in/prabhashankar-k"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-cyan-500"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/ps1523"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-500"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://ps.squidnova.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-emerald-500"
          >
            <Globe size={20} />
            <span>Website</span>
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
        >
          <span>Explore More</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
