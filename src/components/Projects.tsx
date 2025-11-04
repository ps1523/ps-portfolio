import { Cloud, Shield, Cpu, Globe, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Cloud,
      title: 'Static Website Hosting on AWS',
      category: 'Cloud & DevOps',
      description: 'Deployed a static website on Windows and Linux EC2 instances, configured EBS volumes, security groups, and snapshots for data security. Utilized S3 for object storage and enabled public access for hosting.',
      technologies: ['AWS', 'EC2', 'S3', 'EBS', 'Linux', 'Windows'],
      color: 'from-cyan-500 to-blue-500',
      gradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20'
    },
    {
      icon: Cloud,
      title: 'Multi-Tier Project on Amazon Linux',
      category: 'Cloud & DevOps',
      description: 'Developed a multi-tier architecture using EC2, RDS, and VPC with secure networking via subnets, route tables, and internet gateway. Integrated Tomcat and Maven for application deployment and build automation. Automated infrastructure provisioning using Terraform and Ansible, and containerized the application with Docker.',
      technologies: ['AWS', 'EC2', 'RDS', 'VPC', 'Terraform', 'Ansible', 'Docker', 'Maven', 'Tomcat'],
      color: 'from-blue-500 to-purple-500',
      gradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      icon: Shield,
      title: 'Website Analysis Using Python',
      category: 'Cybersecurity',
      description: 'A Python-Flask web app that checks website URLs for security by analyzing domain details, SSL certificates, and content structure to flag malicious sites.',
      technologies: ['Python', 'Flask', 'BeautifulSoup', 'WHOIS', 'SSL'],
      color: 'from-red-500 to-orange-500',
      gradient: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20'
    },
    {
      icon: Shield,
      title: 'Detect Scam Email Using Java',
      category: 'Cybersecurity',
      description: 'A Java-based application that detects phishing and scam emails using rule-based and machine learning techniques. It parses email headers and content to identify spam patterns and malicious intent.',
      technologies: ['Java', 'JavaMail API', 'Jsoup', 'Apache OpenNLP', 'ML'],
      color: 'from-orange-500 to-yellow-500',
      gradient: 'from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20'
    },
    {
      icon: Cpu,
      title: 'DHT11 Temperature & Humidity Monitor',
      category: 'Embedded Systems',
      description: 'Reads temperature and humidity values from a DHT11 sensor and displays them via UART using STM32 HAL libraries in STM32CubeIDE with STM32 Nucleo-F446RE board.',
      technologies: ['STM32', 'DHT11', 'HAL', 'UART', 'C'],
      color: 'from-emerald-500 to-green-500',
      gradient: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20'
    },
    {
      icon: Cpu,
      title: 'MQ135 Air Quality Monitor',
      category: 'Embedded Systems',
      description: 'Interfaces the MQ135 air quality sensor with STM32 to measure gases like CO₂, NH₃, and smoke, processing analog signals through ADC and displaying results via UART.',
      technologies: ['STM32', 'MQ135', 'ADC', 'UART', 'C'],
      color: 'from-green-500 to-teal-500',
      gradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20'
    },
    {
      icon: Cpu,
      title: 'Cloud-Integrated Environmental Monitoring',
      category: 'Embedded Systems & IoT',
      description: 'An IoT-based system that monitors environmental parameters such as temperature, humidity, and air quality using sensors, and uploads real-time data to the cloud for analysis and visualization.',
      technologies: ['ESP32', 'DHT11', 'MQ135', 'IoT', 'Cloud'],
      color: 'from-teal-500 to-cyan-500',
      gradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20'
    },
    {
      icon: Globe,
      title: 'Public Bus Route Tracking System',
      category: 'Web Development',
      description: 'A web-based system to track public bus routes and provide real-time information about schedules and routes for users.',
      technologies: ['ASP.NET', 'MS SQL Server', 'C#'],
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: Globe,
      title: 'Blood Bank Management System',
      category: 'Web Development',
      description: 'A web interface for managing donor data and simulating SMS/call notifications with an intuitive frontend design.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-pink-500 to-red-500',
      gradient: 'from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20'
    },
    {
      icon: Globe,
      title: 'Fees Portal',
      category: 'Web Development',
      description: 'A web application for digitizing fee management, enabling admins to manage records and students to pay securely online.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-yellow-500 to-orange-500',
      gradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    },
    {
      icon: Globe,
      title: 'Smart Parking Management System',
      category: 'Web Development',
      description: 'A smart parking management system for cars and bikes, allowing users to book parking slots instantly at malls, cinemas, and event halls using QR code technology.',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'QR Code'],
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Real-world applications across Cloud, Cybersecurity, Embedded Systems, and Web Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className={`p-6 bg-gradient-to-br ${project.gradient}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} shadow-lg`}>
                    <project.icon className="text-white" size={28} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/ps1523"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={20} />
            <span className="font-semibold">View More Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
