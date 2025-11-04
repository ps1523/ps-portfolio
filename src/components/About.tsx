import { Code, Cloud, Shield, Cpu, Award, Users } from 'lucide-react';

const About = () => {
  const specializations = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, GCP, Terraform, Docker, Kubernetes',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Network Security, Ethical Hacking, Threat Analysis',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'STM32, Arduino, IoT, Firmware Development',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'React, JavaScript, HTML/CSS, Full Stack',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const strengths = [
    'Strong understanding of cloud computing concepts',
    'Hands-on experience in automation and DevOps pipelines',
    'Quick learner with the ability to adapt to new technologies',
    'Good team player with excellent problem-solving skills',
    'Communication and Critical Thinking',
    'Leadership and Adaptability'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Motivated and detail-oriented technology professional with expertise across multiple domains
                including Cloud Computing, Cybersecurity, Embedded Systems, and Web Development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Skilled in Amazon Web Services (AWS), Infrastructure as Code, automation tools, network security,
                firmware development, and modern web technologies. Seeking opportunities to apply comprehensive
                technical knowledge to deliver scalable, secure, and efficient solutions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <Award className="text-cyan-500" size={28} />
              Core Strengths
            </h3>
            <div className="grid gap-3">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  <p className="text-gray-700 dark:text-gray-300">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Areas of Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-cyan-500"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${spec.color} mb-4 shadow-lg`}>
                  <spec.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {spec.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg">
            <Users size={20} />
            <span className="font-semibold">Location: Coimbatore, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
