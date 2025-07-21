import { User, BookOpen, Briefcase, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <User className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">About Me</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Background</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated Computer Science student with a passion for software engineering and problem-solving. 
                My journey in programming began with curiosity about how technology works, and has evolved into a 
                deep commitment to creating meaningful digital experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Through academic projects and personal learning, I've developed strong foundations in multiple 
                programming languages and frameworks. I thrive in collaborative environments and enjoy tackling 
                complex challenges that push the boundaries of what's possible.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Education & Goals</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="text-blue-400 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                    <p className="text-gray-400">Expected Graduation: 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="text-blue-400 mr-3 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Career Objective</h4>
                    <p className="text-gray-400">Software Engineer at innovative tech company</p>
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
