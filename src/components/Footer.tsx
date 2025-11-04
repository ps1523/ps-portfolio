import { Heart, Code, Github, Linkedin, Globe, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/ps1523', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/prabhashankar-k', label: 'LinkedIn' },
    { icon: Globe, url: 'https://ps.squidnova.in', label: 'Portfolio' },
    { icon: Mail, url: 'prabhashankark2003@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PRABHA SHANKAR K
            </h3>
            <p className="text-gray-400 mb-4">
              Passionate tech professional specializing in Cloud Computing, Cybersecurity, Embedded Systems, and Web Development.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Code size={20} className="text-cyan-400" />
              <span>Building innovative solutions</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Connect With Me</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transform hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Prabha Shankar K
            </p>

            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved
            </p>

            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Specializing in Cloud & DevOps | Cybersecurity | Embedded Systems | Web Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
