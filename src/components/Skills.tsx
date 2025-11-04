import { Code2, Cloud, Shield, Cpu, Database, Wrench, Terminal, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'C/C++', level: 70 },
        { name: 'Java', level: 70 },
        { name: 'Python', level: 70 },
        { name: 'JavaScript', level: 70 },
        { name: 'HAL Code', level: 70 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'AWS (EC2, S3, RDS, VPC, IAM)', level: 70 },
        { name: 'Azure', level: 70 },
        { name: 'GCP', level: 70 },
        { name: 'Terraform', level: 70 },
        { name: 'Docker', level: 70 },
        { name: 'Git & GitHub', level: 70 },
        { name: 'Ansible', level: 70 },
        { name: 'Maven & Tomcat', level: 70 }
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Network Security', level: 70 },
        { name: 'Ethical Hacking', level: 70 },
        { name: 'Threat Analysis', level: 70 },
        { name: 'Penetration Testing', level: 70 },
        { name: 'Security Tools', level: 70 }
      ]
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      color: 'from-emerald-500 to-green-500',
      skills: [
        { name: 'STM32', level: 70 },
        { name: 'Arduino', level: 70 },
        { name: 'Raspberry Pi', level: 70 },
        { name: 'IoT', level: 70 },
        { name: 'Firmware Development', level: 70 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'HTML/CSS', level: 70 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 70 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'Responsive Design', level: 70 }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'Firebase', level: 70 },
        { name: 'Oracle SQL', level: 70 },
        { name: 'RDS & Aurora', level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'VS Code', level: 70 },
        { name: 'STM32CubeIDE', level: 70 },
        { name: 'Arduino IDE', level: 70 },
        { name: 'Vim', level: 70 },
        { name: 'Kali Linux', level: 70 }
      ]
    },
    {
      icon: Terminal,
      title: 'Operating Systems',
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Windows', level: 70 },
        { name: 'Linux', level: 70 },
        { name: 'Mac OS', level: 70 },
        { name: 'Embedded Linux', level: 70 }
      ]
    }
  ];

  const softSkills = [
    'Communication',
    'Critical Thinking',
    'Problem Solving',
    'Adaptability',
    'Leadership',
    'Team Collaboration'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Comprehensive expertise across multiple technology domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Intermediate
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg text-center transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <p className="font-semibold text-gray-800 dark:text-white">
                  {skill}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
