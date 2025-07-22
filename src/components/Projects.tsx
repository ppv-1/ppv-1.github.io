import { Briefcase, ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiVuedotjs,
  SiFirebase,
  SiSocketdotio,
  SiPython,
  SiD3Dotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiMysql,
  SiDocker,
  SiTensorflow,
  SiFastapi
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - MyChess  */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">MyChess</h3>
                  <Github className="text-gray-400 hover:text-white transition-colors" size={24} />
                </div>
                <p className="text-gray-400 mb-4 flex-1">
                  Full-stack chess tournament management website with RESTful API microservices architecture. Features authentication with JWT and CI/CD pipeline using Docker, GitHub Actions and AWS EC2.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <div className="flex items-center bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                    <FaJava size={16} className="mr-1" />
                    Java
                  </div>
                  <div className="flex items-center bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    <SiSpringboot size={16} className="mr-1" />
                    Spring Boot
                  </div>
                  <div className="flex items-center bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    <SiReact size={16} className="mr-1" />
                    React
                  </div>
                  <div className="flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    <SiTailwindcss size={16} className="mr-1" />
                    Tailwind
                  </div>
                  <div className="flex items-center bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                    <SiMysql size={16} className="mr-1" />
                    MySQL
                  </div>
                  <div className="flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    <SiDocker size={16} className="mr-1" />
                    Docker
                  </div>
                  <div className="flex items-center bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full text-sm">
                    <SiGithubactions size={16} className="mr-1" />
                    GitHub Actions
                  </div>
                  <div className="flex items-center bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    <FaAws size={16} className="mr-1" />
                    AWS
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Scribble Animals */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Scribble Animals</h3>
                  <Github className="text-gray-400 hover:text-white transition-colors" size={24} />
                </div>
                <p className="text-gray-400 mb-4 flex-1">
                  Web-based doodle recognition game developed during NUS Hack&Roll 2025. Integrates TensorFlow CNN models for real-time doodle recognition with WebSocket technology for live gameplay updates.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <div className="flex items-center bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    <SiReact size={16} className="mr-1" />
                    React
                  </div>
                  <div className="flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    <SiTailwindcss size={16} className="mr-1" />
                    Material Tailwind
                  </div>
                  <div className="flex items-center bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    <SiFastapi size={16} className="mr-1" />
                    FastAPI
                  </div>
                  <div className="flex items-center bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                    <SiTensorflow size={16} className="mr-1" />
                    TensorFlow
                  </div>
                  <div className="flex items-center bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    <SiSocketdotio size={16} className="mr-1" />
                    WebSockets
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Scrooge Global Bank CRM */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors flex flex-col">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Scrooge Global Bank - CRM System</h3>
                  <Github className="text-gray-400 hover:text-white transition-colors" size={24} />
                </div>
                <p className="text-gray-400 mb-4 flex-1">
                  Cloud-native Customer Relationship Management system for financial services. Features microservices architecture, role-based access control, transaction processing via SFTP, and comprehensive AWS infrastructure with high availability and regulatory compliance.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <div className="flex items-center bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    <SiReact size={16} className="mr-1" />
                    React
                  </div>
                  <div className="flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    <SiTailwindcss size={16} className="mr-1" />
                    Tailwind
                  </div>
                  <div className="flex items-center bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    <SiSpringboot size={16} className="mr-1" />
                    Spring Boot
                  </div>
                  <div className="flex items-center bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                    <SiMysql size={16} className="mr-1" />
                    MySQL
                  </div>
                  <div className="flex items-center bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    <FaAws size={16} className="mr-1" />
                    AWS
                  </div>
                  <div className="flex items-center bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    <SiDocker size={16} className="mr-1" />
                    Docker
                  </div>
                  <div className="flex items-center bg-gray-600/20 text-gray-400 px-3 py-1 rounded-full text-sm">
                    <SiGithubactions size={16} className="mr-1" />
                    GitHub Actions
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

export default Projects;
