import { User, BookOpen, Briefcase, Download } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <User className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Background</h3>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                    As a Computer Science student passionate about software engineering, I specialize in building impactful digital solutions through collaborative problem-solving and clean code.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg font-light">
                    With hands-on experience in full-stack development (React/Spring Boot) and cloud architecture (AWS Certified Solutions Architect), I build scalable and efficient applications.
                  </p>
                </div>
                <div className="flex justify-center mt-auto">
                  <a
                    href="/resume.pdf"
                    download="Marcus_Resume_Updated_07/25.pdf"
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <Download size={20} className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Education & Experience</h3>
              <div className="space-y-6 flex-1">
                <div className="flex items-start">
                  <BookOpen className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">Bachelor of Science (Computer Science)</h4>
                    <p className="text-gray-300 text-base font-medium mb-1">Singapore Management University</p>
                    <p className="text-gray-400 text-sm">Expected Graduation: 2027</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">Software Engineer Intern</h4>
                    <p className="text-gray-300 text-base font-medium mb-1">Gosoft (Thailand)</p>
                    <p className="text-gray-400 text-sm">May 2025 - August 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
