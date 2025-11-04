import { GraduationCap, Calendar, Award, Briefcase } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Rathinam Technical Campus, Coimbatore',
      duration: 'Expected 2026',
      cgpa: '7.9 CGPA',
      color: 'from-cyan-500 to-blue-500',
      status: 'In Progress'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sri Krishna Adithya College of Arts and Science, Coimbatore',
      duration: '2021 - 2024',
      cgpa: '7.4 CGPA',
      color: 'from-blue-500 to-emerald-500',
      status: 'Completed'
    }
  ];

  const experience = [
    {
      role: 'IOT Firmware Intern',
      company: 'DSIB TECH',
      duration: 'June - August, 2022',
      description: 'Participated in a hands-on internship focused on IOT-based automation in science. Gained foundational exposure to smart technologies and their real-time applications.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Academic background and professional experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${edu.color} rounded-l-xl`}></div>

                  <div className="ml-4">
                    <div className="flex items-start justify-between mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-2">
                      <Award className="text-cyan-500" size={20} />
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color} rounded-l-xl`}></div>

                  <div className="ml-4">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h4>

                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3">
                      {exp.company}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Excellence
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            Consistently maintaining strong academic performance while pursuing multiple technology domains
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                7.9
              </div>
              <p className="text-gray-600 dark:text-gray-400">MCA CGPA</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                7.4
              </div>
              <p className="text-gray-600 dark:text-gray-400">BCA CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
