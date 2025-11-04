import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      category: 'Cloud & DevOps',
      color: 'from-cyan-500 to-blue-500',
      certs: [
        {
          name: 'AWS CloudFront: Serve Content from Multiple S3 Buckets',
          provider: 'Coursera',
          icon: '☁️'
        },
        {
          name: 'Create a Virtual Private Cloud (VPC) Using AWS',
          provider: 'Coursera',
          icon: '🌐'
        },
        {
          name: 'AWS S3 Basics',
          provider: 'Coursera',
          icon: '📦'
        },
        {
          name: 'Azure: Create a Virtual Machine and Deploy a Web Server',
          provider: 'Microsoft Learn',
          icon: '⚡'
        },
        {
          name: 'Build a Computer Vision App with Azure Cognitive Services',
          provider: 'Microsoft Learn',
          icon: '👁️'
        }
      ]
    },
    {
      category: 'Cybersecurity',
      color: 'from-red-500 to-orange-500',
      certs: [
        {
          name: 'Network Security Course',
          provider: 'Great Learning',
          icon: '🔒'
        },
        {
          name: 'Cyber Forensics Course',
          provider: 'Great Learning',
          icon: '🔍'
        },
        {
          name: 'Ethical Hacking - Mobile Platforms and Network Architecture',
          provider: 'Great Learning',
          icon: '🛡️'
        }
      ]
    },
    {
      category: 'Embedded Systems',
      color: 'from-emerald-500 to-green-500',
      certs: [
        {
          name: 'C and Python Programming',
          provider: 'Sanfoundry University',
          icon: '💻'
        },
        {
          name: 'Bash Shell Scripting Basics',
          provider: 'Coursera',
          icon: '⚙️'
        }
      ]
    },
    {
      category: 'Web Development',
      color: 'from-purple-500 to-pink-500',
      certs: [
        {
          name: 'Web Developer Course',
          provider: 'Naan Muthalvan',
          icon: '🌟'
        },
        {
          name: 'Mobile App Development Course',
          provider: 'Accent Techno Soft (ATS)',
          icon: '📱'
        },
        {
          name: 'Android Application Development',
          provider: 'Great Learning',
          icon: '🤖'
        },
        {
          name: 'Software Testing Tutorial',
          provider: 'Great Learning',
          icon: '🧪'
        }
      ]
    }
  ];

  const achievements = [
    'Participated in National Level Talent Hunt',
    'Multiple cloud platform certifications (AWS, Azure, GCP)',
    'Comprehensive cybersecurity training',
    'Full-stack development expertise'
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Continuous learning and professional development across multiple domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg`}>
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.certs.map((cert, idx) => (
                  <div
                    key={idx}
                    className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 transition-colors">
                          {cert.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-medium px-2 py-1 bg-gradient-to-r ${category.color} text-white rounded-full`}>
                            {cert.provider}
                          </span>
                        </div>
                      </div>
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 rounded-xl shadow-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Key Achievements</h3>
            <p className="text-cyan-100">Highlights of professional development journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 transform hover:scale-105 transition-all duration-300"
              >
                <CheckCircle className="text-yellow-300 flex-shrink-0" size={24} />
                <p className="font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certification Statistics
            </h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  14+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  4
                </div>
                <p className="text-gray-600 dark:text-gray-400">Domains</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <p className="text-gray-600 dark:text-gray-400">Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
